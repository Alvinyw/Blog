(function ($) {
    $.fn.UItoTop = function (options) {
        var defaults = {
            text: "&and;",/* 点击区域的图标或文本 */
            minScroll: 200,/* 向下滚动 minScroll 高度时出现向上图标 */
            inDelay: 600,/* 图标出现时的延时 */
            outDelay: 400,/* 图标消失时的延时 */
            containerID: "toTop",/* 向上图标的 id */
			containerIDHoverClass: "toTopHover",/*鼠标移上去时的 class*/
            scrollSpeed: 800,/* 上升时间 - 数值越大越慢*/
            easingType: "linear"/* 上升轨迹 */
        },
        settings = $.extend(defaults, options),
        containerIDhash = "#" + settings.containerID;
        $("body").append('<a href="javascript:void(0)" id="' + settings.containerID + '" title="Back to Top" alt="Back to Top">' + settings.text + "</a>");
        $(containerIDhash).hide().on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, settings.scrollSpeed, settings.easingType);
            return false
        }).on("mouseenter",function(){
			$(this).addClass(settings.containerIDHoverClass);
		}).on("mouseleave",function(){
		    $(this).removeClass(settings.containerIDHoverClass);
		});
        $(window).scroll(function () {
            var windowScrollTop = $(window).scrollTop();
            if (windowScrollTop > settings.minScroll) {
                $(containerIDhash).fadeIn(settings.inDelay)
            } else {
                $(containerIDhash).fadeOut(settings.Outdelay)
            }
        })
    }
})(jQuery);
/* 引用 jQuery Easing 插件的 easingType 方法 */
jQuery.extend(jQuery.easing, {
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    }
});
/* 调用 UItoTop 方法 */
$(function () {
    $(document).UItoTop({
        //easingType: "easeOutQuart"
    })
});