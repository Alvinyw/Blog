(function (DL,MBC) {
	"use strict";
	var lib = DL;

	function ImageControl(cfg) {
		var _this = this;

		// ImageControl 容器的宽高
		_this.containerWidth = 0;
		_this.containerHeight = 0;

		// ImageControl 的宽高
		_this.controlWidth = 0;
		_this.controlHeight = 0;

		// ImageControl 的原始宽高
		_this._origImageWidth = -1;
		_this._origImageHeight = -1;

		// ImageControl 里 image 实际占用的宽/高
		_this._width = 0;
		_this._height = 0;

		// ImageControl 位置信息
		_this.Left = 0;
		_this.Top = 0;	

		_this.objImage = false;
		_this.imageUrl = null;

		// ImageControl 在 client 端的索引
		_this.cIndex = -1;

		_this.bVisible = true;

		_this.viewer = null;

		// 初始化 ImageControl
		_this.__init(cfg);
	}

	// 初始化
	ImageControl.prototype.__init = function (cfg) {
		var _this = this;

		_this.viewer = cfg.viewer;
		_this.controlWidth = _this.containerWidth = cfg.imgContainerW;
		_this.controlHeight = _this.containerHeight = cfg.imgContainerH;
		_this.imageUrl = cfg.imageUrl;
		_this.cIndex = cfg.index;

		_this.divOut = document.createElement('div');
		_this.divOut.style.display = 'inline-block';
		_this.divOut.style.position = 'absolute';
		_this.divOut.style.top = _this.Top + 'px';
		_this.divOut.style.left = _this.Left + 'px';
		_this.divOut.style.width = _this.controlWidth + 'px';
		_this.divOut.style.height = _this.controlHeight + 'px';

		_this.__getImageByUrl();
	};

	ImageControl.prototype.SetVisible = function (bShow) {
		var _this = this;

		if (_this.cIndex == -1) {
			return;
		}

		_this.bVisible = bShow;

		if(_this.bVisible){
			_this.divOut.style.display = '';
		}else{
			_this.divOut.style.display = 'none';
		}

		return true;
	};

	ImageControl.prototype.ChangeControlSize = function (width, height) {
		var _this = this;

		_this.containerWidth = _this.viewer._imgsDivW;
		_this.containerHeight = _this.viewer._imgsDivH;
		
		_this.controlWidth = width;
		_this.controlHeight = height;
		_this.divOut.style.width = _this.controlWidth + 'px';
		_this.divOut.style.height = _this.controlHeight + 'px';

		_this.Left = (_this.containerWidth - _this.controlWidth)/2;
		_this.Top = (_this.containerHeight - _this.controlHeight)/2;

		if(_this.cIndex == _this.viewer.GetCurentIndex())
			_this.SetLocation(_this.Left, _this.Top);

		_this.Show();
		return true;
	};

	// 设置控件位置
	ImageControl.prototype.SetLocation = function (x, y) {
		var _this = this;
		if(arguments.length == 0){
			_this.Left = (_this.containerWidth - _this.controlWidth)/2;
			_this.Top = (_this.containerHeight - _this.controlHeight)/2;
		}
		if(arguments.length == 1){
			_this.Left = x;
		}
		if(arguments.length > 1){
			_this.Left = x;
			_this.Top = y;
		}
		
		if (_this.divOut) {
			if (_this.divOut.parentNode)
				_this.divOut.parentNode.style.position = "relative";
			_this.divOut.style.position = 'absolute';
			_this.divOut.style.left = _this.Left + 'px';
			_this.divOut.style.top = _this.Top + 'px';
		}

		return true;
	};

	ImageControl.prototype.GetEL = function () {
		return this.divOut;
	};

	ImageControl.prototype.GetIndex = function (){
		return this.cIndex;
	}

	ImageControl.prototype.SetIndex = function (index){
		var _this = this;
		if(lib.isNumber(index) && index>=0)
			_this.cIndex = index;
		else
			_this.cIndex = -1;
		return true;
	}

	// 清空图片，显示Loading...
	ImageControl.prototype.ClearImage = function () {
		var _this = this;	

		_this.objImage = false;

		_this._origImageWidth = -1;
		_this._origImageHeight = -1;
		return true;
	};

	// 重新显示图片
	ImageControl.prototype.Show = function () {
		var _this = this;

		if (_this.cIndex == -1) {
			return;
		}

		_this.__fitImage();
		return true;
	};

	ImageControl.prototype.Destroy = function () {
		var _this = this;

		_this.ClearImage();

		return true;
	};

	// 刷新 ImageControl
	ImageControl.prototype.Refresh = function () {
		var _this = this;

		_this.__getImageByUrl();
		return true;
	};

	// 计算 ImageControl 里实际显示 image 的宽高
	ImageControl.prototype.__fitImage = function () {
		var _this = this;
		if(!_this.objImage) return;

		var objImageLeft, objImageTop;
		var containerAspectRatio = _this.controlWidth/_this.controlHeight;
		var imageAspectRatio = _this._origImageWidth/_this._origImageHeight;
		if(containerAspectRatio > imageAspectRatio){
			_this._height = _this.controlHeight;
			_this._width = imageAspectRatio*_this.controlHeight;

			objImageLeft = Math.floor((_this.controlWidth-_this._width)/2);
			objImageTop = 0;
		}else{
			_this._width = _this.controlWidth;
			_this._height = _this.controlWidth/imageAspectRatio;

			objImageLeft = 0;
			objImageTop = Math.floor((_this.controlHeight-_this._height)/2);
		}

		_this.objImage.style.position = 'absolute';
		_this.objImage.style.left = objImageLeft + 'px';
		_this.objImage.style.top = objImageTop + 'px';
		_this.objImage.style.width = _this._width + 'px';
		_this.objImage.style.height = _this._height + 'px';
	}

	//把图片加载到控件上
	ImageControl.prototype.__getImageByUrl = function () {
		var _this = this;

		var newImage = new Image();
		newImage.className = 'aryImages-item';
		newImage.setAttribute('alt', 'image');
		newImage.src = _this.imageUrl;
		newImage.onload = function () {
			_this.objImage = newImage;
			_this._origImageWidth = newImage.width;
			_this._origImageHeight = newImage.height;

			_this.divOut.innerHTML = '';
			_this.divOut.appendChild(_this.objImage);

			_this.Show();
			_this.SetVisible(true);
		};

		newImage.onerror = function (e) {
			//newImage.src = url;
		};
		return true;
	};

	MBC.ImageControl = ImageControl;

})(Alvin.MBC.Lib, Alvin.MBC);