(function ($) {
	$.extend({
		getCookie:function(cookieName){
			// 目标 cookie 的特殊字段；如：cookie browserCookieTest 的目标字段为 "browserCookieTest="
			var targetCookieStr = cookieName + "=";
			
			var targetCookieStrLength = targetCookieStr.length;
			var cookieLength = document.cookie.length;
			
			var i = 0;
			while (i < cookieLength) {
			var j = i + targetCookieStrLength;
			if (document.cookie.substring(i, j) == targetCookieStr){
				var endstr = (document.cookie.indexOf(";", j) == -1)?document.cookie.length:document.cookie.indexOf(";", j);
				return unescape(document.cookie.substring(j, endstr));
			}
			i = document.cookie.indexOf(" ", i) + 1;
			if (i == 0) break;
			}
			return null;
		},
		setCookie:function(name,value,expiredays,path,domain,secure){
			/*
			name: cookie 名
			value: cookie 的 content
			expiredays: cookie 在 expiredays 天后过期
			path: cookie 的路径（如不设置则会默认设置为当前文件的路径）
			domain: 设置 cookie 的页面域名
			secure: cookie 的安全字段
			*/
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + expiredays);
			document.cookie = name + "=" + escape (value) +
			((expiredays) ? "; expires=" + exdate.toGMTString() : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
		},
		deleteCookie:function(cookieName){
			var exdate=new Date();
			exdate.setDate(exdate.getDate() - 1);
			$.setCookie(cookieName, "", exdate);
		}
	});
})(jQuery);