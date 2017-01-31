let IsEqual = (a, b, t) => (t = mJs.TypeOf(a)) == mJs.TypeOf(b) ? t == "String" ? a == b : /Undefined|Null/.exec(t) ? true : /HTML/.exec(t) ? a.isSameNode(b) : IsEqual[t](a, b) : false;
((o) => o.Keys().map(k => IsEqual[k] = o[k]))({
	Number: (a, b, i) => (i = isNaN)(a) ? i(b) : i(b) ? false : a == b,
	Boolean: (a, b) => !a ^ b,
	RegExp: (a, b) => ["source", "flags", "sticky", "ignoreCase", "multiline", "global", "unicode"].every(k => a[k] == b[k]),
	Date: (a, b) => a.getTime() == b.getTime(),
	Error: (a, b) => ["message", "fileName", "lineNumber"].every(k => a[k] == b[k]),
	Object: (a, b) => a.Keys().concat(b.Keys()).Unique().every(k => mJs.IsEqual(a[k], b[k])),
	Array: (a, b) => a.length == b.length && a.every((v, i) => b[i] == v),
	Function: () => alert("你是不是有病哦还要判断函数相等")
});
Array.prototype.Unique = function(c, t) {
	return (c = this).length ? (t = c.shift()) && 0 || c.some(v => IsEqual(t, v)) ? c.Unique() : [t].concat(c.Unique()) : [];
};