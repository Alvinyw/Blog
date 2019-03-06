//JS 参考：http://www.17sucai.com/pins/demo-show?id=9496
$(function (){
	
	var bRotate = false;
	
	function refreshResult(JZnum){
		var newItem = $('<div class="item item-'+ JZnum +'" jz-num="'+ JZnum +'">');		
		var newItemStr = '<p>您选中的街镇为：<span class="jz">'+ getJZ(JZnum) +'</span></p><p><a class="btn cz" href="javascript:void(0)">点击选村庄</a></p><p class="czGrp">您选择的村庄为：</p><p><a class="btn sq" href="javascript:void(0)">点击选社区</a></p><p class="sqGrp">您选择的社区为：</p>';
	    $(newItem).html(newItemStr);
	    $("#result").append(newItem);
		
	}
	
	function getJZ(JZnum){
		var curJZnum = parseInt(JZnum);
		var JZname;
		switch (curJZnum) {
			case 0:
				JZname = '稠江街道';
				break;
			case 1:
				JZname = '江东街道';
				break;
			case 2:
				JZname = '福田街道';
				break;
			case 3:
				JZname = '稠城街道';
				break;
			case 4:
				JZname = '赤岸镇';
				break;
			case 5:
				JZname = '义亭镇';
				break;
			case 6:
				JZname = '大成镇';
				break;
			case 7:
				JZname = '上溪镇';
				break;
			case 8:
				JZname = '苏溪镇';
				break;
			case 9:
				JZname = '佛堂镇';
				break;
			case 10:
				JZname = '城西街道';
				break;
			case 11:
				JZname = '甘三里街道';
				break;
			case 12:
				JZname = '后宅街道';
				break;
			case 13:
				JZname = '北苑街道';
				break;
		}
		
		return JZname;
	}
	
	function getCZ(JZnum){
		var curJZnum = parseInt(JZnum);
		var CZname;
		switch (curJZnum) {
			case 0:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 1:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 2:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 3:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 4:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 5:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 6:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 7:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 8:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 9:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 10:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 11:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 12:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
			case 13:
				CZname = new Array("村庄1","村庄2","村庄3","村庄4","村庄5","村庄6");
				break;
		}
		
		return CZname;
	}
	
	function getSQ(JZnum){
		var curJZnum = parseInt(JZnum);
		var SQname;
		switch (curJZnum) {
			case 0:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 1:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 2:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 3:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 4:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 5:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 6:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 7:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 8:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 9:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 10:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 11:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 12:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
			case 13:
				SQname = new Array("社区1","社区2","社区3","社区4","社区5","社区6");
				break;
		}
		
		return SQname;
	}
	
	$("body").on("click", "a.btn.cz", function(){
		var curJZnum = $(this).parents('.item').attr('jz-num');
		var defaultCZArray = getCZ(curJZnum);		
		var curIndex;
		
		var curCZArray = new Array();
		var curCZGrp = $(this).parent().siblings('p.czGrp');
		var curCZSpan = curCZGrp.find('span.cz');
		for(var i=0;i<curCZSpan.length;i++){
			curCZArray[i] = $(curCZSpan[i]).html().toString();
		}
		
		if(curCZArray.length<defaultCZArray.length){	
			for(var i=0;i>-1;i++){
				curIndex = rnd(0,defaultCZArray.length-1);
				if(ifRepeat(curCZArray,defaultCZArray[curIndex])){
					var newCZ = $('<span class="cz">');
					newCZ.html(defaultCZArray[curIndex]);
					
					if(curCZSpan.length!=0){
						curCZGrp.append('、');
					}
					
					curCZGrp.append(newCZ);
					return true;
				}
			}
				
		}else{
			alert(getJZ(curJZnum)+"下的村庄已全部被选中。");
		}
	});
	$("body").on("click", "a.btn.sq", function(){
		var curJZnum = $(this).parents('.item').attr('jz-num');
		var defaultSQArray = getSQ(curJZnum);
		
		var curIndex;
		
		var curSQArray = new Array();
		var curSQGrp = $(this).parent().siblings('p.sqGrp');
		var curSQSpan = curSQGrp.find('span.sq');
		for(var i=0;i<curSQSpan.length;i++){
			curSQArray[i] = $(curSQSpan[i]).html().toString();
		}
		
		if(curSQArray.length<defaultSQArray.length){
			for(var i=0;i>-1;i++){
				curIndex = rnd(0,defaultSQArray.length-1);
				if(ifRepeat(curSQArray,defaultSQArray[curIndex])){
					var newSQ = $('<span class="sq">');
					newSQ.html(defaultSQArray[curIndex]);
					
					if(curSQSpan.length!=0){
						curSQGrp.append('、');
					}
					
					curSQGrp.append(newSQ);
					return true;
				}
			}		
		}else{
			alert(getJZ(curJZnum)+"下的社区已全部被选中。");
		}
		
	});
	
	function ifRepeat(array,str){
		for(var i=0;i<array.length;i++){
			if(array[i]==str){
				return false;
			}
		}
		return true;
	}

	var rotateFn = function (JZnum, angles){
		bRotate = !bRotate;
		$('#zhuanpan').stopRotate();
		$('#zhuanpan').rotate({
			angle:0,
			animateTo:angles+1800,
			duration:2500,
			callback:function (){
				bRotate = !bRotate;
				refreshResult(JZnum);
				console.log(getJZ(JZnum));
			}
		})
	};

	var defaultJZ = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13); //总共有的街镇
	var curJZ = new Array(); //已被抽中的街镇
	$('.pointer').click(function (){
		if(bRotate)return;
		var curItem;
		
		if(curJZ.length<defaultJZ.length){
			for(var i=0;i>-1;i++){
				var tempItem = rnd(0,13);
				if(ifRepeat(curJZ,defaultJZ[tempItem])){
					curItem = tempItem;
					curJZ.push(curItem);
					break;
				}
			}		
		}else{
			alert("所有的街镇都已被选中过。");
		}
		

		//[25.7, 51.4, 77.1, 102.8, 128.5, 154.2, 179.9, 205.6, 231.3, 257,   282.7, 308.4, 334.1, 360]
		//-12.8
		//[12.8, 38.6, 64.3, 90,    115.7, 141.4, 167.1, 192.8, 218.5, 244.2, 269.9, 295.6, 321.3, 347.2]
		switch (curItem) {
			case 0:
				rotateFn(0, 347.2);
				break;
			case 1:
				rotateFn(1, 321.3);
				break;
			case 2:
				rotateFn(2, 295.6);
				break;
			case 3:
				rotateFn(3, 269.9);
				break;
			case 4:
				rotateFn(4, 244.2);
				break;
			case 5:
				rotateFn(5, 218.5);
				break;
			case 6:
				rotateFn(6, 192.8);
				break;
			case 7:
				rotateFn(7, 167.1);
				break;
			case 8:
				rotateFn(8, 141.4);
				break;
			case 9:
				rotateFn(9, 115.7);
				break;
			case 10:
				rotateFn(10, 90);
				break;
			case 11:
				rotateFn(11, 64.3);
				break;
			case 12:
				rotateFn(12, 38.6);
				break;
			case 13:
				rotateFn(13, 12.8);
				break;
		}
	});
});
function rnd(n, m){
	return Math.floor(Math.random()*(m-n+1)+n)
}