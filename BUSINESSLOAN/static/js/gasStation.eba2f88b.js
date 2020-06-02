(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gasStation"],{"0c18":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gs-header"},[n("van-nav-bar",{attrs:{title:"小微加油站",fixed:!0,"z-index":2,"left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),n("div",{staticClass:"nav-line"}),n("van-tabs",{staticClass:"default-tabs",attrs:{"line-width":20,"title-active-color":"#fe7069"},on:{click:t.onClickTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.list,(function(t){return n("van-tab",{key:t["name"],attrs:{name:t["name"],title:t["title"]}})})),1)],1)},s=[],o=(n("b0c0"),{name:"GasStationHeader",props:{name:String},data:function(){return{active:"",list:[{name:"GasStationIndex",title:"疫情数据"},{name:"GovernmentPolicy",title:"政府政策"},{name:"IndustryMeasures",title:"行业措施"},{name:"landingPage",title:"小微支持"}]}},methods:{onClickTab:function(t){switch(t){case"GasStationIndex":this.$gsSession.setGasStationTitle("疫情数据"),this.$router.push({name:t});break;case"GovernmentPolicy":t===this.name?this.$emit("onRefresh"):this.$router.push({name:t});break;case"IndustryMeasures":t===this.name?this.$emit("onRefresh"):this.$router.push({name:t});break;case"landingPage":this.$gsSession.setGasStationTitle("小微支持"),this.$router.push({name:"GasStationIndex"});break}}},mounted:function(){this.active=this.name}}),a=o,r=(n("517f"),n("5c97"),n("2877")),c=Object(r["a"])(a,i,s,!1,null,"ce56271c",null);e["a"]=c.exports},"0dfb":function(t,e,n){},"0f7d":function(t,e,n){},1047:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"news-header"},[t._v(" "+t._s(t.title)+" "),n("span",{staticClass:"condition-icon",on:{click:function(e){return t.$emit("onCondition")}}},[t._v("筛选")])])},s=[],o={name:"NewsHeader",props:{title:String}},a=o,r=(n("d467"),n("2877")),c=Object(r["a"])(a,i,s,!1,null,"85f2e8a2",null);e["a"]=c.exports},1815:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"van-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"condition-popup"},[n("transition",{attrs:{name:"van-slide-right"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"condition-form"},[n("div",{staticClass:"condition-group"},[n("div",{staticClass:"condition-item"},[n("h5",{staticClass:"condition-title"},[t._v("生效区域")]),n("div",{directives:[{name:"on-click-outside",rawName:"v-on-click-outside",value:t.onCancleSelected,expression:"onCancleSelected"}],staticClass:"input-row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.region,expression:"region"}],class:["input-value",""===t.region?"":"input-focus"],attrs:{type:"text",readonly:"",placeholder:"选择地区"},domProps:{value:t.region},on:{focus:function(e){t.isShowPicker=!0},input:function(e){e.target.composing||(t.region=e.target.value)}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowPicker,expression:"isShowPicker"}],staticClass:"picker"},[n("div",{staticClass:"picker-item",staticStyle:{padding:"8px 10px"},style:{color:"全国"===t.region?"#52697f":"#9caebf"},on:{click:t.onNationSelected}},[t._v("全国")]),n("v-distpicker",{attrs:{type:"mobile","only-province":"",placeholder:"选择地区",province:t.province,"address-header":"address-header-hidden"},on:{selected:t.onSelected}})],1)])]),n("div",{staticClass:"condition-item"},[n("h5",{staticClass:"condition-title"},[t._v("行业")]),n("div",[n("van-checkbox-group",{attrs:{"checked-color":"#FE7069"},model:{value:t.categoryResult,callback:function(e){t.categoryResult=e},expression:"categoryResult"}},t._l(t.categoryList,(function(e,i){return n("van-checkbox",{key:i,attrs:{name:e}},[n("span",{staticClass:"checkbox-text",attrs:{slot:"icon"},slot:"icon"},[t._v(t._s(e))])])})),1)],1)])]),n("div",{staticClass:"button-group"},[n("van-button",{staticClass:"button",attrs:{type:"default"},on:{click:t.onReset}},[t._v("重置")]),n("van-button",{staticClass:"button button-submit",attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("完成")])],1)])]),n("div",{staticClass:"mask",on:{click:function(e){return t.$emit("onClose")}}})],1)])},s=[],o=n("784f"),a=n.n(o),r=n("bf61"),c={name:"ConditionPopup",mixins:[r["mixin"]],components:{"v-distpicker":a.a},props:{visible:Boolean},data:function(){return{region:"",province:"",categoryResult:[],categoryList:["批发零售","制造","交通物流","信息技术","住宿餐饮","金融","房地产","商务服务","生活娱乐","其他"],isShowPicker:!1}},computed:{show:{get:function(){return this.visible},set:function(){}}},watch:{region:function(t){"省"===t&&(this.region="")}},methods:{onSelected:function(t){this.region=t.province["value"],this.province=t.province["value"],this.isShowPicker=!1},onNationSelected:function(){this.region="全国",this.isShowPicker=!1},onCancleSelected:function(){this.isShowPicker=!1},onReset:function(){this.region="",this.province=null,this.categoryResult=[],this.$emit("onReset",{region:this.region,categories:this.categoryResult})},onSubmit:function(){this.$emit("onSubmit",{region:this.region,categories:this.categoryResult}),this.isShowPicker=!1}}},l=c,d=(n("7ae7"),n("3c36"),n("2877")),u=Object(d["a"])(l,i,s,!1,null,"f7b63b12",null);e["a"]=u.exports},"1dab":function(t,e,n){},"1e30":function(t,e,n){"use strict";var i=n("bb4b"),s=n.n(i);s.a},"395a":function(t,e,n){"use strict";var i=n("e105"),s=n.n(i);s.a},"3c36":function(t,e,n){"use strict";var i=n("51f8"),s=n.n(i);s.a},"4df1":function(t,e,n){},"517f":function(t,e,n){"use strict";var i=n("0f7d"),s=n.n(i);s.a},"51f8":function(t,e,n){},"542b":function(t,e,n){"use strict";var i=n("0dfb"),s=n.n(i);s.a},5574:function(t,e,n){},"5a10":function(t,e,n){"use strict";var i=n("6c6c"),s=n.n(i);s.a},"5c97":function(t,e,n){"use strict";var i=n("d12b"),s=n.n(i);s.a},"5ca6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Main",{staticClass:"gas-station-view",attrs:{title:"小微加油站",fixed:!0},on:{onClick:function(e){return t.$router.go(-1)}}},[i("div",{staticClass:"nav-line"}),i("div",{staticClass:"gas-banner"},[i("img",{staticClass:"gas-swipe",attrs:{src:n("fb13"),alt:""}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.sticky,expression:"sticky"}],staticClass:"tabs-holder"}),i("van-tabs",{class:[t.sticky?"fix-tabs":"default-tabs"],attrs:{scrollspy:"",sticky:"","line-width":20,"offset-top":45,"title-active-color":"#fe7069","title-inactive-color":"#666666"},on:{click:t.setSticky},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{staticClass:"gas-module",attrs:{title:"疫情数据",name:"疫情数据"}},[i("MoreTitle",{attrs:{type:1,title:"疫情数据",href:t.epidemicInfo["j"]}}),i("van-tabs",{attrs:{type:"card",color:"#fff",background:"#FFE5E4","title-active-color":"#FE7069","title-inactive-color":"#333333"}},[i("van-tab",{attrs:{title:"国内疫情"}},[i("EpidemicData",{attrs:{type:0,info:t.epidemicInfo}})],1),i("van-tab",{attrs:{title:"国外疫情"}},[i("EpidemicData",{attrs:{type:1,info:t.epidemicInfo}})],1)],1)],1),i("van-tab",{staticClass:"gas-module",attrs:{title:"政府政策",name:"政府政策"}},[i("MoreTitle",{attrs:{type:0,title:"政府政策",name:"GovernmentPolicy"}}),i("div",{staticClass:"news-list"},t._l(t.policyList,(function(e,n){return i("NewsItem",{key:n,attrs:{info:e,index:n},on:{onClick:t.onPolicyItem}})})),1),i("MoreButton",{directives:[{name:"show",rawName:"v-show",value:!this.loading&&t.pMoreBtnShow,expression:"!this.loading && pMoreBtnShow"}],attrs:{name:"GovernmentPolicy"}}),i("p",{directives:[{name:"show",rawName:"v-show",value:!this.loading&&!t.pMoreBtnShow,expression:"!this.loading && !pMoreBtnShow"}],staticClass:"nodata"},[t._v("暂无数据")])],1),i("van-tab",{staticClass:"gas-module",attrs:{title:"行业措施",name:"行业措施"}},[i("MoreTitle",{attrs:{type:0,title:"行业措施",name:"IndustryMeasures"}}),i("div",{staticClass:"news-list"},t._l(t.measureList,(function(e,n){return i("NewsItem",{key:n,attrs:{info:e,index:n},on:{onClick:t.onMeasureItem}})})),1),i("MoreButton",{directives:[{name:"show",rawName:"v-show",value:!this.loading&&t.mMoreBtnShow,expression:"!this.loading &&mMoreBtnShow"}],attrs:{name:"IndustryMeasures"}}),i("p",{directives:[{name:"show",rawName:"v-show",value:!this.loading&&!t.mMoreBtnShow,expression:"!this.loading && !mMoreBtnShow"}],staticClass:"nodata"},[t._v("暂无数据")])],1),i("van-tab",{staticClass:"gas-module padding-module",attrs:{title:"小微支持",name:"小微支持"}},[i("MoreTitle",{staticClass:"border-title",attrs:{id:"tab4",type:2,title:"小微支持"}}),i("GasStationBanner",{attrs:{href:t.clientUrl+"&cm="+t.getChildMerchantId(),banners:t.banners}})],1)],1),i("CustomerHotline"),i("VanLoading",{attrs:{ifShowLoading:t.loading}})],1)},s=[],o=(n("a9e3"),n("96cf"),n("89ba")),a=n("e17f"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"more-title"},[t._v(" "+t._s(t.title)+" "),0===t.type?n("router-link",{staticClass:"title-link",attrs:{to:{name:t.name}}},[t._v("查看更多")]):t._e(),1===t.type?n("a",{staticClass:"title-link",attrs:{href:t.href}},[t._v("了解更多")]):t._e()],1)},c=[],l={name:"MoreTitle",props:{type:Number,title:String,name:String,href:String}},d=l,u=(n("5a10"),n("2877")),h=Object(u["a"])(d,r,c,!1,null,"3066b13c",null),m=h.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"more-button",attrs:{to:{name:t.name}}},[t._v("查看更多")])},p=[],v={name:"MoreButton",props:{name:String}},g=v,b=(n("7755"),Object(u["a"])(g,f,p,!1,null,"2a1e98fa",null)),w=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"epidemic-data"},[0===t.type?n("div",{staticClass:"epidemic-detail"},[n("span",[t._v("截至 "+t._s(t.info["i"])+" 全国数据统计")]),n("span",{staticClass:"epidemic-intro",on:{click:function(e){return e.stopPropagation(),t.onClickIntro(e)}}},[t._v("数据说明")])]):n("div",{staticClass:"epidemic-detail"},[n("span",[t._v("截至 "+t._s(t.info["i"]))])]),n("ul",{staticClass:"epidemic-statistic"},t._l(t.list,(function(e,i){return n("li",{key:i,class:["statistic-item",1===t.type?"statistic-item-abroad":""]},[n("strong",{staticClass:"statistic-title",style:{color:e["color"]}},[t._v(t._s(t.info[e["today"]]))]),n("span",[t._v(t._s(e["name"]))]),n("p",{staticClass:"statistic-compare"},[n("span",[t._v("较昨日")]),n("i",{style:{color:e["color"]}},[t._v(t._s(t.info[e["compare"]]))])])])})),0),n("IntroModal",{attrs:{visible:t.modalVisible},on:{onClose:t.onCloseIntro}})],1)},C=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"intro-modal"},[t._m(0),n("i",{staticClass:"close-button",on:{click:t.onClose}})])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-module"},[n("h3",{staticClass:"modal-title"},[t._v("数据说明")]),n("div",{staticClass:"modal-content"},[n("p",{staticClass:"modal-text",staticStyle:{"font-weight":"bold"}},[t._v("数据来源：全部数据来源于国家卫健委、各省市区卫健委、各省市区政府以及港澳台官方渠道。")]),n("p",{staticClass:"modal-text"},[t._v("实时数据方面，小微加油站统计方法如下：")]),n("p",{staticClass:"modal-text"},[t._v("1.国家卫健委公布数据时，全国总数与国家卫健委保持一致。")]),n("p",{staticClass:"modal-text"},[t._v("2.各省卫健委陆续公布数据，如果各省数据总和已经超过之前国家卫健委总数，则直接使用各省数据总和作为全国总数。（“疑似病例”仅使用国家卫健委每天公布的共有疑似病例总数，而不做新增累计）")]),n("p",{staticClass:"modal-text"},[t._v("3.“较昨日”是指每两天间的新增数值，由当前的全国总数减去国家卫健委前一天公布的数据得到。这个值会随着全国总数的变动而实时变化。")]),n("p",{staticClass:"modal-text"},[t._v("4.疑似病例的“较昨日”数据由两日全国疑似病例总数相减得到。由于疑似病例既会新增，也会随着确诊和排除而减少，该差值会小于国家卫健委公布的“新增疑似病例数”。")]),n("p",{staticClass:"modal-text"},[t._v("5.各省卫健委公布数据的发布时间和统计时间段各不相同，故而会在部分时段出现国家总数不等于分省数据之和。")])])])}],k={name:"IntroModal",props:{visible:Boolean},data:function(){return{}},computed:{show:{get:function(){return this.visible},set:function(){}}},methods:{onClose:function(){this.$emit("onClose")}}},I=k,_=(n("1e30"),Object(u["a"])(I,x,S,!1,null,"37ddba60",null)),$=_.exports,T={name:"EpidemicData",components:{IntroModal:$},props:{type:Number,info:Object},data:function(){return{modalVisible:!1,domesticText:{confirmExisted:{name:"现有确诊",color:"#E44343",today:"k",compare:"l"},inputExisted:{name:"境外输入",color:"#E39109",today:"m",compare:"n"},severeExisted:{name:"现有无症状",color:"#BC4D22",today:"o",compare:"p"},confirmComulated:{name:"累计确诊",color:"#AB1E2D",today:"a",compare:"b"},mortalityComulated:{name:"累计死亡",color:"#556A8F",today:"e",compare:"f"},cureCumulated:{name:"累计治愈",color:"#1CB492",today:"g",compare:"h"}},abroadText:{confirmExisted:{name:"现有确诊",color:"#E44343",today:"q",compare:"r"},confirmComulated:{name:"累计确诊",color:"#AB1E2D",today:"s",compare:"t"},mortalityComulated:{name:"累计死亡",color:"#556A8F",today:"w",compare:"x"},cureCumulated:{name:"累计治愈",color:"#1CB492",today:"u",compare:"v"}}}},computed:{list:function(){return 0===this.type?this.domesticText:this.abroadText}},watch:{modalVisible:function(t){t?(document.body.style.height="100vh",document.body.style.overflow="hidden"):(document.body.style.height="auto",document.body.style.overflow="visible")}},methods:{onClickIntro:function(){this.modalVisible=!0},onCloseIntro:function(){this.modalVisible=!1}}},L=T,E=(n("542b"),Object(u["a"])(L,y,C,!1,null,"637bd153",null)),M=E.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gs-banner"},[i("a",{staticStyle:{display:"block"},attrs:{href:t.href}},[i("img",{staticClass:"wx-banner",attrs:{src:n("b567"),alt:""}})]),t._l(t.banners,(function(e,n){return i("div",{key:n,on:{click:function(i){return t.onClickBanner(e,n)}}},[i("img",{staticClass:"wx-banner",attrs:{src:e.imageUrl,alt:""}})])}))],2)},P=[],B={name:"GasStationBanner",props:{href:String,banners:Array},methods:{onClickBanner:function(t,e){var n=["10011","10012"],i=this.$session.getAppInfo(),s=i.merchantId;this.$api.gasStation.updatePv({type:1,merchantId:s,productCode:n[e]}),t["url"]&&(window.location=t["url"])}}},G=B,R=(n("e7ae"),Object(u["a"])(G,N,P,!1,null,"54c992e7",null)),j=R.exports,O=n("1f67"),D={name:"GasStationIndex",components:{NewsItem:a["a"],MoreTitle:m,MoreButton:w,EpidemicData:M,GasStationBanner:j,CustomerHotline:O["a"]},data:function(){return{active:"",sticky:!1,stickyTop:165,epidemicInfo:{},policyList:[],measureList:[],banners:[],clientUrl:"https://open-lending-c.9fgroup.com/api/open/free/router?p=10005",gasStationProductCode:"10006",scrollTimer:null,loading:!1}},computed:{pMoreBtnShow:function(){return this.policyList.length>0},mMoreBtnShow:function(){return this.measureList.length>0}},watch:{policyList:function(){window&&window.addEventListener("scroll",this.onWinScroll)}},methods:{routeToNews:function(t){this.$fieldValidater.checkNewsUrl(t)?window.location=t:this.$router.push({name:"NewsIndex",query:{iframeSrc:t}})},onPolicyItem:function(t,e){var n=this.policyList[t];this.$gsSession.setGasList({newsId:n["id"],clientY:e.clientY}),this.routeToNews(n["detailUrl"])},onMeasureItem:function(t,e){var n=this.measureList[t];this.$gsSession.setGasList({newsId:n["id"],clientY:e.clientY}),this.routeToNews(n["detailUrl"])},getChildMerchantId:function(){return this.$gsSession.getGasStationInfo()?this.$gsSession.getGasStationInfo().childMerchantId:""},getBannerData:function(){var t=this;return this.$api.app.getBannerListByProductCode(this.gasStationProductCode).then((function(e){t.banners=e["data"]?e["data"]:t.banners})).catch((function(e){t.$notify({type:"danger",message:e.message})}))},getGasData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,i,s,o,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,this.$api.gasStation.getGasData({size:5,productCode:this.gasStationProductCode});case 4:if(e=t.sent,n=e.code,i=e.data,this.loading=!1,200===Number(n)){t.next=9;break}return t.abrupt("return",!1);case 9:if(i&&i[0]){t.next=11;break}return t.abrupt("return");case 11:s=i[0],o=s.epidemic,a=s.industry,r=s.gov,this.policyList=r&&r.length>0?r:[],this.measureList=a&&a.length>0?a:[],this.epidemicInfo=o&&o["content"]?JSON.parse(o["content"]):{},t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](0),this.loading=!1,this.$notify({type:"danger",message:t.t0["message"]});case 21:case"end":return t.stop()}}),t,this,[[0,17]])})));function e(){return t.apply(this,arguments)}return e}(),getScrollTop:function(){return document.body.scrollTop||document.documentElement.scrollTop},setScrollTop:function(t){document.body.scrollTop=document.documentElement.scrollTop=t},setSticky:function(){var t=this.getScrollTop();this.sticky=t>=this.stickyTop},onWinScroll:function(){var t=this;if(!this.scrollTimer){var e=this;this.scrollTimer=setTimeout((function(){clearTimeout(e.scrollTimer),e.scrollTimer=null,e.setSticky();var n=t.getScrollTop(),i=document.body.scrollHeight||document.documentElement.scrollHeight;i-n<window.innerHeight+20&&"小微支持"!==e.active&&(e.active="小微支持")}),100)}},checkRailwayCM:function(){var t=this.$route.query,e=t.cm,n=t.tab,i="1231433596280659969";return e&&e===i&&n&&4===Number(n)},setTab:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,i,s,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$gsSession.getGasStationTitle(),e=this.checkRailwayCM()?"小微支持":e,this.active=e||"疫情数据",t.next=5,this.getGasData();case 5:"小微支持"===e?(document.getElementById("tab4").scrollIntoView(),this.$gsSession.removeGasStationTitle()):"疫情数据"===e&&(this.setScrollTop(this.stickyTop),this.$gsSession.removeGasStationTitle()),n=this.$gsSession.getGasList(),i=n["newsId"],s=n["clientY"],n&&i&&(o=document.getElementById(i),o.scrollIntoView(),a=this.getScrollTop(),this.setScrollTop(a-s),this.$gsSession.removeGasList());case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchData:function(){this.getBannerData(),this.$gsSession.removePolicyList(),this.$gsSession.removeMeasureList();var t=this.$session.getAppInfo(),e=t.merchantId;this.$api.gasStation.updatePv({merchantId:e,productCode:this.gasStationProductCode,type:this.$store.state.app.pageView["home"]}),this.$notify({type:"warning",message:"此分享仅为信息共享使用，如有侵权请联系删除，谢谢！"}),this.$gsSession.setGasStationInfo({childMerchantId:this.$route.query&&this.$route.query.cm?this.$route.query.cm:""})}},mounted:function(){this.fetchData(),this.setTab()},beforeDestroy:function(){window.removeEventListener("scroll",this.onWinScroll)}},H=D,V=(n("6f9a"),n("fc02"),Object(u["a"])(H,i,s,!1,null,"4b408fb6",null));e["default"]=V.exports},6968:function(t,e,n){},"6c6c":function(t,e,n){},"6e45":function(t,e,n){},"6f9a":function(t,e,n){"use strict";var i=n("1dab"),s=n.n(i);s.a},"74bf":function(t,e,n){},7755:function(t,e,n){"use strict";var i=n("b0e9"),s=n.n(i);s.a},"7ae7":function(t,e,n){"use strict";var i=n("b9de"),s=n.n(i);s.a},"854a":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"policy-measures-view government-policy-view"},[n("GasStationHeader",{attrs:{name:"GovernmentPolicy"},on:{onRefresh:t.onRefresh}}),n("div",{class:["policy-module",t.list.length<t.maxLength?"flex-module":""]},[n("NewsHeader",{attrs:{title:"政府政策"},on:{onCondition:t.onCondition}}),n("NewsList",{attrs:{list:t.list,loading:t.loading,finished:t.finished,finishedText:t.finishedText},on:{"update:loading":function(e){t.loading=e},onLoad:t.onLoad,onClickItem:t.onPolicyItem}}),n("div",{staticClass:"flex-auto"}),n("Footer")],1),n("ConditionPopup",{attrs:{visible:t.showCondition},on:{onClose:t.onCloseCondition,onSubmit:t.onSubmitCondition}})],1)},s=[],o=(n("99af"),n("a9e3"),n("96cf"),n("89ba")),a=n("b2c8"),r=n("cfa9"),c=n("1047"),l=n("1815"),d=n("0c18"),u={name:"GovernmentPolicy",components:{Footer:a["a"],NewsList:r["a"],NewsHeader:c["a"],ConditionPopup:l["a"],GasStationHeader:d["a"]},data:function(){return{list:[],loading:!1,finished:!1,finishedText:"没有更多了",refreshing:!1,pageIndex:1,province:"",industry:[],showCondition:!1,maxLength:0}},watch:{showCondition:function(t){t?(document.body.style.height="100%",document.body.style.overflow="hidden"):(document.body.style.height="auto",document.body.style.overflow="visible")}},methods:{setMaxLength:function(){this.maxLength=Math.floor((window.innerHeight-100)/150)},onPolicyItem:function(t,e){var n=this.list[t];this.$gsSession.setPolicyList({newsId:n["id"],pageIndex:this.pageIndex-1,clientY:e.clientY}),this.$fieldValidater.checkNewsUrl(n["detailUrl"])?window.location=n["detailUrl"]:this.$router.push({name:"NewsIndex",query:{iframeSrc:n["detailUrl"]}})},onCondition:function(){this.showCondition=!0},onCloseCondition:function(){this.showCondition=!1},onSubmitCondition:function(t){this.showCondition=!1,this.province=t["region"],this.industry=t["categories"],this.onRefresh()},onLoad:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,i,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this.$gsSession.getPolicyList(),t.next=4,this.$api.gasStation.getNewsList({pageIndex:this.pageIndex,pageSize:e&&e["pageIndex"]?10*e["pageIndex"]:10,start:"0",conditions:{productCode:"10006",type:1,city:"",province:this.province,industry:this.industry}});case 4:if(n=t.sent,this.refreshing&&(this.list=[],this.refreshing=!1),200===Number(n["code"])){t.next=9;break}return this.loading=!1,t.abrupt("return",!1);case 9:if(n["data"]&&0!==n["data"].length){t.next=14;break}return this.loading=!1,this.finished=!0,this.finishedText="暂无数据",t.abrupt("return",!1);case 14:return t.next=16,this.list.concat(n["data"]||[]);case 16:this.list=t.sent,this.loading=!1,n["data"].length>0&&this.pageIndex++,i=e["newsId"],s=e["clientY"],o=this,setTimeout((function(){if(i&&document.getElementById(i)){var t=document.getElementById(i);t.scrollIntoView();var n=document.body.scrollTop||document.documentElement.scrollTop;document.body.scrollTop=document.documentElement.scrollTop=n-s/2,o.pageIndex=e["pageIndex"]+1,o.$gsSession.removePolicyList()}}),100),this.list.length>=Number(n["count"])&&(this.finished=!0,this.finishedText="没有更多了"),t.next=33;break;case 26:return t.prev=26,t.t0=t["catch"](0),this.$notify({type:"danger",message:t.t0["message"]}),this.loading=!1,this.finished=!0,this.finishedText="暂无数据",t.abrupt("return",!1);case 33:case"end":return t.stop()}}),t,this,[[0,26]])})));function e(){return t.apply(this,arguments)}return e}(),onRefresh:function(){document.body.scrollTop=document.documentElement.scrollTop=0,this.pageIndex=1,this.finished=!1,this.refreshing=!0,this.loading=!0,this.onLoad()}},mounted:function(){this.setMaxLength(),window.addEventListener("resize",this.setMaxLength),this.$gsSession.removeGasList(),this.$gsSession.removeMeasureList(),document.body.scrollTop=document.documentElement.scrollTop=0,this.$notify({type:"warning",message:"此分享仅为信息共享使用，如有侵权请联系删除，谢谢！"})},beforeDestroy:function(){window.removeEventListener("resize",this.setMaxLength)}},h=u,m=(n("c517"),n("2877")),f=Object(m["a"])(h,i,s,!1,null,"2d5eba46",null);e["default"]=f.exports},"8c2e":function(t,e,n){"use strict";var i=n("98ae"),s=n.n(i);s.a},"8e7a":function(t,e,n){},"98ae":function(t,e,n){},"9bf5":function(t,e,n){"use strict";var i=n("4df1"),s=n.n(i);s.a},af96:function(t,e,n){"use strict";var i=n("5574"),s=n.n(i);s.a},b0e9:function(t,e,n){},b200:function(t,e,n){},b567:function(t,e,n){t.exports=n.p+"static/img/gas_xw.4c272655.png"},b9de:function(t,e,n){},bb4b:function(t,e,n){},c1f7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},s=[],o={},a=o,r=n("2877"),c=Object(r["a"])(a,i,s,!1,null,"dbacc9bc",null);e["default"]=c.exports},c517:function(t,e,n){"use strict";var i=n("6e45"),s=n.n(i);s.a},c69a:function(t,e,n){"use strict";var i=n("6968"),s=n.n(i);s.a},c83d:function(t,e,n){},c94e:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-view",attrs:{id:"newsView"}},[n("iframe",{attrs:{title:"政策信息",src:t.$route.query.iframeSrc}})])},s=[],o={name:"NewsIndex",mounted:function(){document.body.scrollTop=document.documentElement.scrollTop=0}},a=o,r=(n("af96"),n("2877")),c=Object(r["a"])(a,i,s,!1,null,"6514fbc6",null);e["default"]=c.exports},c952:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"policy-measures-view industry-measures-view"},[n("GasStationHeader",{attrs:{name:"IndustryMeasures"},on:{onRefresh:t.onRefresh}}),n("div",{class:["policy-module",t.list.length<t.maxLength?"flex-module":""]},[n("NewsHeader",{attrs:{title:"行业措施"},on:{onCondition:t.onCondition}}),n("NewsList",{attrs:{list:t.list,loading:t.loading,finished:t.finished,finishedText:t.finishedText},on:{"update:loading":function(e){t.loading=e},onLoad:t.onLoad,onClickItem:t.onMeasureItem}}),n("div",{staticClass:"flex-auto"}),n("Footer")],1),n("ConditionPopup",{attrs:{visible:t.showCondition},on:{onClose:t.onCloseCondition,onSubmit:t.onSubmitCondition}})],1)},s=[],o=(n("99af"),n("a9e3"),n("96cf"),n("89ba")),a=n("b2c8"),r=n("cfa9"),c=n("1047"),l=n("1815"),d=n("0c18"),u={name:"IndustryMeasures",components:{Footer:a["a"],NewsList:r["a"],NewsHeader:c["a"],ConditionPopup:l["a"],GasStationHeader:d["a"]},data:function(){return{list:[],loading:!1,finished:!1,finishedText:"没有更多了",refreshing:!1,pageIndex:1,province:"",industry:[],showCondition:!1,maxLength:0}},watch:{showCondition:function(t){t?(document.body.style.height="100%",document.body.style.overflow="hidden"):(document.body.style.height="auto",document.body.style.overflow="visible")}},methods:{setMaxLength:function(){this.maxLength=Math.floor((window.innerHeight-100)/150)},onMeasureItem:function(t,e){var n=this.list[t];this.$gsSession.setMeasureList({newsId:n["id"],pageIndex:this.pageIndex-1,clientY:e.clientY}),this.$fieldValidater.checkNewsUrl(n["detailUrl"])?window.location=n["detailUrl"]:this.$router.push({name:"NewsIndex",query:{iframeSrc:n["detailUrl"]}})},onCondition:function(){this.showCondition=!0},onCloseCondition:function(){this.showCondition=!1},onSubmitCondition:function(t){this.showCondition=!1,this.province=t["region"],this.industry=t["categories"],this.onRefresh()},onLoad:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,i,s,o,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this.$gsSession.getMeasureList(),t.next=4,this.$api.gasStation.getNewsList({pageIndex:this.pageIndex,pageSize:e&&e["pageIndex"]?10*e["pageIndex"]:10,start:"0",conditions:{productCode:"10006",type:2,city:"",province:this.province,industry:this.industry}});case 4:if(n=t.sent,this.refreshing&&(this.list=[],this.refreshing=!1),200===Number(n["code"])){t.next=9;break}return this.loading=!1,t.abrupt("return",!1);case 9:if(n["data"]&&0!==n["data"].length){t.next=14;break}return this.loading=!1,this.finished=!0,this.finishedText="暂无数据",t.abrupt("return",!1);case 14:return t.next=16,this.list.concat(n["data"]||[]);case 16:this.list=t.sent,this.loading=!1,n["data"].length>0&&this.pageIndex++,i=e["newsId"],s=e["clientY"],o=this,setTimeout((function(){if(i&&document.getElementById(i)){var t=document.getElementById(i);t.scrollIntoView();var n=document.body.scrollTop||document.documentElement.scrollTop;document.body.scrollTop=document.documentElement.scrollTop=n-s/2,o.pageIndex=e["pageIndex"]+1,a.$gsSession.removeMeasureList()}}),100),this.list.length>=Number(n["count"])&&(this.finished=!0,this.finishedText="没有更多了"),t.next=33;break;case 26:return t.prev=26,t.t0=t["catch"](0),this.$notify({type:"danger",message:t.t0["message"]}),this.loading=!1,this.finished=!0,this.finishedText="暂无数据",t.abrupt("return",!1);case 33:case"end":return t.stop()}}),t,this,[[0,26]])})));function e(){return t.apply(this,arguments)}return e}(),onRefresh:function(){document.body.scrollTop=document.documentElement.scrollTop=0,this.refreshing=!0,this.pageIndex=1,this.finished=!1,this.loading=!0,this.onLoad()}},mounted:function(){this.setMaxLength(),window.addEventListener("resize",this.setMaxLength),this.$gsSession.removeGasList(),this.$gsSession.removePolicyList(),document.body.scrollTop=document.documentElement.scrollTop=0,this.$notify({type:"warning",message:"此分享仅为信息共享使用，如有侵权请联系删除，谢谢！"})},beforeDestroy:function(){window.removeEventListener("resize",this.setMaxLength)}},h=u,m=(n("395a"),n("2877")),f=Object(m["a"])(h,i,s,!1,null,"0684d3b2",null);e["default"]=f.exports},cfa9:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"policy-list"},[n("van-list",{attrs:{offset:20,finished:t.finished,"finished-text":t.finishedText},on:{load:function(e){return t.$emit("onLoad")}},model:{value:t.loadingState,callback:function(e){t.loadingState=e},expression:"loadingState"}},t._l(t.list,(function(e,i){return n("NewsItem",{key:i,attrs:{info:e,index:i},on:{onClick:t.onClickItem}})})),1)],1)},s=[],o=n("e17f"),a={name:"NewsList",components:{NewsItem:o["a"]},props:{list:Array,loading:Boolean,finished:Boolean,finishedText:String},computed:{loadingState:{get:function(){return this.loading},set:function(t){this.$emit("update:loading",t)}}},methods:{onClickItem:function(t,e){this.$emit("onClickItem",t,e)}}},r=a,c=(n("8c2e"),n("9bf5"),n("2877")),l=Object(c["a"])(r,i,s,!1,null,"ac1f85a8",null);e["a"]=l.exports},d12b:function(t,e,n){},d467:function(t,e,n){"use strict";var i=n("c83d"),s=n.n(i);s.a},e105:function(t,e,n){},e17f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-item",attrs:{id:t.info["id"]},on:{click:t.onClick}},[n("h5",{staticClass:"news-title"},[t._v(t._s(t.info["title"]))]),n("div",{staticClass:"news-tags"},t._l(t.tags,(function(e){return n("van-tag",{key:e,staticClass:"news-tag",attrs:{color:"rgba(222, 53, 45, 0.1)","text-color":"#DE352D"}},[t._v(t._s(e))])})),1),n("div",{staticClass:"news-article"},[t._v(t._s(t.info["introduction"]))]),n("div",{staticClass:"news-detail"},[n("span",[t._v(t._s(t.info["publishDatetime"]))]),n("span",[t._v("信息来源："+t._s(t.info["source"]))])])])},s=[],o=(n("99af"),n("a9e3"),n("ac1f"),n("1276"),{name:"NewsItem",props:{info:Object,index:Number},computed:{tags:function(){var t=this.info,e=t.province,n=t.industry,i=t.label,s=""!==n?[e,n]:[e];return""!==i?s.concat(i.split("#")):s}},methods:{onClick:function(t){this.$emit("onClick",this.index,t)}}}),a=o,r=(n("e828"),n("c69a"),n("2877")),c=Object(r["a"])(a,i,s,!1,null,"5e2005a6",null);e["a"]=c.exports},e7ae:function(t,e,n){"use strict";var i=n("b200"),s=n.n(i);s.a},e828:function(t,e,n){"use strict";var i=n("74bf"),s=n.n(i);s.a},fb13:function(t,e,n){t.exports=n.p+"static/img/gas_banner.d451455d.png"},fc02:function(t,e,n){"use strict";var i=n("8e7a"),s=n.n(i);s.a}}]);