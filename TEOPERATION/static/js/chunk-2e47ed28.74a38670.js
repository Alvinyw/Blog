(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e47ed28"],{"1fb6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer-list section mb0"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"header-cell-style":{background:"#f5f5f5",color:"#333"}}},[a("el-table-column",{attrs:{prop:"customerId",label:"客户编码","min-width":"120","class-name":"code-column"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:{path:"/customer/detail",query:{customerId:e.row.customerId}}}},[t._v(t._s(e.row.customerId))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"registerMobile",label:"注册手机号","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"客户名称","min-width":"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{attrs:{title:e.row.name}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"idNo",label:"身份证号","min-width":"145"}}),t._v(" "),a("el-table-column",{attrs:{prop:"merchantName",label:"所属商户","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{attrs:{title:e.row.merchantName}},[t._v(t._s(e.row.merchantName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"childMerchantName",label:"所属子商户","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{attrs:{title:e.row.childMerchantName}},[t._v(t._s(e.row.childMerchantName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"productName",label:"注册产品","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{attrs:{title:e.row.productName}},[t._v(t._s(e.row.productName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createDatetime",label:"注册时间",width:"140"}})],1),t._v(" "),a("DataPagination",{attrs:{"pagination-data":t.page},on:{"update:paginationData":function(e){t.page=e},"update:pagination-data":function(e){t.page=e},resetData:function(e){return t.$emit("resetData")}}})],1)},o=[],r={name:"CustomerList",props:{list:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:function(){return!1}},paginationData:{type:Object,default:function(){return{pageIndex:1,pageSize:10,dataCount:0}}}},computed:{page:{get:function(){return this.paginationData},set:function(t){}}}},l=r,i=(a("bf61"),a("2877")),u=Object(i["a"])(l,n,o,!1,null,null,null);e["default"]=u.exports},"8d10":function(t,e,a){},bf61:function(t,e,a){"use strict";var n=a("8d10"),o=a.n(n);o.a}}]);