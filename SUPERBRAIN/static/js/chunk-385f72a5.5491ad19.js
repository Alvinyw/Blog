(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-385f72a5"],{"0273":function(e,a,t){},"8dda":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"indexBanner"}},[t("el-carousel",{attrs:{trigger:"click",interval:4e3,arrow:"never",height:"640px"}},e._l(e.bannerData,function(e){return t("el-carousel-item",{key:e.sequence},[e.url?t("a",{staticClass:"item",class:"item"+e.sequence,style:"background-image: url("+e.backgroundImageUrl+")",attrs:{target:"_blank",href:e.url}},[t("div",{staticClass:"imgWrapper",style:"background-image: url("+e.imageUrl+")"})]):t("div",{staticClass:"item",class:"item"+e.sequence,style:"background-image: url("+e.backgroundImageUrl+")"},[t("div",{staticClass:"imgWrapper",style:"background-image: url("+e.imageUrl+")"})])])}),1)],1)},n=[],i={name:"Banner",data:function(){return{bannerData:[]}},mounted:function(){var e=this;this.$api.product.getBannerListByProductCode("00000").then(function(a){e.bannerData=a.data?a.data:[]}).catch(function(a){e.$message.error(a.mesage)})}},s=i,c=(t("e04b"),t("2877")),u=Object(c["a"])(s,r,n,!1,null,"4d6cd1a7",null);a["default"]=u.exports},e04b:function(e,a,t){"use strict";var r=t("0273"),n=t.n(r);n.a}}]);