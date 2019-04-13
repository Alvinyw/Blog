$(function (){
	
	var defaultNameArray = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31); //总共有的人员
	var curNameArray = new Array(); //已被抽中的人员
	//var notJoiningNameArray = new Array(); //不参与抽选的人员
	
	for(var i=0;i<defaultNameArray.length;i++){
		$("#selectedName").append("<li data-num='"+ defaultNameArray[i] +"'>"+ getName(defaultNameArray[i]) +"</li>");
	}
	$("#mask").show();
	$("#chooseSelected").fadeIn();
	
	function initHeight(){
		var winHeight = document.body.clientHeight - $('h1').outerHeight();
		var contentMaxHeight = (winHeight*0.80)>935?935:(winHeight*0.80);
		var resultMaxHeight = (winHeight*0.65)>770?770:(winHeight*0.65);
		var chooseSelectedW = $("#chooseSelected").outerWidth();
		var chooseSelectedH = $("#chooseSelected").outerHeight();
		
		$("#content").css("max-width",contentMaxHeight);
		$("#result").css("max-width",resultMaxHeight);
		$("#chooseSelected").css({"margin-top":-chooseSelectedH/2,"margin-left":-chooseSelectedW/2});
	}
	initHeight();
	$(window).resize(function(){
		initHeight();
	});
	
	$("#mask").click(function(){
		$("#mask").fadeOut();
		$("#chooseSelected").fadeOut();
	});
	
	$("#selectedName").on("click", "li", function(){
		$(this).toggleClass('on');
	});
	
	$("#btnConfirmSelected").click(function(){
		$("#selectedName li").each(function(index, element) {
			var _curNum = parseInt($(this).attr('data-num'));
            if($(this).hasClass('on')&&ifRepeat(curNameArray,_curNum)){
				curNameArray.push(_curNum);
			}
        });
		$("#mask").fadeOut();
		$("#chooseSelected").fadeOut();
	});
	
	$("#checkSelected").click(function(){
		$("#selectedName li").removeClass('on');
		for(var i=0;i<curNameArray.length;i++){
			$("#selectedName li[data-num='"+ curNameArray[i] +"'").addClass('on');
		}
		$("#mask").show();
		$("#chooseSelected").fadeIn();
	});
	
	var bRotate = false;
	
	function refreshResult(NameNum){
		var newItem = $('<span class="ry">'+ getName(NameNum) +'</span>');
	    $("#result .content").append(newItem);
		
	}
	
	function getName(NameNum){
		var curNameNum = parseInt(NameNum);
		var Name;
		switch (curNameNum) {
			case 0:
				Name = '潘毅彬';
				break;
			case 1:
				Name = '金  浩';
				break;
			case 2:
				Name = '刘剑辉';
				break;
			case 3:
				Name = '陈  鹄';
				break;
			case 4:
				Name = '龚小兵';
				break;
			case 5:
				Name = '陈德明';
				break;
			case 6:
				Name = '季国强';
				break;
			case 7:
				Name = '金康康';
				break;
			case 8:
				Name = '方寒英';
				break;
			case 9:
				Name = '许  坚';
				break;
			case 10:
				Name = '高溶蔚';
				break;
			case 11:
				Name = '陶莉莉';
				break;
			case 12:
				Name = '陈  俊';
				break;
			case 13:
				Name = '楼静敏';
				break;
			case 14:
				Name = '楼玮玮';
				break;
			case 15:
				Name = '金昭非';
				break;
			case 16:
				Name = '黄林滨';
				break;
			case 17:
				Name = '王  亮';
				break;
			case 18:
				Name = '毛宏吹';
				break;
			case 19:
				Name = '朱庆军';
				break;
			case 20:
				Name = '俞  凯';
				break;
			case 21:
				Name = '朱杨威';
				break;
			case 22:
				Name = '楼勇军';
				break;
			case 23:
				Name = '杨  英';
				break;
			case 24:
				Name = '陈玉生';
				break;
			case 25:
				Name = '邵显明';
				break;
			case 26:
				Name = '施廖英';
				break;
			case 27:
				Name = '毛慧玲';
				break;
			case 28:
				Name = '郭侃玲';
				break;
			case 29:
				Name = '王义雪';
				break;
			case 30:
				Name = '金  灿';
				break;
			case 31:
				Name = '胡一江';
				break;
		}
		
		return Name;
	}	
		
	function ifRepeat(array,num){
		for(var i=0;i<array.length;i++){
			if(array[i]==num){
				return false;
			}
		}
		return true;
	}
	
	//前 time 次不能抽到 num
	function notThisOne(time,num){
		//前 20 次不能抽到 刘剑辉
		if(curNameArray.length<time && num==2){
			return false;
		}
		return true;
	}

	var rotateFn = function (NameNum, angles){
		bRotate = !bRotate;
		$('#zhuanpan').stopRotate();
		$('#zhuanpan').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:2500,
			callback:function (){
				bRotate = !bRotate;
				refreshResult(NameNum);
			}
		})
	};

	$('.pointer').click(function (){
		if(bRotate)return;
		var curItem;
		
		if(curNameArray.length<defaultNameArray.length){
			for(var i=0;i>-1;i++){
				var tempItem = rnd(0,31);
				if(ifRepeat(curNameArray,defaultNameArray[tempItem])&& notThisOne(21,tempItem)){
					curItem = tempItem;
					curNameArray.push(curItem);
					break;
				}
			}
			//[11.25, 22.5, 33.75, 45, 56.25, 67.5, 78.75, 90, 101.25, 112.5, 123.75, 135, 146.25, 157.5, 168.75, 180, 191.25, 202.5, 213.75, 225, 236.25, 247.5, 258.75, .....]
			//-5.625
			//[5.625, .....]
			rotateFn(curItem, 360-curItem*11.25-7.5);	
		}else{
			alert("该轮抽选中所有的人员都已被选中过。");
		}	
	});
});
function rnd(n, m){
	return Math.floor(Math.random()*(m-n+1)+n)
}