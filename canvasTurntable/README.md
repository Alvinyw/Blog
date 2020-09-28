# canvasTurntable：用 Canvas 根据传入的数据绘制转盘

## 一、通过 Node 引用

```javascript
npm i alvin-canvasturntable
```

在 VUE 的 SPA 中的使用示例：

```html
<template>
  <div id="main">
    <div id="canvasTurntable"></div>
  </div>
</template>
<script>
import createCanvasTurntable from "alvin-canvasturntable";
export default {
  name: "CanvasTurntable",
  data() {
    return {
      tooltip: "",
    };
  },
  mounted() {
    var cfg = {
      targetNodeId: "canvasTurntable",
      sectorText: ["张某某", "李某某", "王某某", "韩某某", "廖某某", "赵某某"],
      rotateTime: 3,
    };
    this.tooltip = createCanvasTurntable(cfg);
  },
};
</script>
```

## 二、通过 script 脚本引入
```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="js/CanvasTurntable.js"></script>
<div id="CanvasTurntable" style="width:400px; margin:60px auto"></div>
```
引入上面两个文件之后，即可调用该插件了：
```javascript
$("#CanvasTurntable").AddCanvasTurntable({
    sectorText: ["张某某", "李某某", "王某某", "韩某某", "廖某某", "赵某某"],
    rotateTime: 3,
});
```

## 三、插件可供设置的参数及参数的默认值

```javascript
$(targetNode).easyTooltip({
    targetNodeId: "CanvasTurntable", /*转盘最外层容器的 ID*/
    /********** 标签属性设置 **********/
    sectorText: '', /* 扇形的文本值，应设置成数组形式 */
    colors: ["#e9536a","#fbd7a1","#df6679","#000","#fff","#666"], /* 插件用到的颜色，应设置成数组形式 */
    //转盘用到的颜色: [扇形颜色一，扇形颜色二，扇形颜色三，扇形字体颜色，指针字体颜色，指针和边框颜色]
	//当 sectorText.length 为奇数时，最后一块扇形的背景色为颜色三
    rotateTime: '', /* 转盘旋转一次的时间，单位 s，默认是 6s */
    alertText: '', /* 全部选中之后的弹框内容 */
    resultTitle: '' /* result 描述 */
});
```

## 四、示例

[Demo](https://alvinyw.github.io/Blog/canvasTurntable/index.html)