(function ($) {
	//判断是否是手机打开
	var ifPhone = false;
	/*device - Type*/
	/*function browserRedirect() {
	var deviceType;
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile"; 
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		deviceType = 'phone'; 
	} else {
		deviceType = 'pc'; 
	} */
	var documentWidth = $(document).width();
	if(documentWidth<768){
		ifPhone = true;
	}
	
	
	//顶部 “抽工作片” 和 “抽科室” 的切换导航样式
	$("#pageNav li").each(function(index, element) {
	   $(this).click(function(){
		  $("#pageNav li").removeClass('on');
		  $("#pageNav li").eq(index).addClass('on');
		  if(index==0){
			  $("#chouGongZuoPian").addClass('on').animate({opacity:1},300);
			  $("#chouKeShi").removeClass('on').animate({opacity:-1},150);
		  }else{
		      $("#chouGongZuoPian").removeClass('on').animate({opacity:-1},150);
			  $("#chouKeShi").addClass('on').animate({opacity:1},300);
		  }
	   }); 
	});	
	
	
	/* 从设置文件（data-settings.xml）中获取最新数据 */
	
	// 工作片 名称
	var gzp_Array = new Array();
	// 工作片的个数
	var gzp_num = gzp_Array.length;
	// 工作片转盘当前抽中内容
	var gzp_name = null;
	// 工作片转盘旋转一次的时间
	var gzp_rotateTime;
	//工作片转盘的 result 描述
	var gzp_resultTitle;
	// 工作片转盘全部选中之后的弹框内容
	var gzp_alertText;
	// 工作片转盘扇形的字体大小，默认是 16px
	var gzp_fontSize;
	// 工作片转盘用到的颜色: [扇形颜色一，扇形颜色二，扇形颜色三，扇形字体颜色，指针字体颜色，指针和边框颜色]
	// 当扇形为奇数时，最后一块扇形的背景色为颜色三
	var gzp_colors = [];
	
	
	// 每个工作片对应的 行政村 名称
	var xzc_Array = new Array();
	// 行政村转盘旋转一次时间
	var xzc_rotateTime;
	// 行政村转盘 result 描述
	var xzc_resultTitle;
	// 行政村转盘全部选中之后的弹框内容
	var xzc_alertText;
	// 行政村转盘扇形的字体大小，默认是 16px
	var xzc_fontSize;
	// 行政村转盘用到的颜色: [扇形颜色一，扇形颜色二，扇形颜色三，扇形字体颜色，指针字体颜色，指针和边框颜色]
	// 当扇形为奇数时，最后一块扇形的背景色为颜色三
	var xzc_colors = [];
	
	
	// 抽查内容名称
	var ccnr_Array = new Array();
	// 抽查内容路径
	var ccnr_LinkArray = new Array();
	// 抽查内容随即跳动的速度，默认为 60ms
	var ccnr_rollSpeed;
	// 从点击开始到停止随机跳动的次数，默认为 30 次
	var ccnr_rollTime;
	// 结果框的 title 文本 
	var ccnr_resultTitle;
	// 全部 抽查内容 都被选中之后的弹框内容
	var ccnr_alertText;
	
	
	// 科室 名称
	var keShi_Array = new Array();
	var keShi_colors = new Array();
	
	$.ajax({ 
       url: "data-settings.xml", 
       success: function (xml){
		  var returnValue = $(xml);

		  // 工作片转盘参数信息
		  gzp_rotateTime = returnValue.find("gongZuoPian_ZhuanPan > rotateTime").text();
		  gzp_resultTitle = returnValue.find("gongZuoPian_ZhuanPan > resultTitle").text();
		  gzp_alertText = returnValue.find("gongZuoPian_ZhuanPan > alertText").text();
		  gzp_fontSize = returnValue.find("gongZuoPian_ZhuanPan > fontSize").text();
		  returnValue.find("gongZuoPian_ZhuanPan > colors > value").each(function () {  
              gzp_colors.push($(this).text());
          });
		  // 获取 工作片 的内容
          returnValue.find("gongZuoPian").each(function () { 
              gzp_Array.push($(this).attr("name"));
          });
		  // 初始化工作片转盘
		  $("#gongZuoPian").AddCanvasTurntable_withoutFunction({
		  	 sectorText: gzp_Array,
		  	 rotateTime: gzp_rotateTime,
			 colors: gzp_colors,
			 fontSize: gzp_fontSize
		  });
		  gzp_num = gzp_Array.length;



		  // 行政村转盘参数信息
		  xzc_rotateTime = returnValue.find("xingZhengCun_ZhuanPan > rotateTime").text();
		  xzc_resultTitle = returnValue.find("xingZhengCun_ZhuanPan > resultTitle").text();
		  xzc_alertText = returnValue.find("xingZhengCun_ZhuanPan > alertText").text();
		  xzc_fontSize = returnValue.find("xingZhengCun_ZhuanPan > fontSize").text();
		  returnValue.find("xingZhengCun_ZhuanPan > colors > value").each(function () {  
              xzc_colors.push($(this).text());
          });
		  // 获取 行政村 的内容
          returnValue.find("gongZuoPian").each(function () {
			 var tempArray = [];
		  	 $(this).find("village > value").each(function(index, element) {
                tempArray.push($(this).text());
             });
			 xzc_Array.push(tempArray);
          });
		  
		  
		  
		  //获取 抽查内容 的信息
		  ccnr_rollSpeed = returnValue.find("chouChaNeiRong > rollSpeed").text();
		  ccnr_rollTime = returnValue.find("chouChaNeiRong > rollTime").text();
		  ccnr_resultTitle = returnValue.find("chouChaNeiRong > resultTitle").text();
		  ccnr_alertText = returnValue.find("chouChaNeiRong > alertText").text();
          returnValue.find("chouChaNeiRong > value").each(function () {
			 ccnr_Array.push($(this).attr("name"));
			 ccnr_LinkArray.push($(this).find("link").text());
          });

		  
		  
		  //获取 科室 的内容
		  returnValue.find("keShi > name").each(function () { 
              keShi_Array.push($(this).text());
          });
		  //获取 科室 转盘用到的颜色值
		  returnValue.find("keShi > colors > value").each(function () { 
              keShi_colors.push($(this).text());
          });
		  //初始化 科室 转盘
		  $("#keShi").AddCanvasTurntable({
			  sectorText: keShi_Array,
			  alertText: returnValue.find("keShi > alertText").text(),
			  resultTitle: returnValue.find("keShi > resultTitle").text(),
			  rotateTime: returnValue.find("keShi > rotateTime").text(),
			  colors: keShi_colors,
			  fontSize: ifPhone?11:returnValue.find("keShi > fontSize").text(),
			  defaultSpacing: ifPhone?20:35
		  });
		  
        }
    });
	
	// 工作片转盘转到当前选中的扇形需要旋转的角度
	var angles;
	
	// 工作片转盘旋转次数
	var rotNum = 0;
	
	// 工作片转盘当前选中的文本索引
	var curIndex = 0;
		
	// 选中的工作片数组
	var selected_gzp_Array = new Array();
	
	// 工作片转盘事件
	$("body").on("click", "#gongZuoPian button.startBtn", function(){
		if(selected_gzp_Array.length<gzp_Array.length){
			//拿到随机数，计算旋转角度和当前选中文本
			for(var i=0;i>-1;i++){
				curIndex = rnd(0,gzp_Array.length-1);
				if(!ifRepeat(selected_gzp_Array, gzp_Array[curIndex])){
					angles = 6*360*(rotNum+1) - curIndex*(360/gzp_num);
					//gzp_name = gzp_Array[curIndex];
					break;
				}
			}
			
			//转盘旋转
			runCup();
			
			//转盘旋转过程“开始”按钮无法点击
			$(this).attr("disabled", true);
			
			//旋转次数加一
			rotNum++;
			
			//恢复“开始”按钮的点击
			setTimeout(function(){
				addCurrentSelectedGZP(curIndex);
				$("#gongZuoPian button.startBtn").removeAttr("disabled", true);
			},gzp_rotateTime*1000);
		}else{
			alert(gzp_alertText);
		}
	});
	
	// 工作片转盘旋转
	function runCup(){
		var degValue = 'rotate('+angles+'deg'+')',
			targetCanvas = $("#gongZuoPian .canvas1");
		targetCanvas.css('-o-transform',degValue);           //Opera
		targetCanvas.css('-ms-transform',degValue);          //IE浏览器
		targetCanvas.css('-moz-transform',degValue);         //Firefox
		targetCanvas.css('-webkit-transform',degValue);      //Chrome和Safari
		targetCanvas.css('transform',degValue);
	}		
	
	// 添加新选中的工作片
	function addCurrentSelectedGZP(index){		
		
		var newItem = $("<div class='item item-"+ rotNum +"'></div>");
		
		var newItemTitle = $("<p class='title'>第<span class='time'>"+ rotNum +"</span>次抽取的工作片为：<span class='name'>"+ gzp_Array[index] +"</span></p>");
		newItem.append(newItemTitle);
		
		var newDiv = $("<div class='clearfix'>");
		var newVillage = $("<div id='village_"+ rotNum +"' class='village'><p class='lbl'>抽选行政村：</p></div>");
		newDiv.append(newVillage);
		var newContent = $("<div id='content_"+ rotNum +"' class='content'><p class='lbl'>抽选抽查内容：</p></div>");
		newDiv.append(newContent);
		newItem.append(newDiv);
		
		$("#gongZuoPian_result").append(newItem);
		
		selected_gzp_Array.push(gzp_Array[index]);
		
		// 初始化新生成的 行政村转盘 和 查抽内容面板
		/* 行政村 */
		if(xzc_Array[index].length < 1){
			var alertText = $("<p class='alertText'><span class='name'>"+ gzp_Array[index] +"</span> 下没有行政村！</p>");
			$("#village_"+ rotNum +"").append(alertText);
		}else{
			$("#village_"+ rotNum +"").AddCanvasTurntable({
				sectorText: xzc_Array[index],
				alertText: xzc_alertText,
				resultTitle: xzc_resultTitle,
				rotateTime: xzc_rotateTime,
				fontSize: ifPhone?12:xzc_fontSize,
				colors: xzc_colors,
				defaultSpacing: ifPhone?20:25
			});
		}
			
		/* 抽查内容 */
		$("#content_"+ rotNum +"").AddRandomSelection({
			defaultArray: ccnr_Array,
			defaultLinks: ccnr_LinkArray,
			rollSpeed: ccnr_rollSpeed,
			rollTime: ccnr_rollTime,
			alertText: ccnr_alertText,
			resultTitle: ccnr_resultTitle
		});
	
	}
	
	
	//获取随机数
	function rnd(n, m){
		return Math.floor(Math.random()*(m-n+1)+n)
	}
	
	//判断 str 是否存在于 arrtay 中
	function ifRepeat(array,str){
		for(var i=0;i<array.length;i++){
			if(array[i]==str){
				return true;
			}
		}
		return false;
	}
	
})(jQuery);