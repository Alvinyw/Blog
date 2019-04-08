$(function (){
	
	var bRotate = false;
	
	function refreshResult(DYnum){
		var LEN_selectedDY = $("#result .ry").length;
		var newItem = $('<span class="ry">'+ getDY(DYnum) +'</span>');
		if(LEN_selectedDY!=0){
			$("#result").append("、");
		}
	    $("#result").append(newItem);
		
	}
	
	function getDY(DYnum){
		var curDYnum = parseInt(DYnum);
		var DYname;
		switch (curDYnum) {
			case 0:
				DYname = '潘毅彬';
				break;
			case 1:
				DYname = '金  浩';
				break;
			case 2:
				DYname = '刘剑辉';
				break;
			case 3:
				DYname = '陈  鹄';
				break;
			case 4:
				DYname = '龚小兵';
				break;
			case 5:
				DYname = '陈德明';
				break;
			case 6:
				DYname = '季国强';
				break;
			case 7:
				DYname = '金康康';
				break;
			case 8:
				DYname = '方寒英';
				break;
			case 9:
				DYname = '许  坚';
				break;
			case 10:
				DYname = '高溶蔚';
				break;
			case 11:
				DYname = '陶莉莉';
				break;
			case 12:
				DYname = '陈  俊';
				break;
			case 13:
				DYname = '楼静敏';
				break;
			case 14:
				DYname = '楼玮玮';
				break;
			case 15:
				DYname = '金昭非';
				break;
			case 16:
				DYname = '黄林滨';
				break;
			case 17:
				DYname = '王  亮';
				break;
			case 18:
				DYname = '毛宏吹';
				break;
			case 19:
				DYname = '朱庆军';
				break;
			case 20:
				DYname = '俞  凯';
				break;
			case 21:
				DYname = '朱杨威';
				break;
			case 22:
				DYname = '楼勇军';
				break;
			case 23:
				DYname = '杨  英';
				break;
			case 24:
				DYname = '陈玉生';
				break;
			case 25:
				DYname = '邵显明';
				break;
			case 26:
				DYname = '施廖英';
				break;
			case 27:
				DYname = '毛慧玲';
				break;
			case 28:
				DYname = '郭侃玲';
				break;
			case 29:
				DYname = '王义雪';
				break;
			case 30:
				DYname = '金  灿';
				break;
			case 31:
				DYname = '胡一江';
				break;
		}
		
		return DYname;
	}	
		
	function ifRepeat(array,str){
		for(var i=0;i<array.length;i++){
			if(array[i]==str){
				return false;
			}
		}
		return true;
	}

	var rotateFn = function (DYnum, angles){
		bRotate = !bRotate;
		$('#zhuanpan').stopRotate();
		$('#zhuanpan').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:2500,
			callback:function (){
				bRotate = !bRotate;
				refreshResult(DYnum);
			}
		})
	};

	var defaultJZ = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31); //总共有的人员
	var curJZ = new Array(); //已被抽中的人员
	$('.pointer').click(function (){
		if(bRotate)return;
		var curItem;
		
		if(curJZ.length<defaultJZ.length){
			for(var i=0;i>-1;i++){
				var tempItem = rnd(0,31);
				if(ifRepeat(curJZ,defaultJZ[tempItem])){
					curItem = tempItem;
					curJZ.push(curItem);
					break;
				}
			}
			//[11.25, 22.5, 33.75, 45, 56.25, 67.5, 78.75, 90, 101.25, 112.5, 123.75, 135, 146.25, 157.5, 168.75, 180, 191.25, 202.5, 213.75, 225, 236.25, 247.5, 258.75, .....]
			//-5.625
			//[5.625, .....]
			rotateFn(curItem, 360-curItem*11.25-5.625);	
		}else{
			alert("所有的人员都已被选中过。");
		}	
	});
});
function rnd(n, m){
	return Math.floor(Math.random()*(m-n+1)+n)
}