// easy tooltip
(function($) {
    $.fn.easyTooltip = function(options){
        // default configuration properties
        var defaults = {
			targetEleId: "",/*触发 tooltip 的元素 ID*/
            xOffset: 10,/*tooltip 在 X 轴离鼠标的距离*/       
            yOffset: 10,/*tooltip 在 Y 轴离鼠标的距离*/
			tooltipDir: "top",/*tooltip 出现的方向*/
			tooltipId: "easyTooltip",/*tooltip 最外层元素的 ID*/
			tooltipClass: "easyTooltip",/*tooltip 最外层元素的 Class*/
            clickRemove: false,/*是否点击隐藏 tooltip*/
            content: "",/*设置 tooltip 的内容，可以包含 html 标签元素*/
            existedContentId: ""/*将已有元素的内容作为 tooltip 的内容，若不为空，则将替换 content 所设置的内容*/
        };
             
        var options = $.extend(defaults, options); 
        var content;		
        this.each(function() {                 
            var title = $(this).attr("title");             
            $(this).hover(function(e){                                                                        
                content = (options.content != "") ? options.content : title;
                content = (options.existedContentId != "") ? $("#" + options.existedContentId).html() : content;
                $(this).attr("title","");                                                  
                if (content != "" && content != undefined){        
                    $("body").append("<div id='"+ options.tooltipId +"' class='" + options.tooltipClass + "'>"+ content +"<span class='arw'></span></div>");    
                    $("#" + options.tooltipId)
                        .css({"position":"absolute","display":"none","padding":"10px 15px","background-color":"#aaa","font-size":"14px","line-height":"24px","color":"#000","opacity":"0.9","border-radius":"4px"}).fadeIn("fast");
					$("#" + options.tooltipId + " .arw").css({"display":"inline-block","position":"absolute","width":"10px","height":"10px","background-color":"#aaa","-webkit-transform":"rotate(45deg)","-moz-transform":"rotate(45deg)","-o-transform":"rotate(45deg)","-ms-transform":"rotate(45deg)","transform":"rotate(45deg)"});
					
					//设置 tooltip 的位置
					updatePosition(e);
                }
            },
            function(){
                $("#" + options.tooltipId).remove();
                $(this).attr("title",title);
            });
			
			//鼠标移动更新 tooltip 的位置
            $(this).mousemove(function(e){
				if(options.targetEleId == ""||$("body #" + options.targetEleId).length != 1){
					updatePosition(e); 
				}				      
            });
			
			//点击隐藏 tooltip
            if(options.clickRemove){
                $(this).mousedown(function(e){
                    $("#" + options.tooltipId).remove();
                    $(this).attr("title",title);
                });            
            }
        });
		
		//计算 tooltip 出现的位置
		function updatePosition(e){
			if(options.targetEleId != ""&&$("body #" + options.targetEleId).length == 1){
				//相对 targetEleId 定位，不随鼠标移动而移动
				switch(options.tooltipDir)
				{
				case "top":
				  $("#" + options.tooltipId)
					.css("top",($("#" + options.targetEleId).offset().top - $("#" + options.tooltipId).innerHeight() - options.yOffset) + "px")
					.css("left",($("#" + options.targetEleId).offset().left + ($("#" + options.targetEleId).innerWidth() - $("#" + options.tooltipId).innerWidth())/2) + "px");
				  $("#" + options.tooltipId + " .arw").css({"left":"50%","margin-left":"-5px","bottom":"-5px"});
				  break;
				case "bottom":
				  $("#" + options.tooltipId)
					.css("top",($("#" + options.targetEleId).offset().top + $("#" + options.targetEleId).innerHeight() + options.yOffset) + "px")
					.css("left",($("#" + options.targetEleId).offset().left + ($("#" + options.targetEleId).innerWidth() - $("#" + options.tooltipId).innerWidth())/2) + "px");
				  $("#" + options.tooltipId + " .arw").css({"left":"50%","margin-left":"-5px","top":"-5px"});
				  break;
				case "left":
				  $("#" + options.tooltipId)
					.css("top",($("#" + options.targetEleId).offset().top + ($("#" + options.targetEleId).innerHeight() - $("#" + options.tooltipId).innerHeight())/2) + "px")
					.css("left",($("#" + options.targetEleId).offset().left - $("#" + options.tooltipId).innerWidth() - options.xOffset) + "px");
				  $("#" + options.tooltipId + " .arw").css({"top":"50%","margin-top":"-5px","right":"-5px"});
				  break;
				case "right":
				  $("#" + options.tooltipId)
					.css("top",($("#" + options.targetEleId).offset().top + ($("#" + options.targetEleId).innerHeight() - $("#" + options.tooltipId).innerHeight())/2) + "px")
					.css("left",($("#" + options.targetEleId).offset().left + $("#" + options.targetEleId).innerWidth() + options.xOffset) + "px");
				  $("#" + options.tooltipId + " .arw").css({"top":"50%","margin-top":"-5px","left":"-5px"});
				  break;
				default:
				  $("#" + options.tooltipId)
					.css("top",($("#" + options.targetEleId).offset().top - $("#" + options.tooltipId).innerHeight() - options.yOffset) + "px")
					.css("left",($("#" + options.targetEleId).offset().left + ($("#" + options.targetEleId).innerWidth() - $("#" + options.tooltipId).innerWidth())/2) + "px");
				 $("#" + options.tooltipId + " .arw").css({"left":"50%","margin-left":"-5px","bottom":"-5px"});
				}
			}else {
				//会随着鼠标的移动而移动
				$("#" + options.tooltipId + " .arw").hide();
				switch(options.tooltipDir)
				{
				case "top":
				  $("#" + options.tooltipId)
					.css("top",(e.pageY - $("#" + options.tooltipId).innerHeight() - options.yOffset) + "px")
					.css("left",(e.pageX) + "px");
				  break;
				case "bottom":
				  $("#" + options.tooltipId)
					.css("top",(e.pageY + options.yOffset) + "px")
					.css("left",(e.pageX + options.xOffset) + "px");
				  break;
				case "left":
				  $("#" + options.tooltipId)
					.css("top",(e.pageY - $("#" + options.tooltipId).innerHeight()/2) + "px")
					.css("left",(e.pageX - $("#" + options.tooltipId).innerWidth() - options.xOffset) + "px");
				  break;
				case "right":
				  $("#" + options.tooltipId)
					.css("top",(e.pageY - $("#" + options.tooltipId).innerHeight()/2) + "px")
					.css("left",(e.pageX + options.xOffset) + "px");
				  break;
				default:
				  $("#" + options.tooltipId)
					.css("top",(e.pageY - $("#" + options.tooltipId).innerHeight() - options.yOffset) + "px")
					.css("left",(e.pageX) + "px");
				}
			}
		}
		
    };     
})(jQuery);