(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-506fff2a","chunk-060beb53"],{2787:function(e,t,r){},"3a94":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"confirm-modal",attrs:{title:e.title,visible:e.visible,"show-close":e.showClose,width:"30%"},on:{close:e.onClose}},[o("img",{staticClass:"icon-success",attrs:{src:r("81a6"),alt:""}}),o("p",{staticClass:"desc",domProps:{innerHTML:e._s(e.message)}}),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v(e._s(e.confirmText))])],1)])},s=[],a={name:"ConfirmModal",props:{visible:Boolean,title:String,message:String,confirmText:String,showClose:Boolean},methods:{onClose:function(){this.$emit("onClose")},onConfirm:function(){this.$emit("onConfirm")}}},i=a,n=(r("4c20"),r("2877")),c=Object(n["a"])(i,o,s,!1,null,null,null);t["a"]=c.exports},"41ba":function(e,t,r){},4288:function(e,t,r){},"4c20":function(e,t,r){"use strict";var o=r("4cb8"),s=r.n(o);s.a},"4cb8":function(e,t,r){},5103:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-button",{staticClass:"btn-back",on:{click:function(t){return e.$router.go(-1)}}},[e._v(e._s(e.text))])},s=[],a={name:"BackButton",data:function(){return{text:this.$t("m.managementCenter['返回上级']")}}},i=a,n=(r("bc6d"),r("2877")),c=Object(n["a"])(i,o,s,!1,null,"4cb92829",null);t["a"]=c.exports},"57f9":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAJFBMVEVHcEz9tD/8tT79tT39tT7/tj/9tT79tT3/tj//vkX/uT78tD2Ea/ndAAAAC3RSTlMAbL/thTfWqEMNGqLggAAAAAJwSURBVGjexZqxS8NgEMWjtth2EsTJRUoX6VJxkWYpBXVwqaBScNUOuji4dRHEQboUJ8FFEFw6NUmb2vvnbFVqjcm978sTfGu8H+Zyefnuro6TqPzhfrHl+q3i9VrXsddj3ZWZ/NK9ZXiuLhGVbmzij1z5JX/XOLywJ7E6ezaLz7YlQWHDKL4sifIMCDklfkKAqSy0RVWI8rAqQFt6/IlAnWvxGTFQTUlA2QTgJafhVoy0Q92AdhNtU0AYH/8gxtqM9Y+yOcCLc5hXsdBFzD9waQMYdpkMxGehbAfwovHLYqmrCODAFhBEbESs9dNaXuwBVSaFv9KYkRSaf6VOk/5oe6Kka4M5QFIV9qcX15Oq8Tt+QdIAZAU/Ax1QxU6iA0JcRTpgVkuLaQEb6CEiwACWIQB8FWNW0gKkgawAAT5NoZceMEZeggCB+iIYAIYghxDwkcUMA5h6whIDqEyudxjACBg6BATATyFgUsx5YQDS1T8pGHCjOzoG1BQ3MQJsqGVgAKg4TxzgTfEzI8BAv4wBff1kgQGBfjzFgFA/GWCAxwMuOcCQB7gcwHeEAwgPoG/h/5/C/1ci/TLRrzNtKLSl0aZK2zr9YaE/bfTHlf68q7UcNI/vmgegdbPuWaNHnA4DGIFjHlQlbdM5f9DMMoAGOGzDSUi60UH0uN9LDxijlsefNt8uannopotu+/jGk2596eabbv/5AQQ9AqGHMPwYiB5E0aMwfhhHjwPpgSQ/EqWHsvxYuGBlzjGDaXo0zg/n6fUAv6DgVyT0koZfE9GLKn5Vxi/r+HUhvbDkV6b80pZfG/OL6z9YnfPLe/OfD7wDD6FtQpSqGi8AAAAASUVORK5CYII="},"81a6":function(e,t){e.exports="data:image/png;base64,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"},"83fb":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"container"},[r("el-row",{staticClass:"topTip"},[r("span",[e._v(e._s(e.productName))]),r("BackButton")],1),r("FormBoard",{attrs:{state:e.state,fileListOrigin:e.fileListDefault,paymentTypesAry:e.paymentTypesAry,resourceFormOrigin:e.defaultData,submitLoading:e.submitLoading},on:{onSubmit:e.onSubmit}})],1),r("TipModal",{attrs:{loading:e.submitLoading,imgSrc:e.warnImg,visible:e.tipVisible,title:e.$t("m.提示"),desc:e.$t("m.resourceCenter.修改配置后需要重新审核，即时资源将停止服务")},on:{onClose:function(t){e.tipVisible=!1},onCancle:function(t){e.tipVisible=!1},onConfirm:e.onSubmitEdit}}),r("ConfirmModal",{attrs:{showClose:!1,visible:e.confirmVisible,title:e.$t("m.resourceCenter['提交结果']"),message:e.$t("m.resourceCenter['提交成功！请静候审批结果']"),confirmText:e.$t("m.resourceCenter['继续浏览资源']")},on:{onConfirm:e.onMyResource}})],1)},s=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("6b54"),r("c5f6"),r("bd86")),i=r("2f62"),n=r("57f9"),c=r.n(n),l=r("e32c"),u=r("acf0"),m=r("5103"),f=r("3a94");function d(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach(function(t){Object(a["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={name:"ApplicationConfirmEdit",components:{TipModal:u["a"],FormBoard:l["default"],BackButton:m["a"],ConfirmModal:f["a"]},data:function(){return{warnImg:c.a,formData:{},loading:!1,productName:"",paymentTypesAry:[],fileListDefault:[],defaultData:{connectType:"1",ifUseSelfOwnedBrand:"1",brandLogo:"",brandName:"",productFirstColor:"",paymentType:""},submitLoading:!1,tipVisible:!1,confirmVisible:!1}},computed:p({},Object(i["b"])(["userId"]),{state:function(){return Number(this.$route.query.state)}}),methods:{setFormData:function(e){var t=e.productName,r=e.connectType,o=e.brandName,s=e.paymentType,a=e.paymentTypes,i=e.brandLogo,n=e.productFirstColor;this.defaultData={connectType:r.toString(),brandLogo:i,brandName:o,productFirstColor:n,paymentType:s,ifUseSelfOwnedBrand:i?"1":"0"},this.productName=t,this.fileListDefault=i?[{name:name,url:i}]:[],this.paymentTypesAry=this.$product.getFilterPaymentTypes(a||[s])},getFormData:function(){var e=this;return this.loading=!0,this.$api.merchant.getMerchantRightInfo(this.$route.query.id).then(function(t){e.setFormData(t.data[0]),e.loading=!1}).catch(function(t){e.loading=!1,e.$message.error(t.message)})},onEditModal:function(){this.tipVisible=!0},onSubmitEdit:function(){var e=this;this.submitLoading=!0,this.$api.merchant.editMerchantRight(p({createById:this.userId,id:this.$route.query.id},this.formData)).then(function(){e.tipVisible&&(e.tipVisible=!1),e.submitLoading=!1,e.confirmVisible=!0}).catch(function(t){e.submitLoading=!1,e.$message.error(t.message)})},onSubmit:function(e){this.formData=e,2===this.state?this.onEditModal(e):3===this.state&&this.onSubmitEdit()},onMyResource:function(){this.confirmVisible=!1,this.$router.push({path:"/myResource"})}},mounted:function(){this.getFormData()}},b=g,C=(r("c0fd"),r("2877")),A=Object(C["a"])(b,o,s,!1,null,"a56812fa",null);t["default"]=A.exports},acf0:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"tip-modal",attrs:{title:e.title,visible:e.visible,width:"30%"},on:{close:function(t){return e.$emit("onClose")}}},[r("img",{staticClass:"icon-success",attrs:{src:e.imgSrc,alt:""}}),r("p",{staticClass:"desc"},[e._v(e._s(e.desc))]),"error"===e.type?r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{staticClass:"continue-button",attrs:{type:"primary"},on:{click:function(t){return e.$emit("onContinue")}}},[e._v(e._s(e.$t("m.resourceCenter.继续浏览资源")))])],1):r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.$emit("onCancle")}}},[e._v(e._s(e.$t("m.取消")))]),r("el-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.$emit("onConfirm")}}},[e._v(e._s(e.$t("m.提交")))])],1)])},s=[],a={name:"TipModal",props:{type:String,title:String,desc:String,visible:Boolean,imgSrc:String,loading:Boolean}},i=a,n=(r("caed"),r("2877")),c=Object(n["a"])(i,o,s,!1,null,null,null);t["a"]=c.exports},af62:function(e,t,r){"use strict";var o=r("2787"),s=r.n(o);s.a},bc6d:function(e,t,r){"use strict";var o=r("f20a"),s=r.n(o);s.a},c0fd:function(e,t,r){"use strict";var o=r("41ba"),s=r.n(o);s.a},caed:function(e,t,r){"use strict";var o=r("4288"),s=r.n(o);s.a},cd7b:function(e,t,r){"use strict";var o=r("fdfc"),s=r.n(o);s.a},e32c:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"application-form-board"},[r("el-col",{staticClass:"ct-lt",attrs:{span:14}},[r("el-form",{ref:"resourceForm",attrs:{model:e.resourceForm,rules:e.resourceFormRules,"label-width":"170px"}},[r("el-form-item",{attrs:{label:e.$t("m.resourceCenter['对接方式']"),prop:"connectType"}},[r("el-radio",{attrs:{label:"1",border:""},model:{value:e.resourceForm.connectType,callback:function(t){e.$set(e.resourceForm,"connectType",t)},expression:"resourceForm.connectType"}},[e._v("H5")])],1),r("el-form-item",{attrs:{label:e.$t("m.resourceCenter['是否使用自营品牌']"),required:""}},[r("el-radio",{attrs:{label:"1",border:""},on:{change:e.changeIfUseSelfOwnedBrand},model:{value:e.resourceForm.ifUseSelfOwnedBrand,callback:function(t){e.$set(e.resourceForm,"ifUseSelfOwnedBrand",t)},expression:"resourceForm.ifUseSelfOwnedBrand"}},[e._v(e._s(e.$t("m.是")))]),r("el-radio",{attrs:{label:"0",border:""},on:{change:e.changeIfUseSelfOwnedBrand},model:{value:e.resourceForm.ifUseSelfOwnedBrand,callback:function(t){e.$set(e.resourceForm,"ifUseSelfOwnedBrand",t)},expression:"resourceForm.ifUseSelfOwnedBrand"}},[e._v(e._s(e.$t("m.否")))])],1),e.ifShowFullForm?r("div",[r("el-form-item",{staticClass:"uploadLogo",attrs:{label:e.$t("m.resourceCenter['品牌LOGO']"),required:"",prop:"brandLogo"}},[r("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:e.uploadingImage,expression:"uploadingImage"}],staticClass:"upload-demo",attrs:{drag:"",action:"",accept:"image/png","before-upload":e.beforeUpload,"file-list":e.fileList,"http-request":e.handleHttpRequest,"on-change":e.handleChange}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[r("p",{staticClass:"c"},[e._v(e._s(e.$t("m.resourceCenter['点击上传图片']")))]),r("p",{staticClass:"u"},[e._v(e._s(e.$t("m.resourceCenter['请上传PNG格式，且小于1M的LOGO图片']")))])])])],1),r("el-form-item",{attrs:{label:e.$t("m.resourceCenter['品牌名称']"),prop:"brandName"}},[r("el-input",{attrs:{placeholder:e.$t("m.placeholder['请输入']")},model:{value:e.resourceForm.brandName,callback:function(t){e.$set(e.resourceForm,"brandName",t)},expression:"resourceForm.brandName"}})],1),r("el-form-item",{staticClass:"colorWrap",attrs:{label:e.$t("m.resourceCenter['主题颜色']"),prop:"productFirstColor"}},[r("el-input",{attrs:{placeholder:e.$t("m.placeholder['请输入']")},model:{value:e.resourceForm.productFirstColor,callback:function(t){e.$set(e.resourceForm,"productFirstColor",t)},expression:"resourceForm.productFirstColor"}}),r("el-color-picker",{model:{value:e.resourceForm.productFirstColor,callback:function(t){e.$set(e.resourceForm,"productFirstColor",t)},expression:"resourceForm.productFirstColor"}})],1)],1):e._e(),r("el-form-item",{attrs:{label:e.$t("m.resourceCenter['计费方式']"),prop:"paymentType"}},[r("el-select",{attrs:{placeholder:e.$t("m.placeholder['请选择']")},model:{value:e.resourceForm.paymentType,callback:function(t){e.$set(e.resourceForm,"paymentType",t)},expression:"resourceForm.paymentType"}},e._l(e.paymentTypesAry,function(t){return r("el-option",{key:t.value,attrs:{label:e.$t("m.setting['"+t.label+"']"),value:t.value}})}),1)],1),0===e.state?r("el-form-item",[r("el-button",{staticClass:"btnSubmit",attrs:{type:"primary",loading:e.submitLoading},on:{click:e.onSubmit}},[e._v(e._s(e.$t("m.resourceCenter['立即开通']")))])],1):e._e(),2===e.state||3===e.state?r("el-form-item",[r("el-button",{staticClass:"btnSubmit",attrs:{type:"primary",loading:e.submitLoading,disabled:e.ifSubmitDisable},on:{click:e.onSubmit}},[e._v(e._s(2===e.state?e.$t("m.提交"):e.$t("m.resourceCenter['重新申请']")))])],1):e._e()],1)],1),r("el-col",{staticClass:"ct-rt",attrs:{span:10}},[r("div",{staticClass:"sec"},[r("p",{staticClass:"title"},[e._v(e._s(e.$t("m.resourceCenter['当前配置']")))]),r("ul",[r("li",[r("span",{staticClass:"lt"},[e._v(e._s(e.$t("m.resourceCenter['对接模式']")))]),r("span",{staticClass:"rt"},[e._v(e._s(e._f("filterConnectType")(e.resourceForm.connectType)))])]),r("li",[r("span",{staticClass:"lt"},[e._v(e._s(e.$t("m.resourceCenter['是否使用自营品牌']")))]),r("span",{staticClass:"rt"},[e._v(e._s(e.ifShowFullForm?e.$t("m.是"):e.$t("m.否")))])])]),r("ul",{directives:[{name:"show",rawName:"v-show",value:e.ifShowFullForm,expression:"ifShowFullForm"}]},[r("li",[r("span",{staticClass:"lt"},[e._v(e._s(e.$t("m.resourceCenter['品牌名称']")))]),r("span",{staticClass:"rt"},[e._v(e._s(e.resourceForm.brandName))])]),r("li",[r("span",{staticClass:"lt"},[e._v(e._s(e.$t("m.resourceCenter['品牌LOGO']")))]),r("span",{staticClass:"rt"},[r("el-image",{staticStyle:{width:"100px",height:"40px",border:"1px solid #eee","background-color":"#f5f5f5"},attrs:{src:e.resourceForm.brandLogo,fit:"scale-down"}},[r("div",{staticClass:"image-slot",staticStyle:{"text-align":"center","font-size":"18px",color:"#999","line-height":"38px"},attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])])],1)]),r("li",[r("span",{staticClass:"lt"},[e._v(e._s(e.$t("m.resourceCenter['主题颜色']")))]),r("span",{staticClass:"rt"},[e._v(e._s(e.resourceForm.productFirstColor))])])]),r("ul",[r("li",[r("span",{staticClass:"lt"},[e._v(e._s(e.$t("m.resourceCenter['计费方式']")))]),r("span",{staticClass:"rt"},[e._v(e._s(e.$product.getPaymentType(e.resourceForm.paymentType)?e.$t("m.setting['"+e.$product.getPaymentType(e.resourceForm.paymentType)+"']"):e.$product.getPaymentType(e.resourceForm.paymentType)))])])])])])],1)},s=[],a=(r("c5f6"),{name:"ApplicationFormBoard",props:{state:Number,submitLoading:Boolean,paymentTypesAry:Array,fileListOrigin:Array,resourceFormOrigin:Object},data:function(){return{fileList:[],uploadingImage:!1,resourceForm:{connectType:"1",ifUseSelfOwnedBrand:"1",brandLogo:"",brandName:"",productFirstColor:"",paymentType:""},ifSubmitDisable:!0}},computed:{ifShowFullForm:function(){return"1"===this.resourceForm["ifUseSelfOwnedBrand"]},resourceFormRules:function(){return{connectType:[{required:!0,message:this.$t("m.message['请选择对接模式']"),trigger:"blur"}],ifUseSelfOwnedBrand:[{required:!0,message:this.$t("m.managementCenter['是否使用自营品牌']")}],brandLogo:[{required:!0,message:this.$t("m.message['请上传品牌Logo']"),trigger:"change"}],brandName:[{required:!0,message:this.$t("m.message['请输入品牌名称']")}],productFirstColor:[{required:!0,message:this.$t("m.message['请输入主题主要颜色']")}],paymentType:[{required:!0,message:this.$t("m.message['请选择计费方式']"),trigger:"blur"}]}}},watch:{paymentTypesAry:function(e){Array.isArray(e)&&(this.fileList=this.fileListOrigin,this.resourceForm=Object.assign({},this.resourceFormOrigin))},resourceForm:{handler:function(e){this.ifSubmitDisable=JSON.stringify(this.resourceFormOrigin)===JSON.stringify(e)},deep:!0}},methods:{changeIfUseSelfOwnedBrand:function(e){"1"===e?(this.fileList=this.fileListOrigin,this.resourceForm=Object.assign({},this.resourceFormOrigin),this.resourceForm["ifUseSelfOwnedBrand"]=e):(this.fileList=[],this.resourceForm.brandLogo="",this.resourceForm.brandName="",this.resourceForm.productFirstColor="")},handleExceed:function(){this.$message.error(this.$t("m.message['只能上传一张 Logo 图片']"))},beforeUpload:function(e){var t=this,r="image/png"===e.type,o=e.size/1024/1024<1;return r?!!o||(t.$message.error(this.$t("m.message['Logo 图片大小不可超过1MB']")),!1):(t.$message.error(this.$t("m.message['请上传格式为 png 的 Logo 图片']")),!1)},handleHttpRequest:function(e){var t=this;this.uploadingImage=!0;var r=new FormData;r.append("file",e.file),this.$api.resource.fileUpload(r).then(function(e){t.resourceForm.brandLogo=e.data[0],t.uploadingImage=!1}).catch(function(e){t.fileList=[],t.uploadingImage=!1,t.$message.error(e.message)})},handleChange:function(e,t){this.fileList=t.slice(-1)},onSubmit:function(){var e=this;this.$refs["resourceForm"].validate(function(t){if(!t)return!1;e.$emit("onSubmit",e.resourceForm)})}}}),i=a,n=(r("cd7b"),r("af62"),r("2877")),c=Object(n["a"])(i,o,s,!1,null,"4ee66554",null);t["default"]=c.exports},f20a:function(e,t,r){},fdfc:function(e,t,r){}}]);