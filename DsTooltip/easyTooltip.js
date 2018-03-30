// easy tooltip
(function($) {
    $.fn.easyTooltip = function(options){
        // 参数设置
        var defaults = {
			/************ tooltip 结构参数 ************/
			tooltipId: "easyTooltip",/*tooltip 最外层元素的 ID*/
			tooltipClass: "easyTooltip",/*tooltip 最外层元素的 Class*/
			content: "",/*设置 tooltip 的内容，可以包含 html 标签元素*/
			existedContentId: "",/*将已有元素的内容作为 tooltip 的内容，若不为空，则将替换 content 所设置的内容*/
			tooltipDir: "top",/*tooltip 出现的方向(top\right\bottom\left)*/
			xOffset: 5,/*tooltip 在 X 轴离鼠标的距离*/       
            yOffset: 5,/*tooltip 在 Y 轴离鼠标的距离*/
            clickRemove: false,/*是否点击隐藏 tooltip*/
            tooltipPosition: 'absolute',/*tooltip 是否会跟随鼠标移动(absolute\relative)*/
            /************ tooltip 样式参数 ************/
			defaultRadius: "3px",
			tooltipZindex: 10000,
			tooltipPadding: "10px 15px",
			tooltipBgColor: "rgba(200,200,200,0.7)",
			tooltipFtSize: "14px",
			tooltipLineHeight: "24px",
			tooltipFtColor: "#000",
			tooltipOpacity: 1,
			tooltipArwBorderWidth: 6
        };
             
        var options = $.extend(defaults, options);
		var targetNode = $(this); //鼠标当前操作的对象
        var content = (options.existedContentId != "") ? $("#" + options.existedContentId).html() : ((options.content != "") ? options.content : title); //获取 tooltip 的内容
		var toolTip, toolTipArw;
		
        this.each(function() {                 
            var title = $(this).attr("title");             
            $(this).hover(function(e){                                                                        
                $(this).attr("title","");                   
                if (content != "" && content != undefined){        
                    $("body").append("<div id='"+ options.tooltipId +"' class='" + options.tooltipClass + "'>"+ content +"<span class='arw'></span></div>");
					toolTip = $("#" + options.tooltipId);
					toolTipArw = $("#" + options.tooltipId + " .arw");
					
                    toolTip.css({"position":"absolute","z-index":options.tooltipZindex,"display":"none","padding":options.tooltipPadding,"background-color":options.tooltipBgColor,"font-size":options.tooltipFtSize,"line-height":options.tooltipLineHeight,"color":options.tooltipFtColor,"opacity":options.tooltipOpacity,"border-radius":options.defaultRadius}).fadeIn("fast");
					toolTipArw.css({"display":"inline-block","position":"absolute","width":"0","height":"0","border-style":"solid","border-width":options.tooltipArwBorderWidth+'px',"border-color":"transparent"});
					
					//设置 tooltip 的位置
					updatePosition(e);
                }
            },
            function(){
                toolTip.remove();
                $(this).attr("title",title);
            });
			
			//鼠标移动更新 tooltip 的位置
            $(this).mousemove(function(e){
				if(options.tooltipPosition != 'relative'){
					updatePosition(e); 
				}				      
            });
			
			//点击隐藏 tooltip
            if(options.clickRemove){
                $(this).mousedown(function(e){
                    toolTip.remove();
                    $(this).attr("title",title);
                });            
            }
        });
		
		//计算 tooltip 出现的位置
		function updatePosition(e){
			if(options.tooltipPosition == 'relative'){
				//相对 targetNode 定位，不随鼠标移动而移动
				switch(options.tooltipDir)
				{
				case "top":
				  toolTip
					.css("top",(targetNode.offset().top - toolTip.innerHeight() - options.yOffset - options.tooltipArwBorderWidth) + "px")
					.css("left",(targetNode.offset().left + (targetNode.innerWidth() - toolTip.innerWidth())/2) + "px");
				  toolTipArw.css({"left":"50%","margin-left":-options.tooltipArwBorderWidth+'px',"bottom":-options.tooltipArwBorderWidth*2+'px',"border-top-color":options.tooltipBgColor});
				  break;
				case "bottom":
				  toolTip
					.css("top",(targetNode.offset().top + targetNode.innerHeight() + options.tooltipArwBorderWidth + options.yOffset) + "px")
					.css("left",(targetNode.offset().left + (targetNode.innerWidth() - toolTip.innerWidth())/2) + "px");
				  toolTipArw.css({"left":"50%","margin-left":-options.tooltipArwBorderWidth+'px',"top":-options.tooltipArwBorderWidth*2+'px',"border-bottom-color":options.tooltipBgColor});
				  break;
				case "left":
				  toolTip
					.css("top",(targetNode.offset().top + (targetNode.innerHeight() - toolTip.innerHeight())/2) + "px")
					.css("left",(targetNode.offset().left - toolTip.innerWidth() - options.tooltipArwBorderWidth - options.xOffset) + "px");
				  toolTipArw.css({"top":"50%","margin-top":-options.tooltipArwBorderWidth+'px',"right":-options.tooltipArwBorderWidth*2+'px',"border-left-color":options.tooltipBgColor});
				  break;
				case "right":
				  toolTip
					.css("top",(targetNode.offset().top + (targetNode.innerHeight() - toolTip.innerHeight())/2) + "px")
					.css("left",(targetNode.offset().left + targetNode.innerWidth() + options.tooltipArwBorderWidth + options.xOffset) + "px");
				  toolTipArw.css({"top":"50%","margin-top":-options.tooltipArwBorderWidth+'px',"left":-options.tooltipArwBorderWidth*2+'px',"border-right-color":options.tooltipBgColor});
				  break;
				default:
				  toolTip
					.css("top",(targetNode.offset().top - toolTip.innerHeight() - options.yOffset) + "px")
					.css("left",(targetNode.offset().left + (targetNode.innerWidth() - toolTip.innerWidth())/2) + "px");
				 toolTipArw.css({"left":"50%","margin-left":-options.tooltipArwBorderWidth+'px',"bottom":-options.tooltipArwBorderWidth*2+'px',"border-top-color":options.tooltipBgColor});
				}
			}else {
				//会随着鼠标的移动而移动
				toolTipArw.hide();
				switch(options.tooltipDir)
				{
				case "top":
				  toolTip
					.css("top",(e.pageY - toolTip.innerHeight() - options.yOffset) + "px")
					.css("left",(e.pageX - toolTip.innerWidth()/2) + "px");
				  break;
				case "bottom":
				  toolTip
					.css("top",(e.pageY + options.yOffset) + "px")
					.css("left",(e.pageX - toolTip.innerWidth()/2) + "px");
				  break;
				case "left":
				  toolTip
					.css("top",(e.pageY - toolTip.innerHeight()/2) + "px")
					.css("left",(e.pageX - toolTip.innerWidth() - options.xOffset) + "px");
				  break;
				case "right":
				  toolTip
					.css("top",(e.pageY - toolTip.innerHeight()/2) + "px")
					.css("left",(e.pageX + options.xOffset) + "px");
				  break;
				default:
				  toolTip
					.css("top",(e.pageY - toolTip.innerHeight() - options.yOffset) + "px")
					.css("left",(e.pageX - toolTip.innerWidth()/2) + "px");
				}
			}
		}
		
    };     
})(jQuery);