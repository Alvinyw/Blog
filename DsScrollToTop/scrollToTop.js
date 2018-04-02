(function ($) {
    $.fn.scrollToTop = function (options) {
        var defaults = {
			/********** 标签属性设置 **********/
			targetNodeID: "scrollToTop",/* 绑定 scrollTop 事件的元素（targetNode） id */
			targetNodeClass: "scrollToTop",/* 绑定 scrollTop 事件的元素（targetNode） class */
			targetNodeHoverClass: "on",/* 鼠标 hover 时 targetNode 新增的 class */
			targetNodeText: "",/* targetNode 的文本，可以填入 html 字段 */
			targetNodeTitle: "Back to Top",/* targetNode 的文本 */
			minScrollTop: 200,/* 向下滚动 minScrollTop 高度时出现图标 */
			inDelay: 600,/* 图标出现时的延时 */
			outDelay: 400,/* 图标消失时的延时 */
			scrollSpeed: 1200,/* 上升时间 - 数值越大越慢 */
			scrollToWhere: 0,/* 滚动到距离页面顶端 scrollToWhere 的地方 */
			easingType: "easeOutQuart",/* scroll 的轨迹（easeInQuart/easeOutQuart/easeInOutQuart）*/
			/********** 样式属性设置 **********/
			targetNodeWidth: "50", /* targetNode 默认宽度 */
			targetNodeHeight: "50", /* targetNode 默认高度 */
			targetNodePsBottom: "5%", /* targetNode 默认里底部的位置 */
			targetNodePsRight: "2%", /* targetNode 默认里顶部的位置 */
			targetNodeMgTop: "", /* targetNode 默认的 margin-top */
			targetNodeMgRight: "", /* targetNode 默认的 margin-right */
			targetNodeBgColor: "#ddd", /* targetNode 默认的背景色 */
			targetNodeFtColor: "#666", /* targetNode 默认的字体颜色 */
			targetNodeHoverBgColor: "#ccc", /* targetNode 默认 hover 状态的背景色 */
			targetNodeHoverFtColor: "#444", /* targetNode 默认 hover 状态的字体颜色 */
			targetNodeBrRadius: "50%", /* targetNode 默认的倒角 */
			targetNodeOpacity: 1, /* targetNode 默认的透明度 */
			targetNodeHoverOpacity: 1, /* targetNode 默认的 hover 状态的透明度 */
			/********** targetNode 里 icon（利用 border 画出的小三角）样式 **********/
			targetIconBrWidth: 8, /* targetNode 里 icon 的边框粗细 */
			targetIconBrColor: "#aaa" /* targetNode 里 icon 的边框颜色 */
        },
        settings = $.extend(defaults, options), //把传入的参数 options 合并到 defaults 里并赋给 settings；若 options 里的参数与 defaults 有重复，则 options 会覆盖 defaults 里的参数
		
        targetNode = "#" + settings.targetNodeID;
		
        $("body").append('<a href="javascript:void(0)" id="' + settings.targetNodeID + '" class="' + settings.targetNodeClass + '" title="'+ settings.targetNodeTitle + '" alt="'+ settings.targetNodeTitle + '"><span></span></a>');
		
        $(targetNode).css({"display":"block","position":"fixed","bottom":settings.targetNodePsBottom,"right":settings.targetNodePsRight,"margin-top":settings.targetNodeMgTop,"margin-right":settings.targetNodeMgRight,"width":settings.targetNodeWidth+'px',"height":settings.targetNodeHeight+'px',"line-height":settings.targetNodeHeight-2+'px',"text-align":"center","text-decoration":"none","background-color":settings.targetNodeBgColor,"color":settings.targetNodeFtColor,"border-radius":settings.targetNodeBrRadius,"cursor":"pointer","opacity":settings.targetNodeOpacity}).hide()
		.on("click", function () {
            $("html, body").animate({
               scrollTop: settings.scrollToWhere
            }, settings.scrollSpeed, settings.easingType);
            return false
        }).on("mouseenter",function(){
			$(this).addClass(settings.targetNodeHoverClass).css({"background-color":settings.targetNodeHoverBgColor,"opacity":settings.targetNodeHoverOpacity,"color":settings.targetNodeHoverFtColor});
		}).on("mouseleave",function(){
		    $(this).removeClass(settings.targetNodeHoverClass).css({"background-color":settings.targetNodeBgColor,"opacity":settings.targetNodeOpacity,"color":settings.targetNodeFtColor});
		});
		
		if(settings.targetNodeText==''||settings.targetNodeText==' '||settings.targetNodeText==null){
			$(targetNode).find("span").css({"display":"inline-block","position":"absolute","top":"50%","left":"50%","margin-top":-settings.targetIconBrWidth/2+'px',"margin-left":-settings.targetIconBrWidth+'px',"width":0,"height":0,"border-style":"solid","border-width":settings.targetIconBrWidth+'px',"border-color":"transparent","border-bottom-color":settings.targetIconBrColor,"border-top-width":"0"});
		}else{
			$(targetNode).html(settings.targetNodeText);
		}
		
        $(window).scroll(function () {
            if ($(window).scrollTop() > settings.minScrollTop) {
                $(targetNode).fadeIn(settings.inDelay)
            } else {
                $(targetNode).fadeOut(settings.Outdelay)
            }
        })
    }
})(jQuery);
/* 引用 jQuery Easing 插件的 easingType 方法 */
/*http://alvinwp.com/js/392*/
jQuery.extend(jQuery.easing, {
	easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    }
});
