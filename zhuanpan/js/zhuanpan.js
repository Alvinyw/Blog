//JS 参考：http://www.17sucai.com/pins/demo-show?id=9496
$(function (){
	
	var bRotate = false;
	
	function refreshResult(JZnum){
		var newItem = $('<div class="item item-'+ JZnum +'" jz-num="'+ JZnum +'">');		
		var newItemStr = '<p>您选中的街镇为：<span class="jz">'+ getJZ(JZnum) +'</span></p><p><a class="btn cz" href="javascript:void(0)">点击选村庄</a></p><p class="czGrp">您选中的村庄为：</p><p><a class="btn sq" href="javascript:void(0)">点击选社区</a></p><p class="sqGrp">您选中的社区为：</p>';
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
				JZname = '大陈镇';
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
				JZname = '廿三里街道';
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
				CZname = new Array("诸宅","象山","官塘","新村","喻宅","春联","柯村","江湾","新屋","下柳","高庚","崇山","红联","后申塘","下何宅","水冰塘","东王界","西王界","杨梅院","犁头山","羊角山","官塘下","上崇山","金村");
				break;
			case 1:
				CZname = new Array("金星","徐村","东上","许宅","后园","供店","前流","永和","红星","江南","西赵","毛店","后房","马村","潘村","张村","毛店山脚","平畴","下湾","侯儿村","新兴","大元","青南","西塘","沙溪","南山坑","上麻车","下麻车","青岩傅","大湖头","船埠头","白莲塘","观音塘","石塔头","东新屋","下傅");
				break;
			case 2:
				CZname = new Array("洋塘桥头","杏园","尚经","洛店","罗店","全宅","清塘","九如堂","下娄店","官端前","东岗山","东象山","立碑塘","白岸头","八脚坎","下华店","前黄宅","新塘下","堂阁","下沈","西界","前上周","森屋","前店","溪前","下兆","殿前","过溪楼","下西陶","祖科塘","西罗店");
				break;
			case 3:
				CZname = new Array("无村");
				break;
			case 4:
				CZname = new Array("柏峰","后山","溪西","巽村","塘边","雅端","东朱","石城","乔亭","鱼曹头","南青口","神坛","午山干","雅治街","赤岸一村","赤岸二村","赤岸三村","赤岸四村","田沿","新樟","南杨村","上吴","尚阳","前川","朱店","湾塘","五柳","莱山","大桥","官余","慈溪","羊印","后金宅","下水碓","清溪","三丫塘","三角毛店","八石","薛乔","双峰","南旺溪","山盘");
				break;
			case 5:
				CZname = new Array("白塘","山景","鲍宅","后张","张家","吴村","陇头朱","西田","青肃","上宅","车路","上滕","下店","下滕","先田","西楼","缸窑","何店","前屋","上胡","叶前","枧畴","杭畴","古亭塘","龙华院","雅文楼","石塔一","石塔二","王阡","王莲塘","铜山前","白塔塘","畈田朱","早溪塘","包西塘","铜山湖","江岸","五联","陈家","义亭","荷店塘","旺吴桥","车站"); 
				break;
			case 6:
				CZname = new Array("团结","杜桥","红旗","凰升塘","北金山","大陈一村","大陈二村","大陈三村","朝塘","婆姆","西岸","善坑","马畈","春林","溪后","大畈","楂林一村","楂林二村","李孟宅","上坑仁","大岭下","杜门","红峰","宦塘","义北","灯塔","东联","北山府","立山黄","八里桥头","众拥","后畈");
				break;
			case 7:
				CZname = new Array("岩口","余车","东余","云门","祥贝","樟村","五塘","宅山","寺西","周村","斯何","溪华","水碓张","后溪","上楼宅","贾伯塘","红桥头","富塘下","下楼宅","金傅宅","上溪一村","上溪二村","上溪三村","黄山","荷市","新民","和平","南平","沈宅","王村","下宅","水碓","溪  田","寺口蒋","苦竹塘","萧皇塘","寺口陈","毛塘楼","桃花坞","双溪岩","潜溪","三和","同心","五星社","馨苑");
				break;
			case 8:
				CZname = new Array("新院","蒋宅","后店","马丁","徐丰","立塘","密溪","洪流","东青","杜村","邢宅","新乐","同春","同裕","三联","联合","上楼","青春","翁界","下屋","溪北","花厅","殿下","龙华","湾头下","齐山楼","塘里蒋","里宅","高岭","下陈","新厅","上甘","范家","畈田","上西陶","后山坞","塘头应","西山下","上山下","东陶","东洪","六都","苏港");
				break;
			case 9:
				CZname = new Array("赵朱","石楼","起鸣","晓联","稽亭","王宅","和溪","湖干","方前","桥西","楼村","前王","东山","田心村","光明","雅西","鲁雅","后塘","新店","毛陈","后阳","下前王","后力山","塘下洋","侯芹","泽塘","葛仙","金山","上村","寺口","芦塘下","花园口","新塘西","塔山","云山","上傅","陈村","钟村","继成","石壁","剡溪","南王店","南江","寺前街","张宅","宝丹","朝阳","翁靖","兴盛","舟墟湖","倍磊","南埠头","坑口","团力","六石","平望","龙溪");
				break;
			case 10:
				CZname = new Array("五一","六一","七一","八一","枫溪","五星","毛店桥头","西俞","山翁","于宅","殿口","蒋母塘","益公山","夏迹塘","井头徐","新双溪","夏演","溪干","桥头","夏楼村","后叶","上杨村","流大塘","何斯路","分水塘","石明堂","何泮山","龙山","流里塘","新港");
				break;
			case 11:
				CZname = new Array("深塘","李宅","埠头","何宅","后义","陶店","王店","东莲塘","葛塘","张思","派塘","西澄","华溪","联五","里兆","西京","李塘","泉塘","大岭","里忠","群益","塘下店","郑山头","下朱宅","张家园","活鱼塘","楼山塘","屏石头","后乐","东陈");
				break;
			case 12:
				CZname = new Array("全备","寺前","洪家","后余","上周","李祖","岭脚","下万","陈宅","大傅宅","岩南","上金","苏街","吴宅","下旺","俊塘","坞灶","广口","湖门","新华","后毛店","马踏石","马交塘","西关田","深塘下","方塘","稠岩","余店","金鹤","前后傅","黄龙","宅二");
				break;
			case 13:
				CZname = new Array("前洪","万村","茂后","楼宅","王高畈","金山脚");
				break;
		}
		
		return CZname;
	}
	
	function getSQ(JZnum){
		var curJZnum = parseInt(JZnum);
		var SQname;
		switch (curJZnum) {
			case 0:
				SQname = new Array("兴业","凤凰","锦都","松门里","永祥","昌德","高新","黎明","香溪","富港","杨村");
				break;
			case 1:
				SQname = new Array("商苑","临江","江南","鸡鸣山","东洲","南苑","五爱","塔下洲","南山","盘溪","钓鱼矶","望湖","黎明湖","商博","东苑","流赐");
				break;
			case 2:
				SQname = new Array("长春","福田","诚信","银海","联港","荷塘","商城","下骆宅","振兴","兴隆","宗宅","物华","通福");
				break;
			case 3:
				SQname = new Array("绣湖","江滨","胜利","通惠","向阳","市场","车站","宾王","孝子祠","下车门","词林","银苑","雪峰");
				break;
			case 4:
				SQname = new Array("水岸");
				break;
			case 5:
				SQname = new Array("无社区");
				break;
			case 6:
				SQname = new Array("无社区");
				break;
			case 7:
				SQname = new Array("上潘","塘西");
				break;
			case 8:
				SQname = new Array("胡宅","十和里","东风","龙祈","苏福");
				break;
			case 9:
				SQname = new Array("江北","蟠龙","大成","渡磬","大士","云黄","吴溪");
				break;
			case 10:
				SQname = new Array("陆港");
				break;
			case 11:
				SQname = new Array("金麟","拨浪鼓","思源","廿三里");
				break;
			case 12:
				SQname = new Array("金城","洪深","起航","北站","九州","群英");
				break;
			case 13:
				SQname = new Array("幸福","建设","迎宾","复兴","四季","丹溪","望道","拥军","春晗","稠山","爱民","凌云","柳青","经发","崇德");
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