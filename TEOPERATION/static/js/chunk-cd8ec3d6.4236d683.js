(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd8ec3d6"],{1895:function(t,e,a){},"1af6":function(t,e,a){var n=a("63b6");n(n.S,"Array",{isArray:a("9003")})},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},"5d73":function(t,e,a){t.exports=a("469f")},6070:function(t,e,a){"use strict";a.r(e);a("c5f6"),a("28a5");var n=a("6612"),r=a.n(n),o=!1;e["default"]={color:["#F63A31"],title:{text:""},tooltip:{trigger:"axis",confine:!1,padding:[16,23,18,16],textStyle:{color:"#333"},backgroundColor:"rgba(255,255,255,0.7)",extraCssText:"box-shadow: 0px 1px 6px 0px rgba(0,0,0,0.18)",formatter:function(t){o||(console.log(t[0]),o=!0);var e=t[0],a=e.axisValue,n=e.value,i=e.marker,c=a.split("月")[0],s=a.split("月")[1].slice(0,-1),l=["日","一","二","三","四","五","六"];return c=Number(c)-1,s=new Date(2020,c,s).getDay(),n=r()(n).format("0,0"),"".concat(a,"(周").concat(l[s],")<br/>").concat(i," 注册用户数：").concat(n)}},grid:{left:50,right:30,bottom:20},yAxis:{type:"value",axisTick:{show:!1},splitNumber:5,splitLine:{lineStyle:{color:"#EFEFEF"}},axisLabel:{color:"#666666"},axisLine:{lineStyle:{color:"#D9D9D9"}}},xAxis:{boundaryGap:!1,axisTick:{show:!1},axisLabel:{color:"#666666"},axisLine:{lineStyle:{color:"#D9D9D9"}},data:[]},series:{type:"line",name:"流量趋势",symbol:"circle",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fffafa"},{offset:1,color:"#ffdad8"}],global:!1}},data:[]}}},"768b":function(t,e,a){"use strict";var n=a("a745"),r=a.n(n);function o(t){if(r()(t))return t}var i=a("5d73"),c=a.n(i);function s(t,e){var a=[],n=!0,r=!1,o=void 0;try{for(var i,s=c()(t);!(n=(i=s.next()).done);n=!0)if(a.push(i.value),e&&a.length===e)break}catch(l){r=!0,o=l}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw o}}return a}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(t,e){return o(t)||s(t,e)||l()}a.d(e,"a",function(){return f})},"7d7b":function(t,e,a){var n=a("e4ae"),r=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},a745:function(t,e,a){t.exports=a("f410")},df4e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-overview"},[a("div",{staticClass:"title-bar"},[a("h3",{staticClass:"title"},[t._v("30日 | "+t._s(t.title))]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:{path:t.path}}},[t._v("查看详细数据")])],1),t._v(" "),a("div",{staticClass:"percentage-content"},[a("div",{staticClass:"user-data"},[a("div",[a("span",[t._v("注册用户占比")]),t._v(" "),a("p",{staticClass:"propotion-user"},[a("strong",[t._v(t._s(t.info.userProportion))])])]),t._v(" "),a("el-progress",{staticClass:"pie-tips",attrs:{type:"circle",width:54,percentage:t.progress,"show-text":!1,"stroke-width":10,color:t.theme.border}})],1),t._v(" "),a("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[a("div",{staticStyle:{"line-height":"1.5"},attrs:{slot:"content"},slot:"content"},[t._v("\n        环比：对比上一日数据\n        "),a("br"),t._v("同比：对比上周同一日数据\n        "),a("br"),t._v("备注：如基期为0则不计算环/同比\n      ")]),t._v(" "),a("div",[a("p",[a("span",[t._v("环比")]),t._v(" "),a("span",{class:["propotion-contrast",t.getClassName(t.info.contrast[0])]},[t._v(t._s(t._f("percentage")(t.info.contrast[0])))])]),t._v(" "),a("p",{staticStyle:{"margin-top":"20px"}},[a("span",[t._v("同比")]),t._v(" "),a("span",{class:["propotion-contrast",t.getClassName(t.info.contrast[1])]},[t._v(t._s(t._f("percentage")(t.info.contrast[1])))])])])]),t._v(" "),a("div",[a("p",[t._v(t._s(t.info.range[0])+" 过去30天")]),t._v(" "),a("el-tooltip",{attrs:{effect:"dark",placement:"bottom",content:"统计截止时间，每日更新"}},[a("p",{staticStyle:{display:"inline-block","margin-top":"20px"}},[t._v(t._s(t.info.range[1]))])])],1)],1),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"overview-chart",attrs:{id:t.id}})])},r=[],o=(a("28a5"),a("768b")),i=a("db72"),c=(a("7f7f"),a("c5f6"),a("6612")),s=a.n(c),l=a("3eba"),f=a.n(l),u=(a("ef97"),a("007d"),a("6070")),p={name:"BasicOverview",props:{id:String,title:String,path:String,theme:Object,innerWidth:Number,info:Object,columns:Object},filters:{percentage:function(t){return"--"===t?t:s()(t).format("0.00%")}},data:function(){return{chart:null,timer:!1,increase:!0,loading:!0}},computed:{range1:function(){var t=864e5,e=(new Date).getTime(),a=["日","一","二","三","四","五","六"],n=new Date(e-t),r=n.getFullYear(),o=n.getMonth()+1,i=n.getDate(),c=n.getDay(),s="".concat(r,".").concat(o,".").concat(i),l=new Date(e-30*t),f=l.getFullYear(),u=l.getMonth()+1,p=l.getDate(),d="".concat(f,".").concat(u,".").concat(p);return["".concat(d,"~").concat(s),"".concat(o,".").concat(i," (周").concat(a[c],")")]},progress:function(){var t=this.info.userProportion;return"--"===t?0:Number(t.slice(0,-1))}},methods:{getClassName:function(t){return"--"===t||"0.0000"===t?"none":t&&"-"===t.slice(0,1)?"decrease":"increase"},initChart:function(){this.loading=!0,this.chart=f.a.init(document.getElementById(this.id));var t=this.theme,e=t.name,a=t.color,n=Object(i["a"])({},u["default"],{color:a,grid:{left:70,right:45,top:20,bottom:40},tooltip:Object(i["a"])({},u["default"].tooltip,{formatter:function(t){var a=t[0],n=a.axisValue,r=a.marker,i=a.value,c=a.data,l=c.count,f=c.amount,u=n.split("-"),p=Object(o["a"])(u,3),d=p[0],v=p[1],h=p[2],b=["日","一","二","三","四","五","六"],m=new Date(d,Number(v)-1,h).getDay(),g="".concat(Number(v),"月").concat(Number(h),"日 (周").concat(b[m],")"),x=s()(i).format("0.00%"),y=s()(l).format("0,0"),_=s()(f).format("0,0"),w="".concat(r," 超级大脑总注册数: ").concat(_),C="".concat(r," ").concat(e,"总注册数: ").concat(y),D="".concat(r," 占比: ").concat(x);return"".concat(g,"<br/>").concat(w,"<br/>").concat(C,"<br>").concat(D)}}),series:[]});this.chart.setOption(n),this.columns.category&&this.columns.category.length>0&&this.renderChart()},renderChart:function(){this.loading=!0;var t=this.theme.linear,e=this.columns,a=e.category,n=e.data;this.chart.setOption({xAxis:{data:a,axisLabel:Object(i["a"])({},u["default"].axisLabel,{interval:function(t,e){return 0===t||(t+1)%5===0},formatter:function(t,e){var a=t.split("-"),n=Object(o["a"])(a,3),r=(n[0],n[1]),i=n[2];return"".concat(Number(r),"月").concat(Number(i),"日")}})},yAxis:Object(i["a"])({},u["default"].yAxis,{axisLabel:{formatter:function(t){return s()(t).format("0%")}}}),series:Object(i["a"])({},u["default"].series,{data:n,areaStyle:{color:Object(i["a"])({},u["default"].series.areaStyle.color,{colorStops:[{offset:0,color:t[0]},{offset:1,color:t[1]}]})}})}),this.loading=!1}},watch:{innerWidth:function(t){if(!this.timer){var e=this;e.timer=!0,setTimeout(function(){e.timer=!1,e.chart.resize()},200)}},columns:function(t){this.renderChart()}},mounted:function(){this.initChart()}},d=p,v=(a("f69a"),a("2877")),h=Object(v["a"])(d,n,r,!1,null,"2b35b966",null);e["default"]=h.exports},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray},f69a:function(t,e,a){"use strict";var n=a("1895"),r=a.n(n);r.a}}]);