(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5189cdb7","chunk-c2b4569c","chunk-b9b9aa9a"],{"099f":function(t,e,o){},"0cb9":function(t,e,o){"use strict";var a=o("816e"),n=o.n(a);n.a},"1a76":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{attrs:{visible:t.ifShowDialog,width:"560px",top:"5vh","custom-class":"roleManage_resourceEditDialog"},on:{"update:visible":function(e){t.ifShowDialog=e}}},[o("div",{staticStyle:{"text-align":"center","font-size":"20px"},attrs:{slot:"title"},slot:"title"},[o("strong",[t._v(t._s(t.currentOperatorInfo.name))]),t._v("\n    "+t._s(t.$t("m.accountCenter.权限配置"))+"\n  ")]),o("div",{attrs:{slot:"default",id:"roleResourceTree"},slot:"default"},[o("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:t.ifLoadingRoleData,expression:"ifLoadingRoleData"}],ref:"resourceTree",attrs:{data:t.treeData,"check-on-click-node":"","node-key":"id",props:t.defaultProps,"highlight-current":"","show-checkbox":"","check-strictly":"",accordion:"","default-expand-all":!1},on:{"update:data":function(e){t.treeData=e},check:t.handleCheck},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var a=e.data;return o("span",{staticClass:"custom-tree-node"},[o("span",[t._v(t._s(t.$t("m.resource."+a.uri)))])])}}])})],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.ifShowDialog=!1}}},[t._v(t._s(t.$t("m.取消")))]),o("el-button",{on:{click:t.resetForm}},[t._v(t._s(t.$t("m.重置")))]),o("el-button",{attrs:{loading:t.ifUpdating,type:"primary",disabled:t.isSubmitDisable},on:{click:t.editRoleResource}},[t._v(t._s(t.$t("m.更新")))])],1)])},n=[],i=(o("ac6a"),o("4360")),r=o("0003"),s={name:"PermissionModal",props:{showPermissionConfigDialog:{type:Boolean,default:!1},currentOperatorInfo:{type:Object,default:function(){return{}}}},data:function(){return{ifLoadingRoleData:!1,isSubmitDisable:!0,ifUpdating:!1,defaultProps:{children:"children",label:"name"},defaultAllResourceData:[],defaultCheckedKeys:[],currentCheckedKeys:[],allResourceData:[],treeData:[]}},computed:{ifShowDialog:{get:function(){return this.showPermissionConfigDialog},set:function(t){this.$emit("update:showPermissionConfigDialog",t)}}},watch:{ifShowDialog:function(t,e){var o=this;t?(this.ifLoadingRoleData=!0,this.currentCheckedKeys=[],this.$api.resource.getAllOpenResource(this.currentOperatorInfo.id).then(function(t){o.defaultAllResourceData=t.data,o.allResourceData=JSON.parse(JSON.stringify(o.defaultAllResourceData)),o.treeData=Object(r["b"])(o.allResourceData),o.ifLoadingRoleData=!1})):(this.defaultCheckedKeys=[],this.currentCheckedKeys=[],this.allResourceData=[],this.treeData=[])},allResourceData:{handler:function(t,e){var o=this;this.currentCheckedKeys=[],t.forEach(function(t){t.isSelected&&o.currentCheckedKeys.push(t.id)}),0===e.length&&(this.defaultCheckedKeys=this.currentCheckedKeys),this.$refs.resourceTree.setCheckedKeys(this.currentCheckedKeys),this.isSubmitDisable=this.$lib.isObjEqual(t,this.defaultAllResourceData)},deep:!0}},methods:{handleCheck:function(t,e){var o=this;this.allResourceData.forEach(function(e){e.id===t.id&&(e.isSelected=!e.isSelected,e.isSelected&&o.reInitParents(e),o.reInitChilds(e))})},reInitParents:function(t){var e=this;this.allResourceData.forEach(function(o){o.id===t.parentId&&(o.isSelected=!0,e.reInitParents(o))})},reInitChilds:function(t){var e=this;this.allResourceData.forEach(function(o){o.parentId===t.id&&(o.isSelected=t.isSelected,e.reInitChilds(o))})},editRoleResource:function(){var t=this;this.ifUpdating=!0,this.$api.user.editUserResource({userId:this.currentOperatorInfo.id,resourceIds:this.currentCheckedKeys,createById:i["a"].getters.userId}).then(function(e){t.ifUpdating=!1,t.ifShowDialog=!1}).catch(function(e){return t.ifShowDialog=!1,t.$message.error(e.message),!1})},resetForm:function(){this.allResourceData=JSON.parse(JSON.stringify(this.defaultAllResourceData))}}},l=s,c=(o("38e6"),o("2877")),u=Object(c["a"])(l,a,n,!1,null,null,null);e["default"]=u.exports},2199:function(t,e,o){},"38e6":function(t,e,o){"use strict";var a=o("b045"),n=o.n(a);n.a},"399a":function(t,e,o){"use strict";var a=o("099f"),n=o.n(a);n.a},"3a94":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"confirm-modal",attrs:{title:t.title,visible:t.visible,"show-close":t.showClose,width:"30%"},on:{close:t.onClose}},[a("img",{staticClass:"icon-success",attrs:{src:o("81a6"),alt:""}}),a("p",{staticClass:"desc",domProps:{innerHTML:t._s(t.message)}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.onConfirm}},[t._v(t._s(t.confirmText))])],1)])},n=[],i={name:"ConfirmModal",props:{visible:Boolean,title:String,message:String,confirmText:String,showClose:Boolean},methods:{onClose:function(){this.$emit("onClose")},onConfirm:function(){this.$emit("onConfirm")}}},r=i,s=(o("4c20"),o("2877")),l=Object(s["a"])(r,a,n,!1,null,null,null);e["a"]=l.exports},"3cd6b":function(t,e,o){"use strict";var a=o("2199"),n=o.n(a);n.a},4225:function(t,e,o){"use strict";var a=o("b414"),n=o.n(a);n.a},"4c20":function(t,e,o){"use strict";var a=o("4cb8"),n=o.n(a);n.a},"4cb8":function(t,e,o){},"77fa":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"accountCenter_addOperator"}},[o("el-dialog",{attrs:{visible:t.showDialog,width:"660px",top:"10vh"},on:{"update:visible":function(e){t.showDialog=e}}},[o("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.$t("m.accountCenter.添加运营者")))]),o("el-form",{ref:"formData",attrs:{model:t.formData,rules:t.formDataRule,"label-width":t.labelWidth}},[o("el-form-item",{attrs:{label:t.$t("m.邮箱"),prop:"account"}},[o("el-input",{attrs:{maxlength:"50","show-word-limit":"",autocomplete:"off",placeholder:t.$t("m.placeholder.请输入")},model:{value:t.formData.account,callback:function(e){t.$set(t.formData,"account",e)},expression:"formData.account"}})],1),o("el-form-item",{attrs:{label:t.$t("m.姓名"),prop:"name"}},[o("el-input",{attrs:{autocomplete:"off",maxlength:"20","show-word-limit":"",placeholder:t.$t("m.placeholder.请输入")},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),o("el-form-item",{staticClass:"mb0",attrs:{label:t.$t("m.手机号码"),prop:"phone"}},[o("el-input",{attrs:{maxlength:"20","show-word-limit":"",autocomplete:"off",placeholder:t.$t("m.placeholder.请输入")},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}})],1),o("el-form-item",{staticClass:"mb0",attrs:{label:"",prop:""}},[o("p",{staticClass:"warningMsg"},[o("i",{staticClass:"el-icon-warning"}),t._v("\n          "+t._s(t.$t("m.accountCenter.运营者邮箱将作为账号名称，请确保邮箱地址正确性"))+"\n        ")])])],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.showDialog=!1}}},[t._v(t._s(t.$t("m.取消")))]),o("el-button",{on:{click:t.resetForm}},[t._v(t._s(t.$t("m.清空")))]),o("el-button",{attrs:{loading:t.ifSubmitting,type:"primary"},on:{click:t.addOperator}},[t._v(t._s(t.$t("m.添加")))])],1)],1),o("ConfirmModal",{attrs:{showClose:!0,visible:t.confirmVisible,title:t.$t("m.accountCenter['提交结果']"),message:t.$t("m.accountCenter['添加运营者账号成功']"),confirmText:t.$t("m.accountCenter['权限配置']")},on:{onClose:function(e){t.confirmVisible=!1},onConfirm:t.handlePermissionConfig}})],1)},n=[],i=o("3a94"),r={name:"AddOperator",props:{showAddOperatorDialog:{type:Boolean,default:!1},showPermissionConfigDialog:{type:Boolean,default:!1}},components:{ConfirmModal:i["a"]},data:function(){return{ifSubmitting:!1,confirmVisible:!1,formData:{account:"",name:"",phone:"",merchantId:this.$store.getters.merchantId,createById:this.$store.getters.userId},formDataRule:{account:[{required:!0,message:this.$t("m.validator.请输入邮箱"),trigger:"blur"},{validator:this.$validater.email,trigger:"blur"}],name:[{required:!0,message:this.$t("m.validator.请输入姓名"),trigger:"blur"}],phone:[{required:!0,message:this.$t("m.validator.请填写手机号"),trigger:"blur"},{validator:this.$validater.intlPhoneNumber}]},labelWidth:"100px"}},computed:{showDialog:{get:function(){return this.showAddOperatorDialog},set:function(t){this.resetForm(),this.$emit("update:showAddOperatorDialog",t)}}},methods:{addOperator:function(){var t=this;this.$refs["formData"].validate(function(e){if(!e)return!1;t.ifSubmitting=!0,t.$api.user.addOperator(t.formData).then(function(){var e=t;t.showDialog=!1,t.ifSubmitting=!1,setTimeout(function(){e.confirmVisible=!0},500),t.$emit("refreshData")}).catch(function(e){t.ifSubmitting=!1,t.$message.error(e.message)})})},handlePermissionConfig:function(){var t=this;this.confirmVisible=!1,setTimeout(function(){t.$emit("update:showPermissionConfigDialog",!0)},500)},resetForm:function(){this.$refs["formData"].resetFields(),this.$refs["formData"].clearValidate()}}},s=r,l=(o("399a"),o("2877")),c=Object(l["a"])(s,a,n,!1,null,"4b6f41f0",null);e["default"]=c.exports},"816e":function(t,e,o){},"81a6":function(t,e){t.exports="data:image/png;base64,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"},b045:function(t,e,o){},b414:function(t,e,o){},de8a:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container accountCenter-userSetting"},[o("div",{staticClass:"sec sec1"},[o("h2",{staticClass:"sec-title"},[t._v(t._s(t.$t("m.accountCenter.管理员信息")))]),o("el-form",{ref:"adminInfo",attrs:{model:t.adminInfo,rules:t.adminInfoRules}},[o("table",[o("tr",[o("td",[t._v(t._s(t.$t("m.姓名")))]),o("td",[o("el-form-item",{attrs:{prop:"name"}},[o("el-input",{attrs:{disabled:!t.editAdminInfo},model:{value:t.adminInfo.name,callback:function(e){t.$set(t.adminInfo,"name",e)},expression:"adminInfo.name"}})],1)],1)]),o("tr",[o("td",[t._v(t._s(t.$t("m.accountCenter.账号")))]),o("td",[o("el-form-item",{attrs:{prop:"account"}},[o("el-input",{attrs:{disabled:!t.editAdminInfo},model:{value:t.adminInfo.account,callback:function(e){t.$set(t.adminInfo,"account",e)},expression:"adminInfo.account"}})],1)],1)]),o("tr",[o("td",[t._v(t._s(t.$t("m.手机号码")))]),o("td",[o("el-form-item",{attrs:{prop:"phone"}},[o("el-input",{attrs:{disabled:!t.editAdminInfo},model:{value:t.adminInfo.phone,callback:function(e){t.$set(t.adminInfo,"phone",e)},expression:"adminInfo.phone"}})],1)],1)])])])],1),o("div",{staticClass:"sec sec2"},[o("h2",{staticClass:"sec-title"},[t._v(t._s(t.$t("m.accountCenter.运营者信息")))]),o("el-button",{staticClass:"btn_addOperator",on:{click:function(e){t.showAddOperatorDialog=!0}}},[t._v(t._s(t.$t("m.accountCenter.添加运营者")))]),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingOperatorInfo,expression:"loadingOperatorInfo"}],staticStyle:{width:"100%"},attrs:{data:t.operatorInfo,"header-cell-style":{background:"#f5f5f5"},"cell-style":{padding:"10px 0"}}},[o("el-table-column",{attrs:{type:"index",label:t.$t("m.accountCenter.序号"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index>8?""+(e.$index+1):"0"+(e.$index+1)))]}}])}),o("el-table-column",{attrs:{prop:"name",label:t.$t("m.姓名")},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{attrs:{title:e.row.name}},[t._v(t._s(e.row.name))])]}}])}),o("el-table-column",{attrs:{prop:"account",label:t.$t("m.accountCenter.账号")},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{attrs:{title:e.row.account}},[t._v(t._s(e.row.account))])]}}])}),o("el-table-column",{attrs:{prop:"phone",label:t.$t("m.手机号码")},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.phone.toString()))]}}])}),o("el-table-column",{attrs:{prop:"operate",label:t.$t("m.操作"),width:"245"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticClass:"operate-btn",on:{click:function(o){return t.onPermissionConfig(e.row)}}},[t._v(t._s(t.$t("m.accountCenter.权限配置")))]),o("span",{staticClass:"operate-btn",on:{click:function(o){return t.onResetPwd(e.row)}}},[t._v(t._s(t.$t("m.accountCenter.重置密码")))]),o("PopoverConfirm",{on:{onConfirm:function(o){return t.onDelete(e.row)}}})]}}])})],1)],1),o("AddOperator",{attrs:{"show-add-operator-dialog":t.showAddOperatorDialog,"show-permission-config-dialog":t.showPermissionConfigDialog},on:{"update:showAddOperatorDialog":function(e){t.showAddOperatorDialog=e},"update:show-add-operator-dialog":function(e){t.showAddOperatorDialog=e},"update:showPermissionConfigDialog":function(e){t.showPermissionConfigDialog=e},"update:show-permission-config-dialog":function(e){t.showPermissionConfigDialog=e},refreshData:t.getOperatorList}}),o("PermissionModal",{attrs:{"current-operator-info":t.currentOperatorInfo,"show-permission-config-dialog":t.showPermissionConfigDialog},on:{"update:showPermissionConfigDialog":function(e){t.showPermissionConfigDialog=e},"update:show-permission-config-dialog":function(e){t.showPermissionConfigDialog=e}}})],1)},n=[],i=(o("8e6e"),o("ac6a"),o("456d"),o("7f7f"),o("bd86")),r=o("2f62"),s=o("1a76"),l=o("77fa"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-popover",{attrs:{placement:"top"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("p",[t._v(t._s(t.$t("m.message."+t.message)))]),o("div",{staticStyle:{"text-align":"right",margin:"0"}},[o("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:t.onCancel}},[t._v(t._s(t.$t("m."+t.cancelText)))]),o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.onConfirm}},[t._v(t._s(t.$t("m."+t.confirmText)))])],1),o("el-button",{attrs:{slot:"reference",type:t.triggerType},slot:"reference"},[t._v(t._s(t.$t("m."+t.triggerText)))])],1)},u=[],f={name:"PopoverConfirm",props:{message:{type:String,default:"是否确定删除该选项"},triggerType:{type:String,default:"text"},triggerText:{type:String,default:"删除"},cancelText:{type:String,default:"否"},confirmText:{type:String,default:"是"}},data:function(){return{visible:!1}},methods:{onConfirm:function(){this.visible=!1,this.$emit("onConfirm")},onCancel:function(){this.visible=!1,this.$emit("onCancel")}}},d=f,m=(o("3cd6b"),o("2877")),p=Object(m["a"])(d,c,u,!1,null,null,null),h=p.exports;function g(t,e){var o=Object.keys(t);return Object.getOwnPropertySymbols&&o.push.apply(o,Object.getOwnPropertySymbols(t)),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o}function b(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(o,!0).forEach(function(e){Object(i["a"])(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}var C={name:"UserSettingIndex",components:{PermissionModal:s["default"],AddOperator:l["default"],PopoverConfirm:h},data:function(){return{currentOperatorInfo:{},permissionLoading:!1,showPermissionConfigDialog:!1,showAddOperatorDialog:!1,editAdminInfo:!1,adminInfoRules:{name:[{required:!0,message:this.$t("m.accountCenter.请输入姓名"),trigger:"blur"}],account:[{required:!0,message:this.$t("m.accountCenter.请输入身份证号"),trigger:"blur"}],phone:[{required:!0,message:this.$t("m.accountCenter.请输入手机号码"),trigger:"blur"}]},loadingOperatorInfo:!1,operatorInfo:[]}},computed:b({},Object(r["b"])(["userId","name","account","phone","merchantId"]),{adminInfo:{get:function(){return{name:this.name,phone:this.phone,account:this.account}},set:function(t){this.adminInfo=t}}}),mounted:function(){this.getOperatorList()},methods:{getOperatorList:function(){var t=this;this.loadingOperatorInfo=!0,this.$api.user.getOperatorList(this.merchantId).then(function(e){t.loadingOperatorInfo=!1,t.operatorInfo=e.data,t.currentOperatorInfo=e.data?e.data[e.data.length-1]:{}}).catch(function(e){t.loadingOperatorInfo=!1,t.$message.error(e.message)})},safeFormat:function(t){var e,o=t.length,a=Math.floor(o/3);if(a<1)e=t.substr(0,1)+"**";else{e=t.substr(0,a);for(var n=0;n<a;n++)e+="*";e+=t.substr(2*a)}return e},onPermissionConfig:function(t){this.currentOperatorInfo=t,this.showPermissionConfigDialog=!0},onResetPwd:function(t){var e=this;this.$api.user.resetPassword({id:t.id,updateById:this.userId}).then(function(){e.$message.success(e.$t("m.message.重置密码成功"))}).catch(function(t){e.$message.error(t.message)})},onDelete:function(t){var e=this;this.$api.user.userDelete({userId:t.id}).then(function(){e.getOperatorList()}).catch(function(t){e.$message.error(t.message)})}}},v=C,D=(o("4225"),o("0cb9"),Object(m["a"])(v,a,n,!1,null,"cecf2736",null));e["default"]=D.exports}}]);