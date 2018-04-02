(function ($) {
/*drop down list*/
$.fn.DsSelect = function (options) {
	/*default configuration properities*/
	var defaults = {
		/*********插件涉及的元素节点*********/
		_selectWrapper: ".selectWrapper", //插件最外层的容器，可为 ID/tagName
		_toggleNode: ".toggleNode", //绑定了 click 事件的节点
		_currentText: ".curOptionText", //显示当前选中的 option 内容的容器
		_iconNode: ".icon", //右边的下拉小三角图标
		_selectNode: ".selectNode", //下拉列表 select 元素（可为 ID/tagName）
		_optionNode: "li", //下拉列表的 option 子项
		_controlContent: ".content", //插件控制显示切换的内容容器
		//插件在 sildeUp/slideDown 切换时用于改变元素样式的 class
		_currentSelectClass: "on", //当前选中的 option 新 Add 的 class
		_currentOptionClass: "on", //当前选中的 option 新 Add 的 class
		_toggleNodeClass: "on", //列表下拉时 _toggleNode 新 Add 的 class
		_toggleIconClass: "on", //列表下拉时 _iconNode 新 Add 的 class
		_currentContentClass: "on", //当前显示的 content 独有的 class
		_toggleIconText: "", //列表下拉时 _iconNode 的内容（只有在 _iconNode.text()初始值不为空时该属性才有效）
		
		/*********插件的其他属性*********/
		_switchSpeed: "", //下拉列表 sildeUp/slideDown 的切换速度
		_documentClick: "true", //点击页面是否收起下拉列表(true/false)
		
		/*********插件的默认样式设置*********/
		_borderColor: "#ccc", //select 默认的边框背景色
		_borderRadius: "3px", //select 默认的边框倒角
		
		_toggleNodeFontSize: "14px", //toggleNode 的默认字体大小
		_toggleNodeFontColor: "#444", //toggleNode 的默认颜色
		_toggleNodeHeight: "38px", //toggleNode 的默认高度
		_toggleNodePadding: "0 20px 0 10px", //toggleNode 的默认内填充
		
		_selectBgColor: "#fff", //select 默认的背景色
		_selectIndex: "5", //select 默认的 index

		_optionFontSize: "14px", //option 默认的字体大小
		_optionLineHeight: "34px", //option 默认的字体大小
		_optionFontColor: "#606060", //option 默认的字体颜色
		_optionHoverBgColor: "#fff6ed", //option hover 状态的背景色
		_optionCurBgColor: "#fff6ed", //当前选中的 option 背景色
		
		_iconPositionRight: "10px", //图标 icon 默认右边距
		_iconColor: "#999", //图标 icon 默认的颜色
		_iconBorderWidth: "5px", //图标 icon 默认的边框 width（当 icon 是伪类画出的小三角时才有效）
		_iconFontSize: "14px" //图标 icon 默认的字体大小
	};
	
	
	var options = $.extend(defaults, options);//把传入的参数 options 合并到 defaults 里并重新赋给 options；若 options 里的参数与 defaults 有重复，则 options 会覆盖 defaults 里的参数
	
	//插件涉及的元素节点
	var selectWrapper = options._selectWrapper;
	var toggleNode = options._toggleNode;
	var currentText = options._currentText;
	var iconNode = options._iconNode;
	var selectNode = options._selectNode;
	var optionNode = options._optionNode;
	var controlContent = options._controlContent;
	//插件在 sildeUp/slideDown 切换时用于改变元素样式的 class
	var toggleNodeClass = options._toggleNodeClass;
	var toggleIconClass = options._toggleIconClass;
	var curSelectClass = options._currentSelectClass;
	var curOptionClass = options._currentOptionClass;
	var curContentClass = options._currentContentClass;
	var toggleIconText = options._toggleIconText;
	//插件的其他属性
	var switchSpeed = options._switchSpeed;
	//插件的默认样式属性
	var borderColor = options._borderColor;
	var borderRadius = options._borderRadius;
	
	var toggleNodeFontSize = options._toggleNodeFontSize;
	var toggleNodeFontColor = options._toggleNodeFontColor;
	var toggleNodeHeight = options._toggleNodeHeight;
	var toggleNodePadding = options._toggleNodePadding;
	
	var selectBgColor = options._selectBgColor;
	var selectIndex = options._selectIndex;
	
	var optionFontSize = options._optionFontSize;
	var optionLineHeight = options._optionLineHeight;
	var optionFontColor = options._optionFontColor;
	var optionHoverBgColor = options._optionHoverBgColor;
	var optionCurBgColor = options._optionCurBgColor;
	
	var iconPositionRight = options._iconPositionRight;
	var iconColor = options._iconColor;
	var iconBorderWidth = options._iconBorderWidth;
	var iconFontSize = options._iconFontSize;
	//全局变量
	var originalIconText = $(selectWrapper).find(iconNode).html();//小三角的初始内容
	

	$(selectWrapper).find(toggleNode).each(function(index, element) {   
       $(this).bind("click", function(e){
		  //toggleNode
		  var curToggleNode = $(this); //鼠标当前点击的节点
		  curToggleNode.toggleClass(toggleNodeClass);
		  if(curToggleNode.hasClass(toggleNodeClass)){
			  curToggleNode.css({"border-bottom-left-radius":"0","border-bottom-right-radius":"0"});
		  }else{
		  	  setTimeout(function(){
			     curToggleNode.css({"border-bottom-left-radius":borderRadius,"border-bottom-right-radius":borderRadius});
			  },400);
		  }
		  //iconNode
		  var curIconNode = curToggleNode.find(iconNode);
		  curIconNode.toggleClass(toggleIconClass);
		  if(originalIconText==''||originalIconText==' '||originalIconText==null){
			  if(curIconNode.hasClass(toggleIconClass)){
				  curIconNode.css({"border-top-width":"0","border-bottom-width":iconBorderWidth});
			  }else{
				  curIconNode.css({"border-bottom-width":"0","border-top-width":iconBorderWidth});
			  }
		  }else{
		  	  if(curIconNode.hasClass(toggleIconClass)){
				  if(toggleIconText){
				     curIconNode.html(toggleIconText);
			      }
			  }else{
				  curIconNode.html(originalIconText);
			  }
		  }
		  //selectNode
		  var curSelectNode = curToggleNode.siblings(selectNode); //鼠标当前操作的下拉列表
		  curSelectNode.slideToggle(switchSpeed).toggleClass(curSelectClass);
		  		  
		  curSelectNode.find(optionNode).each(function(index, element) {   
				$(this).hover(function(){
					curSelectNode.find(optionNode).css({"background-color":""});
					$(this).css({"background-color":optionHoverBgColor});
				},
				function(){
					curSelectNode.find(optionNode).css({"background-color":""});
					for(var i = 0;i<curSelectNode.find(optionNode).length;i++){	
						if(curSelectNode.find(optionNode).eq(i).hasClass(curOptionClass)){
							curSelectNode.find(optionNode).eq(i).css({"background-color":optionCurBgColor});
						}
					}
				}).click(function(){
					var curText = $(this).text();
					curToggleNode.find(currentText).text(curText);
					curSelectNode.find(optionNode).removeClass(curOptionClass).css({"background-color":""});
					curSelectNode.find(optionNode).eq(index).addClass(curOptionClass).css({"background-color":optionCurBgColor});
					//call back function
					$(controlContent).removeClass(curContentClass).css("display","none");
					$(controlContent).eq(index).addClass(curContentClass).css("display","block");			
				});
			});
		});
	});
	
	$(document).click(function(){
		if(options._documentClick != 'false'){
			$(selectWrapper).find(toggleNode).removeClass(toggleNodeClass);
			setTimeout(function(){
				$(selectWrapper).find(toggleNode).css({"border-radius":borderRadius});
			},400);
			if(originalIconText==''||originalIconText==' '||originalIconText==null){
				$(selectWrapper).find(iconNode).removeClass(toggleIconClass).css({"border-bottom-width":"0","border-top-width":iconBorderWidth});
			}else{
				$(selectWrapper).find(iconNode).removeClass(toggleIconClass).html(originalIconText);
			}
			$(selectWrapper).find(selectNode).slideUp(switchSpeed).removeClass(curSelectClass);
		}
	});
	$(selectWrapper).find(toggleNode).bind("click",function(e){
		if (e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	});
	//default css
	$(selectWrapper).find("*").css({"padding":"0","margin":"0","list-style":"none","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"});
	$(selectWrapper).css({"position":"relative"});
	
	//toggleNode
	$(selectWrapper).find(toggleNode).css({"position":"relative","padding":toggleNodePadding,"width":"100%","height":toggleNodeHeight,"font-size":toggleNodeFontSize,"color":toggleNodeFontColor,"line-height":toggleNodeHeight,"border-style":"solid","border-width":"1px","border-color":borderColor,"border-radius":borderRadius,"cursor":"pointer"});
	
	//iconNode
	var iconArray = $(selectWrapper).find(toggleNode).find(iconNode);
	iconArray.css({"display":"inline-block","position":"absolute","right":iconPositionRight,"color":iconColor});
	if(originalIconText==''||originalIconText==' '||originalIconText==null){
		iconArray.css({"top":($(selectWrapper).find(toggleNode).height() - iconArray.outerHeight())/2-2,"width":"0","height":"0","border-style":"solid","border-width":iconBorderWidth,"border-top-color":iconColor,"border-right-color":"transparent","border-bottom-color":iconColor,"border-left-color":"transparent","border-bottom-width":"0"});
	}else{
		iconArray.css({"top":($(selectWrapper).find(toggleNode).height() - iconArray.outerHeight())/2,"font-size":iconFontSize});
	}

	//select
	$(selectWrapper).find(selectNode).css({"display":"none","position":"absolute","z-index":selectIndex,"width":"100%","background-color":selectBgColor,"border-style":"solid","border-width":"1px","border-color":borderColor,"border-top":"none","border-bottom-left-radius":borderRadius,"border-bottom-right-radius":borderRadius,"overflow":"hidden"});
	
	//option
	var optionArray = $(selectWrapper).find(selectNode).find(optionNode);
	optionArray.css({"padding":toggleNodePadding,"font-size":optionFontSize,"line-height":optionLineHeight,"color":optionFontColor,"cursor":"pointer"});
	for(var i=0;i<optionArray.length;i++){
		if(optionArray.eq(i).hasClass(curOptionClass)){
			optionArray.eq(i).css("background-color",optionCurBgColor);
		}
	}
	
	//content
	for(var i =0;i<$(controlContent).length;i++){
		if($(controlContent).eq(i).hasClass(curContentClass)){
			$(controlContent).eq(i).css({"display":"block"});
		}else{
			$(controlContent).eq(i).css({"display":"none"});
		}
	}
}
})(jQuery);