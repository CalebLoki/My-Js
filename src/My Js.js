{
	Object.prototype.Keys = function() {
		return Object.keys(this);
	};
	Object.prototype.ToArray = function() {
		return Array.prototype.slice.call(this);
	};
	let mJs = {
		TypeOf: obj => Object.prototype.toString.call(obj).slice(8, -1)
	};
	/** @return Boolean */
	Object.prototype.IsInstanceOf = function(type_name) {
		return mJs.TypeOf(this) === type_name;
	};
	window.mJs = mJs;
}