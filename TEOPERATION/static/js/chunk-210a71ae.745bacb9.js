(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-210a71ae","chunk-3ac8d60a"],{"0eab":function(t,e,a){},6070:function(t,e,a){"use strict";a.r(e);a("c5f6"),a("28a5");var r=a("6612"),i=a.n(r),n=!1;e["default"]={color:["#F63A31"],title:{text:""},tooltip:{trigger:"axis",confine:!1,padding:[16,23,18,16],textStyle:{color:"#333"},backgroundColor:"rgba(255,255,255,0.7)",extraCssText:"box-shadow: 0px 1px 6px 0px rgba(0,0,0,0.18)",formatter:function(t){n||(console.log(t[0]),n=!0);var e=t[0],a=e.axisValue,r=e.value,o=e.marker,s=a.split("月")[0],l=a.split("月")[1].slice(0,-1),c=["日","一","二","三","四","五","六"];return s=Number(s)-1,l=new Date(2020,s,l).getDay(),r=i()(r).format("0,0"),"".concat(a,"(周").concat(c[l],")<br/>").concat(o," 注册用户数：").concat(r)}},grid:{left:50,right:30,bottom:20},yAxis:{type:"value",axisTick:{show:!1},splitNumber:5,splitLine:{lineStyle:{color:"#EFEFEF"}},axisLabel:{color:"#666666"},axisLine:{lineStyle:{color:"#D9D9D9"}}},xAxis:{boundaryGap:!1,axisTick:{show:!1},axisLabel:{color:"#666666"},axisLine:{lineStyle:{color:"#D9D9D9"}},data:[]},series:{type:"line",name:"流量趋势",symbol:"circle",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#fffafa"},{offset:1,color:"#ffdad8"}],global:!1}},data:[]}}},8714:function(t,e,a){"use strict";var r=a("0eab"),i=a.n(r);i.a},"941e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BasicDataDetail",{attrs:{"product-data":t.wallet}})},i=[],n=a("9eea"),o={name:"WalletBasicDataDetail",components:{BasicDataDetail:n["default"]},data:function(){return{wallet:{titleList:[{prop:"totalMerchantApply",label:"申请商户总数"},{prop:"totalRegister",label:"总注册数"},{prop:"totalCheck",label:"总实名数"},{prop:"totalAuth",label:"总开户绑卡数"},{prop:"totalAccount",label:"开户总数"},{prop:"totalPv",label:"浏览量(PV)"}],columns:[{prop:"date",label:"日期"},{prop:"merchantApplyNumber",label:"申请商户数"},{prop:"registerAmount",label:"注册数"},{prop:"checkNumber",label:"实名数"},{prop:"authNumber",label:"开户绑卡数"},{prop:"accountNumber",label:"开户数"},{prop:"accessNumber",label:"浏览量(PV)"}],productCode:"10003",color:["#45A2FF"],linear:["#D3E9FF","#FDFEFF"]}}}},s=o,l=a("2877"),c=Object(l["a"])(s,r,i,!1,null,null,null);e["default"]=c.exports},"9eea":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"asset-view"},[a("div",{staticClass:"asset-data"},[a("el-dropdown",{staticClass:"menu",attrs:{trigger:"click"},on:{command:t.onTitleChange}},[a("el-button",{staticClass:"menu-button",attrs:{type:"default"}},[t._v(t._s(t.selectedItem.label))]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.titleList,function(e){return a("el-dropdown-item",{key:e.prop,attrs:{command:e}},[t._v(t._s(e.label))])}),1)],1),t._v(" "),a("el-date-picker",{staticClass:"datepicker",attrs:{type:"daterange","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期","unlink-panels":!0,clearable:!1,"picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd"},on:{change:t.onTimeChange},model:{value:t.range,callback:function(e){t.range=e},expression:"range"}}),t._v(" "),a("div",{staticClass:"placeholder-ele"}),t._v(" "),a("h3",{staticClass:"amount"},[t._v(t._s(t.selectedItem.label)+": "+t._s(t._f("filterAmount")(t.currentItemAmount)))]),t._v(" "),a("span",{staticClass:"tips"},[t._v("更新至昨日")])],1),t._v(" "),a("div",{staticClass:"chart-data"},[a("div",{staticClass:"chart-title"},[a("h4",[t._v(t._s(t.selectedItem.label))])]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.chartLoading,expression:"chartLoading"}],staticClass:"chart-content",attrs:{id:"basicAssetChart"}})]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],staticClass:"table-data"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"tooltip-effect":"light","header-cell-style":{background:"#f5f5f5",color:"#333"},"summary-method":t.onSummaryMethod,"show-summary":""}},t._l(t.columns,function(e,r){return a("el-table-column",{key:r,attrs:{prop:e["prop"],label:e["label"],width:e["width"],"min-width":e["minWidth"],"show-overflow-tooltip":e["showOverflowTooltip"]},scopedSlots:t._u([{key:"default",fn:function(a){return[t._v(t._s("date"===e["prop"]?a.row[e["prop"]]+" ("+t.getDayOfWeek(a.row.date)+")":t.getFormatNumber(a.row[e["prop"]])))]}}],null,!0)})}),1),t._v(" "),a("DataPagination",{attrs:{"pagination-data":t.paginationData,"page-sizes":t.pageSizes},on:{"update:paginationData":function(e){t.paginationData=e},"update:pagination-data":function(e){t.paginationData=e},resetData:t.resetData}})],1)])},i=[],n=a("db72"),o=(a("c5f6"),a("28a5"),a("ac6a"),a("96cf"),a("3b8d")),s=a("313e"),l=a.n(s),c=a("6070"),u=a("6612"),p=a.n(u),d=!1,h={name:"BasicDataDetail",props:{productData:{type:Object,default:function(){return{titleList:[],columns:[]}}}},data:function(){return{currentYear:"2020",selectedItem:"",currentItemAmount:"",titleList:[],columns:[],chart:null,timer:!1,chartLoading:!1,tableLoading:!1,paginationData:{pageIndex:1,pageSize:10,dataCount:0},pageSizes:[10,15,20,31],oriYesterdayData:[],oriEvaluationData:[],list:[],chartData:{category:[],data:[]},arr:["flashPay","wallet","loan"],range:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近两周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-12096e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}}]}}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.range=this.getLastWeek(),this.titleList=this.productData["titleList"],this.columns=this.productData["columns"],this.titleList.forEach(function(t){t.prop===e.$route.query.item&&(e.selectedItem=t)}),t.next=6,this.getEvaluationData();case 6:return t.next=8,this.getYesterdayData();case 8:window.addEventListener("resize",this.onResize);case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{getYesterdayData:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this.productData.productCode,this.$api.analysis.getYesterdayData({productCode:e}).then(function(t){a.oriYesterdayData=t.data?t.data[0]:[],a.currentItemAmount=a.oriYesterdayData[a.selectedItem.prop]}).catch(function(t){a.$message.error(t.message)});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getEvaluationData:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.tableLoading=!0,e=this.productData.productCode,this.$api.analysis.getBaseData({productCode:e,startDate:this.range[0],endDate:this.range[1]}).then(function(t){a.splitResponseData(t.data||[]),a.tableLoading=!1}).catch(function(t){a.tableLoading=!1,a.$message.error(t.message)});case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),splitResponseData:function(t){var e=this;this.oriEvaluationData=[],t.forEach(function(t){var a=JSON.parse(t.content);e.oriEvaluationData.push(a.report)}),this.selectTableData(this.oriEvaluationData),this.selectChartData(this.oriEvaluationData)},selectTableData:function(t){var e=this,a=[],r=this.paginationData;r.dataCount=t.length,t.forEach(function(t,i){var n=(r.pageIndex-1)*r.pageSize-1<i&&r.pageIndex*r.pageSize>i;if(n){var o={};e.columns.forEach(function(e){o[e.prop]=t[e.prop]}),a.push(o)}}),this.list=a},selectChartData:function(t){var e=this;t.length<1||(this.chartData.category=[],this.chartData.data=[],this.currentYear=t[0].date.split("-")[0],t.forEach(function(t){var a=t.date.split("-");e.chartData.category.push(a[1]+"月"+a[2]+"日"),e.chartData.data.push(t[e.selectedItem.prop])}),this.initChart())},getLastWeek:function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),[this.$lib.formatYMDDate(e),this.$lib.formatYMDDate(t)]},getDayOfWeek:function(t){var e=t.split("-"),a=["日","一","二","三","四","五","六"],r=new Date(e[0],e[1]-1,e[2]).getDay();return"周"+a[r]},getFormatNumber:function(t){return p()(t).format("0,0")},onTitleChange:function(t){console.log("onTitleChange",t),this.selectedItem=t,this.currentItemAmount=this.oriYesterdayData[this.selectedItem.prop],this.selectChartData(this.oriEvaluationData)},onTimeChange:function(){console.log(this.range,"range-1");var t=new Date(this.range[1]).getTime()-new Date(this.range[0]).getTime();if(t/3600/1e3/24>183){var e=new Date(this.range[1]),a=new Date(e.setTime(e.getTime()-158112e5)),r=a.getFullYear()+"-"+Number(a.getMonth()+1)+"-"+a.getDate();this.range=[r,this.range[1]]}console.log(this.range,"range-2"),this.getEvaluationData()},initChart:function(){var t=this;this.chartLoading=!0,this.chart=l.a.init(document.getElementById("basicAssetChart"));var e={color:this.productData.color,title:{text:""},grid:Object(n["a"])({},c["default"].grid,{left:80,right:50,bottom:50}),xAxis:Object(n["a"])({},c["default"].xAxis,{data:this.chartData["category"]}),series:Object(n["a"])({},c["default"].series,{name:this.selectedItem.label,data:this.chartData["data"],areaStyle:{color:Object(n["a"])({},c["default"].series.areaStyle.color,{colorStops:[{offset:0,color:this.productData.linear[0]},{offset:1,color:this.productData.linear[1]}]})}}),tooltip:Object(n["a"])({},c["default"].tooltip,{formatter:function(e){d||(console.log(e[0]),d=!0);var a=e[0],r=a.axisValue,i=a.value,n=a.marker,o=r.split("月")[0],s=r.split("月")[1].slice(0,-1),l=["日","一","二","三","四","五","六"];return o=Number(o)-1,s=new Date(t.currentYear,o,s).getDay(),i=t.getFormatNumber(i),"".concat(r,"(周").concat(l[s],")<br/>").concat(n," ").concat(t.selectedItem.label,"：").concat(i)}})};this.chart.setOption(Object(n["a"])({},c["default"],{},e));var a=this;setTimeout(function(){a.chartLoading=!1},250)},onSummaryMethod:function(t){var e=this,a=t.columns,r=t.data,i=[];return a.forEach(function(t,a){if(0!==a){var n=r.map(function(e){return Number(e[t.property])});n.every(function(t){return isNaN(t)})?i[a]="":(i[a]=n.reduce(function(t,e){return t+e},0),i[a]=e.getFormatNumber(i[a]))}else i[a]="合计"}),i},onResize:function(){if(!this.timer){var t=this;t.timer=!0,setTimeout(function(){t.timer=!1,t.chart.resize()},200)}},resetData:function(){var t=this;this.tableLoading=!0,this.selectTableData(this.oriEvaluationData),setTimeout(function(){t.tableLoading=!1},250)}}},m=h,f=(a("e36b"),a("8714"),a("2877")),g=Object(f["a"])(m,r,i,!1,null,"1885ce9c",null);e["default"]=g.exports},e36b:function(t,e,a){"use strict";var r=a("ec92"),i=a.n(r);i.a},ec92:function(t,e,a){}}]);