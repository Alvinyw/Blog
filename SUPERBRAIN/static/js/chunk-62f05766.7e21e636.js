(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62f05766"],{1083:function(t,e,n){"use strict";var o=n("f2ed"),i=n.n(o);i.a},7761:function(t,e,n){t.exports=n.p+"static/img/welcometoTE.2f984db6.png"},9406:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"dashboardContent",style:t.appPaddingBtm,attrs:{id:"main"}},[o("h1",[t._v(t._s(t.$t("m.dashboard['欢迎来到超级大脑']")))]),o("img",{attrs:{src:n("7761"),alt:"welcome to TE"}}),o("ResetPwd",{attrs:{"if-show-change-psw-dialog":t.ifShowChangePswDialog},on:{"update:ifShowChangePswDialog":function(e){t.ifShowChangePswDialog=e},"update:if-show-change-psw-dialog":function(e){t.ifShowChangePswDialog=e}}})],1)},i=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),a=n("2f62"),c=n("c090");function s(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){Object(r["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var p={name:"IndexContent",components:{ResetPwd:c["a"]},data:function(){return{ifShowChangePswDialog:!1}},computed:f({},Object(a["b"])(["userId","firstLogin","phone"]),{appPaddingBtm:function(){var t="enUS"===this.$i18n.locale?0:220,e=document.documentElement.clientHeight-65;return"padding-bottom:"+t+"px; min-height:"+e+"px"}}),mounted:function(){this.firstLogin&&(this.ifShowChangePswDialog=!0)},methods:{}},u=p,d=(n("1083"),n("2877")),h=Object(d["a"])(u,o,i,!1,null,"36986cce",null);e["default"]=h.exports},f2ed:function(t,e,n){}}]);