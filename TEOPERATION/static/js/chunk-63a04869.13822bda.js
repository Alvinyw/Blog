(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63a04869","chunk-2d208322","chunk-cd8ec3d6","chunk-00c95059"],{1895:function(t,e,a){},"1ade":function(t,e,a){},"1af6":function(t,e,a){var n=a("63b6");n(n.S,"Array",{isArray:a("9003")})},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},"535d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-footer"},[a("el-date-picker",{class:"cellClassName",attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions},on:{blur:t.onBlur},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}}),t._v(" "),a("div",{staticClass:"download-button"},[a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.onDownload}},[t._v("下载报表")])],1)],1)},r=[],i={name:"ButtonFooter",props:{loading:Boolean},data:function(){return{range:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近两周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-12096e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近两个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-5184e6),t.$emit("pick",[a,e])}},{text:"上线至今",onClick:function(t){var e=new Date,a=new Date(2019,8,15);a.setTime(a.getTime()),t.$emit("pick",[a,e])}}]}}},mounted:function(){var t=new Date,e=this.formatTime(t),a=new Date(t-2592e6),n=this.formatTime(a);this.range=[n,e],console.log(this.range,"range")},methods:{onDownload:function(){document.getElementsByClassName("cellClassName")[0].click(),this.$emit("onDownload")},onBlur:function(){this.$emit("onPickerChange",this.range)},formatTime:function(t){var e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return a=a<10?"0".concat(a):a,n=n<10?"0".concat(n):n,"".concat(e,"-").concat(a,"-").concat(n)}}},o=i,s=(a("e625"),a("2877")),c=Object(s["a"])(o,n,r,!1,null,"eebbf28e",null);e["default"]=c.exports},"5d73":function(t,e,a){t.exports=a("469f")},6070:function(t,e,a){"use strict";a.r(e);a("c5f6"),a("28a5");var n=a("6612"),r=a.n(n),i=!1;e["default"]={color:["#F63A31"],title:{text:""},tooltip:{trigger:"axis",confine:!1,padding:[16,23,18,16],textStyle:{color:"#333"},backgroundColor:"rgba(255,255,255,0.7)",extraCssText:"box-shadow: 0px 1px 6px 0px rgba(0,0,0,0.18)",formatter:function(t){i||(console.log(t[0]),i=!0);var e=t[0],a=e.axisValue,n=e.value,o=e.marker,s=a.split("月")[0],c=a.split("月")[1].slice(0,-1),l=["日","一","二","三","四","五","六"];return s=Number(s)-1,c=new Date(2020,s,c).getDay(),n=r()(n).format("0,0"),"".concat(a,"(周").concat(l[c],")<br/>").concat(o," 注册用户数：").concat(n)}},grid:{left:50,right:30,bottom:20},yAxis:{type:"value",axisTick:{show:!1},splitNumber:5,splitLine:{lineStyle:{color:"#EFEFEF"}},axisLabel:{color:"#666666"},axisLine:{lineStyle:{color:"#D9D9D9"}}},xAxis:{boundaryGap:!1,axisTick:{show:!1},axisLabel:{color:"#666666"},axisLine:{lineStyle:{color:"#D9D9D9"}},data:[]},series:{type:"line",name:"流量趋势",symbol:"circle",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fffafa"},{offset:1,color:"#ffdad8"}],global:!1}},data:[]}}},7659:function(t,e,a){"use strict";var n=a("a3a2"),r=a.n(n);r.a},"768b":function(t,e,a){"use strict";var n=a("a745"),r=a.n(n);function i(t){if(r()(t))return t}var o=a("5d73"),s=a.n(o);function c(t,e){var a=[],n=!0,r=!1,i=void 0;try{for(var o,c=s()(t);!(n=(o=c.next()).done);n=!0)if(a.push(o.value),e&&a.length===e)break}catch(l){r=!0,i=l}finally{try{n||null==c["return"]||c["return"]()}finally{if(r)throw i}}return a}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){return i(t)||c(t,e)||l()}a.d(e,"a",function(){return u})},"7d7b":function(t,e,a){var n=a("e4ae"),r=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},a3a2:function(t,e,a){},a481:function(t,e,a){"use strict";var n=a("cb7c"),r=a("4bf8"),i=a("9def"),o=a("4588"),s=a("0390"),c=a("5f1b"),l=Math.max,u=Math.min,h=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,function(t,e,a,m){return[function(n,r){var i=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,r):a.call(String(i),n,r)},function(t,e){var r=m(a,t,this,e);if(r.done)return r.value;var h=n(t),d=String(this),f="function"===typeof e;f||(e=String(e));var v=h.global;if(v){var b=h.unicode;h.lastIndex=0}var y=[];while(1){var w=c(h,d);if(null===w)break;if(y.push(w),!v)break;var x=String(w[0]);""===x&&(h.lastIndex=s(d,i(h.lastIndex),b))}for(var C="",D=0,k=0;k<y.length;k++){w=y[k];for(var _=String(w[0]),F=l(u(o(w.index),d.length),0),O=[],T=1;T<w.length;T++)O.push(g(w[T]));var R=w.groups;if(f){var A=[_].concat(O,F,d);void 0!==R&&A.push(R);var N=String(e.apply(void 0,A))}else N=p(_,d,F,O,R,e);F>=D&&(C+=d.slice(D,F)+N,D=F+_.length)}return C+d.slice(D)}];function p(t,e,n,i,o,s){var c=n+t.length,l=i.length,u=f;return void 0!==o&&(o=r(o),u=d),a.call(s,u,function(a,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(c);case"<":s=o[r.slice(1,-1)];break;default:var u=+r;if(0===u)return a;if(u>l){var d=h(u/10);return 0===d?a:d<=l?void 0===i[d-1]?r.charAt(1):i[d-1]+r.charAt(1):a}s=i[u-1]}return void 0===s?"":s})}})},a745:function(t,e,a){t.exports=a("f410")},df4e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-overview"},[a("div",{staticClass:"title-bar"},[a("h3",{staticClass:"title"},[t._v("30日 | "+t._s(t.title))]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:{path:t.path}}},[t._v("查看详细数据")])],1),t._v(" "),a("div",{staticClass:"percentage-content"},[a("div",{staticClass:"user-data"},[a("div",[a("span",[t._v("注册用户占比")]),t._v(" "),a("p",{staticClass:"propotion-user"},[a("strong",[t._v(t._s(t.info.userProportion))])])]),t._v(" "),a("el-progress",{staticClass:"pie-tips",attrs:{type:"circle",width:54,percentage:t.progress,"show-text":!1,"stroke-width":10,color:t.theme.border}})],1),t._v(" "),a("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[a("div",{staticStyle:{"line-height":"1.5"},attrs:{slot:"content"},slot:"content"},[t._v("\n        环比：对比上一日数据\n        "),a("br"),t._v("同比：对比上周同一日数据\n        "),a("br"),t._v("备注：如基期为0则不计算环/同比\n      ")]),t._v(" "),a("div",[a("p",[a("span",[t._v("环比")]),t._v(" "),a("span",{class:["propotion-contrast",t.getClassName(t.info.contrast[0])]},[t._v(t._s(t._f("percentage")(t.info.contrast[0])))])]),t._v(" "),a("p",{staticStyle:{"margin-top":"20px"}},[a("span",[t._v("同比")]),t._v(" "),a("span",{class:["propotion-contrast",t.getClassName(t.info.contrast[1])]},[t._v(t._s(t._f("percentage")(t.info.contrast[1])))])])])]),t._v(" "),a("div",[a("p",[t._v(t._s(t.info.range[0])+" 过去30天")]),t._v(" "),a("el-tooltip",{attrs:{effect:"dark",placement:"bottom",content:"统计截止时间，每日更新"}},[a("p",{staticStyle:{display:"inline-block","margin-top":"20px"}},[t._v(t._s(t.info.range[1]))])])],1)],1),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"overview-chart",attrs:{id:t.id}})])},r=[],i=(a("28a5"),a("768b")),o=a("db72"),s=(a("7f7f"),a("c5f6"),a("6612")),c=a.n(s),l=a("3eba"),u=a.n(l),h=(a("ef97"),a("007d"),a("6070")),d={name:"BasicOverview",props:{id:String,title:String,path:String,theme:Object,innerWidth:Number,info:Object,columns:Object},filters:{percentage:function(t){return"--"===t?t:c()(t).format("0.00%")}},data:function(){return{chart:null,timer:!1,increase:!0,loading:!0}},computed:{range1:function(){var t=864e5,e=(new Date).getTime(),a=["日","一","二","三","四","五","六"],n=new Date(e-t),r=n.getFullYear(),i=n.getMonth()+1,o=n.getDate(),s=n.getDay(),c="".concat(r,".").concat(i,".").concat(o),l=new Date(e-30*t),u=l.getFullYear(),h=l.getMonth()+1,d=l.getDate(),f="".concat(u,".").concat(h,".").concat(d);return["".concat(f,"~").concat(c),"".concat(i,".").concat(o," (周").concat(a[s],")")]},progress:function(){var t=this.info.userProportion;return"--"===t?0:Number(t.slice(0,-1))}},methods:{getClassName:function(t){return"--"===t||"0.0000"===t?"none":t&&"-"===t.slice(0,1)?"decrease":"increase"},initChart:function(){this.loading=!0,this.chart=u.a.init(document.getElementById(this.id));var t=this.theme,e=t.name,a=t.color,n=Object(o["a"])({},h["default"],{color:a,grid:{left:70,right:45,top:20,bottom:40},tooltip:Object(o["a"])({},h["default"].tooltip,{formatter:function(t){var a=t[0],n=a.axisValue,r=a.marker,o=a.value,s=a.data,l=s.count,u=s.amount,h=n.split("-"),d=Object(i["a"])(h,3),f=d[0],g=d[1],m=d[2],p=["日","一","二","三","四","五","六"],v=new Date(f,Number(g)-1,m).getDay(),b="".concat(Number(g),"月").concat(Number(m),"日 (周").concat(p[v],")"),y=c()(o).format("0.00%"),w=c()(l).format("0,0"),x=c()(u).format("0,0"),C="".concat(r," 超级大脑总注册数: ").concat(x),D="".concat(r," ").concat(e,"总注册数: ").concat(w),k="".concat(r," 占比: ").concat(y);return"".concat(b,"<br/>").concat(C,"<br/>").concat(D,"<br>").concat(k)}}),series:[]});this.chart.setOption(n),this.columns.category&&this.columns.category.length>0&&this.renderChart()},renderChart:function(){this.loading=!0;var t=this.theme.linear,e=this.columns,a=e.category,n=e.data;this.chart.setOption({xAxis:{data:a,axisLabel:Object(o["a"])({},h["default"].axisLabel,{interval:function(t,e){return 0===t||(t+1)%5===0},formatter:function(t,e){var a=t.split("-"),n=Object(i["a"])(a,3),r=(n[0],n[1]),o=n[2];return"".concat(Number(r),"月").concat(Number(o),"日")}})},yAxis:Object(o["a"])({},h["default"].yAxis,{axisLabel:{formatter:function(t){return c()(t).format("0%")}}}),series:Object(o["a"])({},h["default"].series,{data:n,areaStyle:{color:Object(o["a"])({},h["default"].series.areaStyle.color,{colorStops:[{offset:0,color:t[0]},{offset:1,color:t[1]}]})}})}),this.loading=!1}},watch:{innerWidth:function(t){if(!this.timer){var e=this;e.timer=!0,setTimeout(function(){e.timer=!1,e.chart.resize()},200)}},columns:function(t){this.renderChart()}},mounted:function(){this.initChart()}},f=d,g=(a("f69a"),a("2877")),m=Object(g["a"])(f,n,r,!1,null,"2b35b966",null);e["default"]=m.exports},e625:function(t,e,a){"use strict";var n=a("1ade"),r=a.n(n);r.a},eddb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.pageLoading,expression:"pageLoading"}],staticClass:"analysis-index"},[a("div",{staticClass:"basic-content"},[a("ul",{staticClass:"basic-left"},t._l(t.basicData,function(e,n){return a("li",{key:n,staticClass:"basic-item"},[a("div",{staticClass:"amount-data"},[a("h3",{staticClass:"amount"},[t._v(t._s(t._f("filterAmount")(t.teData[e["amount"]])))]),t._v(" "),a("p",[t._v(t._s(e["name"]))])]),t._v(" "),a("div",{staticClass:"increase-data"},[a("span",[t._v("昨日新增")]),t._v(" "),a("strong",[t._v(t._s(t._f("filterAmount")(t.teData[e["increase"]])))])])])}),0),t._v(" "),a("div",{staticClass:"basic-right"},[a("div",{staticClass:"title-bar"},[a("h3",{staticClass:"chart-title"},[t._v("流量趋势")]),t._v(" "),a("div",{staticClass:"filters"},t._l(t.filters,function(e,n){return a("span",{key:n,class:["filter-item",t.activeFilter===e["value"]?"active":""],on:{click:function(a){return t.onFilter(e)}}},[t._v(t._s(e["name"]))])}),0)]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.chartLoading,expression:"chartLoading"}],staticClass:"basic-chart"},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"basicLineChart"}})])])]),t._v(" "),a("div",{staticClass:"product-content"},[a("BasicOverview",{attrs:{id:"flashPayMiniChart",title:"玖富闪付注册用户占比",path:"/analysis/flashPay/index",theme:t.theme["flashPay"],info:t.flashPayInfo,columns:t.flashPayColumns,"inner-width":t.innerWidth}}),t._v(" "),a("BasicOverview",{attrs:{id:"walletMiniChart",title:"玖富农银卡注册用户占比",path:"/analysis/wallet/index",theme:t.theme["wallet"],info:t.walletInfo,columns:t.walletColumns,"inner-width":t.innerWidth}}),t._v(" "),a("BasicOverview",{attrs:{id:"loanMiniChart",title:"小微生意金注册用户占比",path:"/analysis/loan/index",theme:t.theme["loan"],info:t.loanInfo,columns:t.loanColumns,"inner-width":t.innerWidth}})],1),t._v(" "),a("ButtonFooter",{attrs:{loading:t.downLoading},on:{onDownload:t.onDownload,onPickerChange:t.onPickerChange}})],1)},r=[],i=(a("ac6a"),a("456d"),a("7514"),a("7f7f"),a("a481"),a("96cf"),a("3b8d")),o=a("db72"),s=(a("c5f6"),a("28a5"),a("768b")),c=(a("96eb"),a("6612")),l=a.n(c),u=a("3eba"),h=a.n(u),d=(a("ef97"),a("d28f"),a("007d"),a("6070")),f=a("535d"),g=a("df4e"),m=function(t){var e=t.split("-"),a=Object(s["a"])(e,3),n=a[0],r=a[1],i=a[2],o=["日","一","二","三","四","五","六"],c=new Date(n,Number(r)-1,i).getDay();return"".concat(Number(r),"月").concat(Number(i),"日 (周").concat(o[c],")")},p={name:"AnalysisIndex",components:{ButtonFooter:f["default"],BasicOverview:g["default"]},data:function(){return{chart:null,timer:!1,pageLoading:!0,downLoading:!1,chartLoading:!0,innerWidth:0,teData:{teTotalCheck:"",teTotalRegister:"",teYesterdayCheck:"",teYesterdayRegister:""},basicData:{register:{name:"注册数总数",amount:"teTotalRegister",increase:"teYesterdayRegister"},realname:{name:"实名总数",amount:"teTotalCheck",increase:"teYesterdayCheck"}},activeFilter:"1",filters:[{name:"近一周",value:"1"},{name:"近两周",value:"2"},{name:"近一月",value:"3"}],excelData:{date:"日期",teTotalRegister:"注册数总数",teRegisterAmount:"注册数当日新增",teTotalCheck:"实名数总数",teCheckNumber:"实名数当日新增",flashPayRegisterRate:"闪付注册数占比",walletRegisterRate:"农银卡注册数占比",loanRegisterRate:"小微生意经注册数占比"},loanInfo:{userProportion:"",contrast:[],range:[]},walletInfo:{userProportion:"",contrast:[],range:[]},flashPayInfo:{userProportion:"",contrast:[],range:[]},loanColumns:{category:[],data:[]},walletColumns:{category:[],data:[]},flashPayColumns:{category:[],data:[]},theme:{flashPay:{name:"玖富闪付",color:"#975FE4",border:["#F4EFFC","#975FE4"],linear:["#EBDCFF","#FCFAFF"]},wallet:{name:"玖富农银卡",color:"#45A2FF",border:["#EDF6FF","#45A2FF"],linear:["#D3E9FF","#FDFEFF"]},loan:{name:"小微生意金",color:"#13C2C2",border:["#E7F9F9","#13C2C2"],linear:["#D3F8F8","#F6FFFF"]}},options:Object(o["a"])({},d["default"],{legend:{show:!0},color:["#FC6A5F","#FFA533"],tooltip:Object(o["a"])({},d["default"].tooltip,{formatter:function(t){if(1===t.length){var e=t[0],a=e.axisValue,n=e.value,r=e.marker,i=e.seriesName;return a=m(a),n=l()(n).format("0,0"),"".concat(a,"<br/>").concat(r," ").concat(i,": ").concat(n)}var o=t[0],s=o.axisValue,c=o.value,u=o.marker,h=o.seriesName,d=t[1],f=d.value,g=d.marker,p=d.seriesName,v=m(s);c=l()(c).format("0,0"),f=l()(f).format("0,0");var b="".concat(u," ").concat(h,": ").concat(c),y="".concat(g," ").concat(p,": ").concat(f);return"".concat(v,"<br/>").concat(b,"<br/>").concat(y)}}),series:[]})}},mounted:function(){this.fetchData(),window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{getFormatDate:function(t){var e=new Date(t),a=e.getDate(),n=e.getMonth()+1,r=e.getFullYear();return a=a<10?"0".concat(a):a,n=n<10?"0".concat(n):n,"".concat(r,"-").concat(n,"-").concat(a)},getTrendData:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r,i,o,s,c,l,u,h;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=[0,6,13,29],a=(new Date).getTime()-864e5,n=a-864e5*e[this.activeFilter],r=this.getFormatDate(n),i=this.getFormatDate(a),o={startDate:r,endDate:i},t.next=9,this.$api.analysis.getAnalysisIndexTrend(o);case 9:return s=t.sent,console.log(s),c=s["data"],l=[],u=[],h=[],Array.isArray(c)&&c.length>0&&c.map(function(t){var e=t.date,a=t.teTotalCheck,n=t.teTotalRegister;l.push(e),u.push(a),h.push(n)}),t.abrupt("return",{category:l,teTotalCheckData:u,teTotalRegisterData:h});case 19:t.prev=19,t.t0=t["catch"](0),this.$message.error(t.t0.message);case 22:case"end":return t.stop()}},t,this,[[0,19]])}));function e(){return t.apply(this,arguments)}return e}(),getColumns:function(t){var e=[],a=[];return!Array.isArray(t)||t.length<1?{category:a,data:e}:(t.map(function(t){var n=t.reportDate,r=t.content,i=JSON.parse(r),o=i.report,s=o.teTotalRegister,c=o.totalRegister;s=Number(s),a.push(n),e.push({value:s>0?Number(c)/s:0,amount:s,count:c})}),{category:a,data:e})},getProductInfo:function(t){var e=t.records,a=t.dayOnDay,n=t.weekOnWeek;console.log("getProductInfo",a);var r=["--","--"],i="--",o=this.teData["teTotalRegister"];if(e&&e.length>0&&0!==Number(o)){var s=e[e.length-1],c=JSON.parse(s.content).report.totalRegister,u=Number(c)/o;i=l()(u).format("0.00%"),r=[e[0]["reportDate"].replace(/-/g,".")||"--",s["reportDate"].replace(/-/g,".")||"--"]}return{userProportion:i,contrast:[a||"--",n||"--"],range:r}},getAnalysisData:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r,i,o,s,c,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.pageLoading=!0,t.next=4,this.$api.analysis.getAnalysisIndexData();case 4:if(e=t.sent,this.pageLoading=!1,"200"===e["code"]){t.next=9;break}return this.$message.error(e.message),t.abrupt("return",!1);case 9:a=e["data"][0],n=a.teTotalCheck,r=a.teTotalRegister,i=a.teYesterdayCheck,o=a.teYesterdayRegister,s=a.flashPayData,c=a.walletData,l=a.loanData,this.teData["teTotalCheck"]=n,this.teData["teTotalRegister"]=r,this.teData["teYesterdayCheck"]=i,this.teData["teYesterdayRegister"]=o,this.loanColumns=this.getColumns(l.records),this.walletColumns=this.getColumns(c.records),this.flashPayColumns=this.getColumns(s.records),this.loanInfo=this.getProductInfo(l),this.walletInfo=this.getProductInfo(c),this.flashPayInfo=this.getProductInfo(s),t.next=27;break;case 22:return t.prev=22,t.t0=t["catch"](0),this.pageLoading=!1,this.$message.error(t.t0.message),t.abrupt("return",!1);case 27:case"end":return t.stop()}},t,this,[[0,22]])}));function e(){return t.apply(this,arguments)}return e}(),initChart:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this,this.chartLoading=!0,this.chart||(console.log("init[echarts]"),this.chart=h.a.init(document.getElementById("basicLineChart"))),this.chart.clear(),this.chart.setOption(this.options),this.chart.on("legendselectchanged",function(t){var a=t.name,n=t.selected,r=Object.keys(n).find(function(t){return n[t]});"undefined"!==typeof r||e.chart.dispatchAction({type:"legendSelect",name:a})}),this.renderChart();case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),renderChart:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.chartLoading=!0,t.next=3,this.getTrendData();case 3:e=t.sent,a=e.category,n=e.teTotalCheckData,r=e.teTotalRegisterData,i=a.length,this.chart.setOption({xAxis:{data:a,axisLabel:Object(o["a"])({},d["default"].axisLabel,{interval:function(t,e){return i<8||(i<15?t%2===0:31===i?t%5===0:0===t||(t+1)%5===0)},formatter:function(t,e){var a=t.split("-"),n=Object(s["a"])(a,3),r=(n[0],n[1]),i=n[2];return"".concat(Number(r),"月").concat(Number(i),"日")}})},series:[Object(o["a"])({},d["default"].series,{name:"注册用户数",data:r}),Object(o["a"])({},d["default"].series,{name:"实名用户数",data:n,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#FDEAD3"},{offset:1,color:"#FFFFFF"}],global:!1}}})]}),this.chartLoading=!1;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onResize:function(){var t=this;this.timer||(this.timer=!0,setTimeout(function(){t.timer=!1,t.chart.resize(),t.innerWidth=window.innerWidth},200))},onFilter:function(t){var e=t.value;console.log("onFilter",e),this.activeFilter=e,this.renderChart()},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})},onDownload:function(){console.log("onDownload")},onPickerChange:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,r,i,o,c,l,u,h=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("onPickerChange [index]",e),n=[],r=[],Object.keys(this.excelData).map(function(t){r.push(t),n.push(h.excelData[t])}),console.log(n,r),this.downLoading=!0,i=Object(s["a"])(e,2),o=i[0],c=i[1],l={startDate:o,endDate:c},t.next=10,this.$api.analysis.getAnalysisIndexTrend(l);case 10:u=t.sent,console.log(u),Promise.all([a.e("chunk-3d09e383"),a.e("chunk-58293907")]).then(a.bind(null,"4bf8d")).then(function(t){t.export_json_to_excel({header:n,data:h.formatJson(r,u["data"]),filename:"exportExcel",autoWidth:!0,bookType:"xlsx"}),h.downLoading=!1});case 13:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),fetchData:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.initChart(),this.getAnalysisData();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},v=p,b=(a("7659"),a("2877")),y=Object(b["a"])(v,n,r,!1,null,"3ed5e480",null);e["default"]=y.exports},f410:function(t,e,a){a("1af6"),t.exports=a("584a").Array.isArray},f69a:function(t,e,a){"use strict";var n=a("1895"),r=a.n(n);r.a}}]);