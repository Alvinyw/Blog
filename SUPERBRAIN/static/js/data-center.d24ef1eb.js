(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["data-center","chunk-7246875f"],{"61bf":function(e,t,a){},"7e71":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content",attrs:{id:"dataCenter_statistics_index"}},[a("div",{staticClass:"container"},[a("el-row",{staticClass:"querySec"},[a("el-col",{attrs:{span:24}},[a("p",{staticClass:"title"},[e._v(e._s(e.$t("m.dataCenter['查询条件']")))])]),a("el-form",{ref:"defaultConditions",staticClass:"defaultConditions clearfix",attrs:{model:e.defaultConditions,rules:e.defaultConditionsRules,"label-position":"top"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("m['产品类型']"),prop:"type","label-width":e.labelWidth}},[a("el-radio-group",{on:{change:e.handleQueryType},model:{value:e.defaultConditions.type,callback:function(t){e.$set(e.defaultConditions,"type",t)},expression:"defaultConditions.type"}},[a("el-radio",{attrs:{label:2,border:""}},[e._v(e._s(e.$t("m.服务产品")))]),a("el-radio",{attrs:{label:1,border:""}},[e._v(e._s(e.$t("m.应用产品")))])],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"nameIpt",attrs:{label:e.$t("m['产品名称']"),prop:"code","label-width":e.labelWidth}},[a("el-select",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingProductList,expression:"loadingProductList"}],attrs:{placeholder:e.$t("m.placeholder['请选择']")},on:{change:e.handleQueryProduct},model:{value:e.defaultConditions.code,callback:function(t){e.$set(e.defaultConditions,"code",t)},expression:"defaultConditions.code"}},e._l(e.productList,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}),1)],1)],1)],1),a("el-row",[e.cooperationProductList.length?a("el-col",{attrs:{span:12}},[a("el-form-item",{staticClass:"nameIpt",attrs:{label:e.$t("m.dataCenter['合作产品']"),prop:"coopId","label-width":e.labelWidth,rules:[{required:!0,message:e.$t("m.validator['请选择合作产品']")}]}},[a("el-select",{attrs:{placeholder:e.$t("m.placeholder['请选择']")},model:{value:e.defaultConditions.coopId,callback:function(t){e.$set(e.defaultConditions,"coopId",t)},expression:"defaultConditions.coopId"}},e._l(e.cooperationProductList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1):e._e(),a("el-col",{directives:[{name:"show",rawName:"v-show",value:e.reporterList.length,expression:"reporterList.length"}],attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("m.dataCenter['数据']"),"label-width":e.labelWidth,prop:"productReporterId"}},[a("el-radio-group",{on:{change:e.handleQueryReporter},model:{value:e.defaultConditions.productReporterId,callback:function(t){e.$set(e.defaultConditions,"productReporterId",t)},expression:"defaultConditions.productReporterId"}},e._l(e.reporterList,function(t){return a("el-radio",{key:t.id,attrs:{label:t.id,border:""}},[e._v(e._s(t.name))])}),1)],1)],1)],1)],1)],1),a("QueryForm",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingReporterCondition,expression:"loadingReporterCondition"}],attrs:{"condition-list":e.conditionList,ifShowSerachBtn:e.ifShowSerachBtn,"loading-query-btn":e.loadingReporterData},on:{submitQuery:e.submitQuery}}),a("el-row",[a("el-col",{directives:[{name:"show",rawName:"v-show",value:e.showReporterData,expression:"showReporterData"}],staticClass:"resultSec",attrs:{span:24}},[a("p",{staticClass:"title"},[e._v("\n          "+e._s(e.$t("m.dataCenter['查询结果']"))+"\n          "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.tbHeaderData.length,expression:"tbHeaderData.length"}],staticClass:"btnExport",staticStyle:{float:"right"},attrs:{loading:e.isExporting},on:{click:e.exportData}},[e._v(e._s(e.$t("m['导出']")))])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingReporterData,expression:"loadingReporterData"}],staticStyle:{width:"100%"},attrs:{data:e.tbData,border:"","header-cell-style":{background:"#f5f5f5"},"cell-style":{padding:"10px 0"}}},e._l(e.tbHeaderData,function(t,i){return a("el-table-column",{key:i,attrs:{prop:t.prop,label:t.label},scopedSlots:e._u([{key:"default",fn:function(i){return[e._l(i.row,function(i,r){return[r===t.prop?a("span",{key:r,attrs:{title:i}},[e._v(e._s(i))]):e._e()]})]}}],null,!0)})}),1),a("DataPagination",{attrs:{"pagination-data":e.paginationData,"is-session":!1},on:{"update:paginationData":function(t){e.paginationData=t},"update:pagination-data":function(t){e.paginationData=t},resetData:e.submitQuery}})],1)],1)],1)])},r=[],n=(a("8e6e"),a("456d"),a("7f7f"),a("ac6a"),a("c5f6"),a("96cf"),a("3b8d")),o=a("bd86"),s=a("2f62"),l=a("ac8b");function d(e,t){var a=Object.keys(e);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(e)),t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach(function(t){Object(o["a"])(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var u={name:"StatisticsIndex",components:{QueryForm:l["default"]},data:function(){return{labelWidth:"90px",paginationData:{pageIndex:1,pageSize:10,dataCount:0},defaultConditions:{type:2,code:"",productReporterId:"",coopId:""},defaultConditionsRules:{type:[{required:!0,message:this.$t("m.validator['请选择产品类型']")}],code:[{required:!0,message:this.$t("m.validator['请选择产品名称']")}],productReporterId:[{required:!0,message:this.$t("m.validator['请选择数据报表']")}]},queryConditions:{},dimension:"",loadingProductList:!1,loadingReporterCondition:!1,loadingReporterData:!1,conditionList:[],productList:[],reporterList:[],reporterServiceAddress:"",cooperationProductList:[],tbData:[],tbHeaderData:[],showReporterData:!1,isExporting:!1}},computed:c({},Object(s["b"])(["merchantId"]),{ifShowSerachBtn:function(){return this.tbHeaderData.length>0&&""!==this.reporterServiceAddress}}),mounted:function(){this.handleQueryType(this.defaultConditions.type)},methods:{handleQueryType:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.resetData(),this.loadingProductList=!0,e.next=4,this.$api.merchant.getAllMerchantProductByType({type:t,merchantId:this.merchantId}).then(function(e){a.productList=e.data?e.data:[],a.loadingProductList=!1}).catch(function(e){a.$message.error(e.message)});case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleQueryProduct:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.resetData(),this.defaultConditions.code=t,e.next=4,this.$api.product.getReporterList({productCode:t,type:1,merchantId:this.merchantId}).then(function(e){a.reporterList=e.data&&e.data[0].reports||[],a.cooperationProductList=e.data&&e.data[0].coops||[]}).catch(function(e){a.$message.error(e.message)});case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleQueryReporter:function(e){var t=this;this.loadingReporterCondition=!0,this.showReporterData=!1,this.resetPaginationData(),this.dimension=this.reporterList.filter(function(t){return Number(t.id)===Number(e)})[0].dimension,this.$api.product.getReporterColAndCon({id:e}).then(function(e){t.conditionList=e.data[0].reporterSearchConditionDTOList,t.loadingReporterCondition=!1;var a=e.data[0].reporterColumnDTOlist?e.data[0].reporterColumnDTOlist:[];t.tbHeaderData=[],a.forEach(function(e){t.tbHeaderData.push({prop:e.fieldName,label:e.name})}),t.reporterServiceAddress=e.data[0].apiAddress}).catch(function(e){t.$message.error(e.message)})},resetData:function(){this.defaultConditions.code="",this.defaultConditions.productReporterId="",this.defaultConditions.coopId="",this.conditionList=[],this.reporterList=[],this.cooperationProductList=[],this.showReporterData=!1},resetPaginationData:function(){this.paginationData={pageIndex:1,pageSize:10,dataCount:0}},submitQuery:function(e){var t=this;this.$refs["defaultConditions"].validate(function(a){if(!a)return!1;t.loadingReporterData=!0,e&&(t.queryConditions=e),t.$api.product.getReporterData(t.reporterServiceAddress,c({merchantId:t.merchantId,productCode:t.defaultConditions.code,dimension:t.dimension},t.paginationData,{},t.queryConditions,{coopId:t.defaultConditions.coopId,type:"2"})).then(function(e){t.showReporterData=!0,t.spiltData(e.data),t.paginationData.dataCount=e.count,t.loadingReporterData=!1}).catch(function(e){t.loadingReporterData=!1;var a="enUS"===t.$i18n.locale?e.enMsg:e.message;t.$message.error(a)})})},spiltData:function(e){var t=e||[];if(t.length>this.paginationData.pageSize){var a=(this.paginationData.pageIndex-1)*this.paginationData.pageSize;this.tbData=t.slice(a,a+this.paginationData.pageSize)}else this.tbData=t},resetForm:function(){this.$refs["defaultConditions"].resetFields(),this.$refs["defaultConditions"].clearValidate()},exportData:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,i,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.isExporting=!0,e.next=3,this.$api.product.getReporterData(this.reporterServiceAddress,c({merchantId:this.merchantId,productCode:this.defaultConditions.code,dimension:this.dimension},this.queryConditions,{coopId:this.defaultConditions.coopId,type:"2"}));case 3:if(t=e.sent,"200"===t.code){e.next=7;break}return this.$message.error(t.message),e.abrupt("return",!1);case 7:i=t.data,Promise.all([a.e("chunk-cca36c18"),a.e("chunk-35fc7c4c")]).then(a.bind(null,"4bf8d")).then(function(e){var t=[],a=[];r.tbHeaderData.forEach(function(e){a.push(e.prop),t.push(e.label)}),e.export_json_to_excel({header:t,data:r.formatJson(a,i),filename:"exportExcel",autoWidth:!0,bookType:"xlsx"}),r.isExporting=!1});case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),formatJson:function(e,t){return t?t.map(function(t){return e.map(function(e){return t[e]})}):[]}}},p=u,h=(a("d63c"),a("937d"),a("2877")),f=Object(h["a"])(p,i,r,!1,null,"3ad1cd7c",null);t["default"]=f.exports},"937d":function(e,t,a){"use strict";var i=a("ddc3"),r=a.n(i);r.a},"977a":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("3b2b"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__);__webpack_exports__["a"]={name:"QueryForm",props:{conditionList:Array,ifShowSerachBtn:Boolean,loadingQueryBtn:Boolean},data:function(){return{passVaild:{},condition:{}}},watch:{conditionList:function(){this.condition={},this.passVaild={}}},methods:{getEnum:function getEnum(str){return eval(JSON.parse(str))},isNumber:function(e){if(e.value.trim()){if(!/^[1-9]\d*$/.test(e.value))return this.setEleVisible(e.field,!0,this.$t("m.validator['请输入正整数']")),this.passVaild[e.field]=!1,!1;this.setEleVisible(e.field,!1,"")}else this.setEleVisible(e.field,!1,"");return this.passVaild[e.field]=!0,!0},isDecimal:function(e){if(e.value){if(!new RegExp(/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g).test(e.value))return this.setEleVisible(e.field,!0,this.$t("m.validator['请输入数字，可输入小数']")),this.passVaild[e.field]=!1,!1;this.setEleVisible(e.field,!1," ")}else this.setEleVisible(e.field,!1,"");return this.passVaild[e.field]=!0,!0},isRequired:function(e){return e.fieldRequired&&""===e.value||null===e.value||void 0===e.value?(this.setEleVisible(e.field,!0,e.name+this.$t("m.validator['必填']")),this.passVaild[e.field]=!1,!1):(this.setEleVisible(e.field,!1,""),this.passVaild[e.field]=!0,!0)},setEleVisible:function(e,t,a){document.getElementById(e).style.opacity=t?"1":"0",document.getElementById(e).innerHTML=a},handleChange:function(e){var t;switch(e.fieldType){case 2:t=this.isRequired(e)&&this.isNumber(e),this.condition[e.field]=t?e.value:"";break;case 3:t=this.isRequired(e)&&this.isDecimal(e),this.condition[e.field]=t?e.value:"";break;default:t=this.isRequired(e),this.condition[e.field]=t?e.value:"";break}},handleSubmit:function(){var e=this,t=!0;for(var a in this.conditionList.forEach(function(t){e.isRequired(t)}),this.passVaild)this.passVaild[a]||(t=!1);t&&this.$emit("submitQuery",this.condition)}}}},ac8b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-form",{staticClass:"clearfix",attrs:{id:"dataCenter_queryCondition","label-position":"top"}},[e._l(e.conditionList,function(t){return[a("el-col",{key:t.id,attrs:{span:12}},[a("el-form-item",{attrs:{label:t.name,prop:t.value,rules:[{required:t.fieldRequired}]}},[4===t.fieldType?a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:e.$t("m.placeholder['选择日期']")},on:{change:function(a){return e.handleChange(t)}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}}):6===t.fieldType?a("el-date-picker",{attrs:{type:"year","value-format":"yyyy",placeholder:e.$t("m.placeholder['选择日期']")},on:{change:function(a){return e.handleChange(t)}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}}):5===t.fieldType?a("el-select",{attrs:{placeholder:e.$t("m.placeholder['请选择']")},on:{change:function(a){return e.handleChange(t)}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}},e._l(e.getEnum(t.enumValue),function(e){return a("el-option",{key:e.value,attrs:{value:""!==e.value&&null!==e.value&&void 0!==e.value?e.value.toString():e.value,label:e.label}})}),1):a("el-input",{attrs:{maxlength:"50","show-word-limit":"",clearable:"",placeholder:e.$t("m.placeholder['请选择']")},on:{change:function(a){return e.handleChange(t)}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}}),a("p",{staticClass:"errMsg",attrs:{id:t.field}})],1)],1)]}),a("el-col",{attrs:{span:24}},[a("el-form-item",[a("el-button",{staticClass:"btnSubmit",attrs:{loading:e.loadingQueryBtn,type:"primary",disabled:!e.ifShowSerachBtn},on:{click:e.handleSubmit}},[e._v(e._s(e.$t("m['查询']")))])],1)],1)],2)],1)},r=[],n=a("977a"),o=n["a"],s=(a("bbbf"),a("2877")),l=Object(s["a"])(o,i,r,!1,null,null,null);t["default"]=l.exports},bbbf:function(e,t,a){"use strict";var i=a("d8a6"),r=a.n(i);r.a},d63c:function(e,t,a){"use strict";var i=a("61bf"),r=a.n(i);r.a},d8a6:function(e,t,a){},ddc3:function(e,t,a){}}]);