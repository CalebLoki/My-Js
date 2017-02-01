{
	let mUrl = class {
		constructor(url_str) {
			[this.input, this.scheme, this.info, this.host, this.port, this.path, this.query, this.fragment] = url_str.match(mUrl.Matcher);
		}
	};
	/** @return string */
	mUrl.prototype.Output = function() {
		let result = "";
		for(let key in this) {
			if(this.hasOwnProperty(key))
				result += key + ": " + this[key] + "\n";
		}
		return result;
	};
	let r = str => new RegExp(str);
	mUrl.IPv4 = (() => {
		let
			HEXUnit = /0x[\da-fA-F]{2}/,
			OCTUnit = /0[0-3][0-7]{2}/,
			DECUnit = /0|25[0-5]|2[0-4]\d|1?\d{1,2}/,
			Unit = r(`(?:(?:${HEXUnit.source})|(?:${OCTUnit.source})|(?:${DECUnit.source}))`),
			Dotted = r(`${Unit.source}(?:\\.${Unit.source}){3}`),
			
			HEX = /0x[\da-fA-F]{8}/,
			OCT = /0(?:(?:40{10})|(?:3[0-7]{10})|(?:[1-7][0-7]{0,8}))/,
			DEC = /(?:4(?:2(?:9(?:4(?:9(?:6(?:7(?:2(?:9[0-6])|(?:[0-8]\d))|(?:[01]\d{2}))|(?:[0-6]\d{3}))|(?:[0-5]\d{4}))|(?:[0-8]\d{5}))|(?:[0-3]\d{6}))|(?:[0-8]\d{7}))|(?:[01]\d{8}))|(?:[0-3]\d{9})|(?:[1-9]\d{0,8})|0/;
		return r(`^(?:${Dotted.source})|(?:${HEX.source})|(?:${OCT.source})|(?::${DEC.source})$`);
	})();
	/** @return boolean */
	mUrl.IsIPv4 = str => {
		return str.match(mUrl.IPv4)[0] === str;
	};
	mUrl.IPv6 = (() => {
		let
			DEC = /(?:0|25[0-5]|2[0-4]\d|1?\d{1,2})/,
			HEX = /[\dA-Fa-f]{1,4}/;
		return r(`^(?:(?:(?:${HEX.source}:){7}(?:${HEX.source}|:))|(?:(?:${DEC.source}:){6}(?::${HEX.source}|(?::${DEC.source}(?:\\.:${DEC.source}){3})|:))|(?:(?:${HEX.source}:){5}(?:(?:(?:${HEX.source}){1,2})|:(?::${DEC.source}(?:\\.:${DEC.source}){3})|:))|(?:(?:${HEX.source}:){4}(?:(?:(?:${HEX.source}){1,3})|(?:(?:${HEX.source})?:(?::${DEC.source}(?:\\.:${DEC.source}){3}))|:))|(?:(?:${HEX.source}:){3}(?:(?:(?:${HEX.source}){1,4})|(?:(?:${HEX.source}){0,2}:(?::${DEC.source}(?:\\.:${DEC.source}){3}))|:))|(?:(?:${HEX.source}:){2}(?:(?:(?:${HEX.source}){1,5})|(?:(?:${HEX.source}){0,3}:(?::${DEC.source}(?:\\.:${DEC.source}){3}))|:))|(?:(?:${HEX.source}:){1}(?:(?:(?:${HEX.source}){1,6})|(?:(?:${HEX.source}){0,4}:(?::${DEC.source}(?:\\.:${DEC.source}){3}))|:))|(?::(?:(?:(?:${HEX.source}){1,7})|(?:(?:${HEX.source}){0,5}:(?::${DEC.source}(?:\\.:${DEC.source}){3}))|:)))(?:%.+)?$`);
	})();
	/** @return boolean */
	mUrl.IsIPv6 = str => {
		return str.match(mUrl.IPv6)[0] === str;
	};
	mUrl.Matcher = (() => {
		let
			Alphabet = /[^\s:\/?#\[\]@]/,
			Delimiter = /[:@]/,
			
			Scheme = r(`(?:(${Alphabet.source}+):\\/\\/)`),
			
			SingleUserInfo = r(`${Alphabet.source}+(?::${Alphabet.source}+)?`),
			UserInfo = r(`(?:(${SingleUserInfo.source}(?:${Delimiter.source}${SingleUserInfo.source})*)@)`),
			
			Host = r(`(${Alphabet.source}+(?:\\.${Alphabet.source})*)`),
			
			File = /[^\\\/*?"<>|]+|(?:"")/,
			FileName = r(`${File.source}\\.${File.source}`),
			Directory = r(`(?:\\/${File.source})`),
			Path = r(`(\\/|(?:${Directory.source}+)${FileName.source}?)`),
			
			Query = /(?:\?([^\s?#\[\]@]+))/,
			Fragment = /(?:#([^\s?#\[\]@]+))/;
		let result = r(`^${Scheme.source}?${UserInfo.source}?${Host.source}?(?::(\\\d+))?${Path.source}?${Query.source}?${Fragment.source}?$`);
		return result;
	})();
	window.mUrl = mUrl;
}