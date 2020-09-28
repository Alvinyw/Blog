//转盘刻画参考 http://www.17sucai.com/pins/14555.html
(function ($) {
	$.fn.AddCanvasTurntable = function (options) {
		var defaults = {
				/********** 标签属性设置 **********/
				sectorText: '',
				/* 扇形的文本值，应设置成数据形式 */
				colors: '',
				/* 插件用到的颜色，应设置成数据形式 */
				rotateTime: '',
				/* 转盘旋转一次的时间，单位 s，默认是 6s */
				alertText: '',
				/* 全部选中之后的弹框内容 */
				resultTitle: '' /* result 描述 */

			},
			settings = $.extend(defaults, options); //把传入的参数 options 合并到 defaults 里并赋给 settings；若 options 里的参数与 defaults 有重复，则 options 会覆盖 defaults 里的参数

		var _this = this;

		//转到当前选中的扇形需要旋转的角度
		var angles;

		//旋转次数
		var rotNum = 0;

		//当前选中的文本索引
		var curIndex = 0;

		//当前抽中内容
		var notice = null;

		//转盘旋转一次时间
		var rotateTime = settings.rotateTime ? settings.rotateTime : 6;

		//result 描述
		var resultTitle = settings.resultTitle ? settings.resultTitle : "当前已选中的结果如下：";

		//全部选中之后的弹框内容
		var alertText = settings.alertText ? settings.alertText : "转盘里的内容已全部被选中！";

		//转盘用到的颜色: [扇形颜色一，扇形颜色二，扇形颜色三，扇形字体颜色，指针字体颜色，指针和边框颜色]
		//当扇形为奇数时，最后一块扇形的背景色为颜色三
		var colors = settings.colors ? settings.colors : ["#e9536a", "#fbd7a1", "#df6679", "#000", "#fff", "#666"];

		//扇形的文本内容
		var sectorText = settings.sectorText ? settings.sectorText : ["扇形一", "扇形二", "扇形三", "扇形四", "扇形五", "扇形六", "扇形七", "扇形八", "扇形九", "扇形十", "扇形十一", "扇形十二", "扇形十三", "扇形十四"];
		var textNum = sectorText.length;

		//已选中过的文本内容
		var selectedText = new Array();

		//转盘 Canvas 参数
		var canvasWidth = _this.width(); //转盘为圆形，宽高相等

		//ID 后缀
		var idSuffix = Date.parse(new Date()) / 1000,
			canvasWrapperID = "canvasWrapper-" + idSuffix,
			canvas1ID = "canvas1-" + idSuffix,
			canvas2ID = "canvas2-" + idSuffix,
			clickBtnID = "clickBtn-" + idSuffix,
			resultID = "result-" + idSuffix;

		//初始化转盘的 html 元素
		initCanvasNode();

		//初始化转盘
		initTurntable();

		//为指针绑定点击事件
		$("body").on("click", "#" + clickBtnID + "", function () {
			if (selectedText.length < sectorText.length) {
				//拿到随机数，计算旋转角度和当前选中文本
				for (var i = 0; i > -1; i++) {
					curIndex = rnd(0, sectorText.length - 1);
					if (!ifRepeat(selectedText, sectorText[curIndex])) {
						angles = 6 * 360 * (rotNum + 1) - curIndex * (360 / textNum);
						notice = sectorText[curIndex];
						break;
					}
				}

				//转盘旋转
				runCup();

				//转盘旋转过程“开始”按钮无法点击
				$("#" + clickBtnID + "").attr("disabled", true);

				//旋转次数加一
				rotNum = rotNum + 1;

				//恢复“开始”按钮的点击
				setTimeout(function () {
					console.log(notice);
					var newText = $('<span>');
					newText.html(sectorText[curIndex]);

					if (selectedText.length != 0) {
						//$("#"+resultID+"").append('、');
					}

					selectedText.push(sectorText[curIndex]);
					$("#" + resultID + "").append(newText);

					$("#" + clickBtnID + "").removeAttr("disabled", true);
				}, rotateTime * 1000);
			} else {
				alert(alertText);
			}
		});

		//初始化转盘的 html 元素
		function initCanvasNode() {
			var canvasWrapper = $("<div id='" + canvasWrapperID + "'>");
			canvasWrapper.css({
				"height": _this.width(),
				"width": _this.width(),
				"position": "relative"
			});

			var canvasZhuanPan = $("<canvas id='" + canvas1ID + "' width='" + canvasWidth + "' height='" + canvasWidth + "'>");
			canvasZhuanPan.css({
				"border-radius": "100%",
				"transition": "transform " + rotateTime + "s",
				"-o-transition": "transform " + rotateTime + "s",
				"-ms-transition": "transform " + rotateTime + "s",
				"-moz-transition": "transform " + rotateTime + "s",
				"-webkit-transition": "transform " + rotateTime + "s",
				"transform-origin": "50% 50%",
				"-o-transform-origin": "50% 50%",
				"-ms-transform-origin": "50% 50%",
				"-moz-transform-origin": "50% 50%",
				"-webkit-transform-origin": "50% 50%"
			});
			canvasWrapper.append(canvasZhuanPan);

			var canvasZhiZhen = $("<canvas id='" + canvas2ID + "' width='" + canvasWidth + "' height='" + canvasWidth + "'>");
			canvasZhiZhen.css({
				"position": "absolute",
				"top": "0",
				"left": "0",
				"z-index": "30"
			});
			canvasWrapper.append(canvasZhiZhen);

			var clickBtn = $("<button id='" + clickBtnID + "'>");
			clickBtn.css({
				"position": "absolute",
				"top": "50%",
				"left": "50%",
				"width": canvasWidth / 5,
				"height": canvasWidth / 5,
				"margin-top": -canvasWidth / 10,
				"margin-left": -canvasWidth / 10,
				"border-radius": "100%",
				"cursor": "pointer",
				"border": "none",
				"background": "transparent",
				"outline": "none",
				"z-index": "40"
			});
			canvasWrapper.append(clickBtn);

			var resultDiv = $("<div id='" + resultID + "' class='result' width='" + canvasWidth + "'>");
			resultDiv.css({
				"padding": "10px",
				"border": "2px solid #aaa",
				"margin-top": "20px",
				"border-radius": "4px"
			});
			var resultTitleNode = $("<h3>" + resultTitle + "</h3>");
			resultDiv.append(resultTitleNode);

			_this.append(canvasWrapper);

			_this.append(resultDiv);

		}

		//初始化绘制转盘
		function initTurntable() {
			var canvas1 = document.getElementById(canvas1ID);
			var canvas2 = document.getElementById(canvas2ID);
			var ctx1 = canvas1.getContext('2d');
			var ctx2 = canvas2.getContext('2d');

			//初始化扇形
			initSector();

			//初始化扇形文本
			initSectorText();

			//初始化指针
			initPoint();

			//初始化扇形转盘
			function initSector() {
				var startAngle = 0; //扇形的开始弧度
				var endAngle = 0; //扇形的终止弧度

				//画一个 textNum 等份扇形组成的圆形
				for (var i = 0; i < textNum; i++) {
					startAngle = i * Math.PI * 2 / textNum - Math.PI / 2 + Math.PI * 2 / textNum / 2; //保证初始化时指针正好对应在 扇形一 的中间
					endAngle = startAngle + Math.PI * 2 * (1 / textNum);
					ctx1.save();
					ctx1.beginPath();
					ctx1.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 2, startAngle, endAngle, false);
					ctx1.lineWidth = canvasWidth;
					if (i % 2 == 0) {
						ctx1.strokeStyle = colors[0];
					} else {
						ctx1.strokeStyle = colors[1];
					}
					if (i == textNum - 1 && textNum % 2 != 0) {
						ctx1.strokeStyle = colors[2];
					}
					ctx1.stroke();
					ctx1.restore();
				}

				//中间白底圆圈：半径：canvasWidth/10
				ctx1.beginPath();
				ctx1.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 10, 0, Math.PI * 2, false);
				ctx1.fillStyle = colors[4];
				ctx1.fill();
				ctx1.closePath();
			}

			//初始化扇形转盘文字
			function initSectorText() {
				ctx1.textAlign = 'start';
				ctx1.textBaseline = 'middle';
				ctx1.fillStyle = colors[3];
				var step = 2 * Math.PI / textNum;
				for (var i = 0; i < textNum; i++) {
					ctx1.save();
					ctx1.beginPath();
					ctx1.translate(canvasWidth / 2, canvasWidth / 2);
					ctx1.rotate(i * step);
					ctx1.font = "Bold 16px Microsoft YaHei";
					ctx1.fillStyle = colors[3];
					var arrText = sectorText[i].split('');
					for (var j = 0; j < arrText.length; j++) {
						//-8 是为了让文字向左偏移半个字的宽度（大概是 8px）
						ctx1.fillText(arrText[j], -8, 20 * j - (canvasWidth / 2 - 35), 20);
					}
					ctx1.closePath();
					ctx1.restore();
				}
			}

			//初始化指针
			function initPoint() {
				//画转盘最外边边框
				ctx2.beginPath();
				ctx2.strokeStyle = colors[5];
				ctx2.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 2 - 2, 0, Math.PI * 2, false);
				ctx2.lineWidth = 3;
				ctx2.stroke();
				ctx2.closePath();
				//箭头指针
				ctx2.beginPath();
				ctx2.moveTo(canvasWidth / 2, canvasWidth * (3 / 10));
				ctx2.lineTo(canvasWidth / 2 - 9, canvasWidth / 2);
				ctx2.lineTo(canvasWidth / 2 + 9, canvasWidth / 2);
				ctx2.lineTo(canvasWidth / 2, canvasWidth * (3 / 10));
				ctx2.fillStyle = colors[5];
				ctx2.fill();
				ctx2.closePath();
				//中间小圆
				ctx2.beginPath();
				ctx2.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 10 - 3, 0, Math.PI * 2, false);
				ctx2.fillStyle = colors[5];
				ctx2.fill();
				ctx2.closePath();
				//小圆文字
				ctx2.font = "Bold 16px Microsoft YaHei";
				ctx2.textAlign = 'start';
				ctx2.textBaseline = 'middle';
				ctx2.fillStyle = colors[4];
				ctx2.beginPath();
				ctx2.fillText('开始', canvasWidth / 2 - 16, canvasWidth / 2 - 1, 40);
				ctx2.fill();
				ctx2.closePath();
			}
		}

		//转盘旋转
		function runCup() {
			var degValue = 'rotate(' + angles + 'deg' + ')',
				targetCanvas = $("#" + canvas1ID + "");
			targetCanvas.css('-o-transform', degValue); //Opera
			targetCanvas.css('-ms-transform', degValue); //IE浏览器
			targetCanvas.css('-moz-transform', degValue); //Firefox
			targetCanvas.css('-webkit-transform', degValue); //Chrome和Safari
			targetCanvas.css('transform', degValue);
		}

		//获取随机数
		function rnd(n, m) {
			return Math.floor(Math.random() * (m - n + 1) + n)
		}

		//判断 str 是否存在于 arrtay 中
		function ifRepeat(array, str) {
			for (var i = 0; i < array.length; i++) {
				if (array[i] == str) {
					return true;
				}
			}
			return false;
		}


	}
})(jQuery);