{"use strict";let l="[^\\s:\\/?#\\[\\]@]",t="([^\\s?#\\[\\]@]+)",e="(?:\\/[^\\/*?\"<>|]+|(?:\"\"))",d="(?:0|25[0-5]|2[0-4]\\d|1?\\d{1,2})",i="[\\dA-Fa-f]",h=i+"{1,4}",g=(a,b)=>"(?:[0-"+a+"]\\d{"+ ++g.b+"}))|",j="(?:(?::"+h+")",k="(?:(?:"+h+":)",r=s=>new RegExp(s);g.b=0;window.mUrl=function(a,b){b=mUrl.Matcher.exec(a);["input","scheme","info","host","port","path","query","fragment"].map((d,e)=>this[d]=b[e])};mUrl.IPv4=r("^(?:(?:(?:0x"+i+"{2})|(?:0[0-3][0-7]{2})|(?:"+d+"))(?:\\.(?:(?:0x"+i+"{2})|(?:0[0-3][0-7]{2})|(?:"+d+"))){3})|(?:0x"+i+"{8})|(?:0(?:(?:40{10})|(?:3[0-7]{10})|(?:[1-7][0-7]{0,8})))|(?::"+[,4,2,9,4,9,6,7,2,9].join("(?:")+"[0-6])|"+[8,1,6,5,8,3,8,1].map(n=>g(n)).join("")+"(?:[0-3]\\d{9})|(?:[1-9]\\d{0,8})|0)$");mUrl.IsIPv4=a=>mUrl.IPv4.test(a);mUrl.IPv6=r("^(?:"+k+"{7}(?:"+h+"|:))|"+k+"{6}(?::"+h+"|(?:"+d+"(?:\\."+d+"){3})|:))|"+k+"{5}(?:"+j+"{1,2})|:(?:"+d+"(?:\\."+d+"){3})|:))|"+k+"{4}(?:"+j+"{1,3})|"+j+"?:(?:"+d+"(?:\\."+d+"){3}))|:))|"+k+"{3}(?:"+j+"{1,4})|"+j+"{0,2}:(?:"+d+"(?:\\."+d+"){3}))|:))|"+k+"{2}(?:"+j+"{1,5})|"+j+"{0,3}:(?:"+d+"(?:\\."+d+"){3}))|:))|"+k+"(?:"+j+"{1,6})|"+j+"{0,4}:(?:"+d+"(?:\\."+d+"){3}))|:))|(?::(?:"+j+"{1,7})|"+j+"{0,5}:(?:"+d+"(?:\\."+d+"){3}))|:)))(?:%.+)?$");mUrl.IsIPv6=a=>mUrl.IPv6.test(a);mUrl.Matcher=r("^(?:("+l+"+):\\/\\/)?(?:([^\\s:/?#\\[\\]@]+(?::"+l+"+)?(?:[:@]"+l+"+(?::"+l+"+)?)*)@)?("+l+"+(?:\\."+l+")*)?(?::(\\d+))?(\\/|(?:"+e+"+)"+e+"?)?(?:\\?"+t+")?(?:#"+t+")?$")}