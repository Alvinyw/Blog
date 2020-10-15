(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["paymentPsw"],{"0ca6":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"paymentPsw_forget"}},[n("van-nav-bar",{attrs:{title:"忘记支付密码","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}},[n("div",{staticClass:"currentProgress",attrs:{slot:"right"},slot:"right"},[n("span",{staticClass:"currentStep"},[t._v("1")]),n("span",{staticClass:"totalStep"},[t._v("/3")])])]),n("StepList",{attrs:{percentage:100/3}}),n("div",{staticClass:"mainContent g_container"},[n("h2",[t._v("验证银行卡信息")]),n("div",{staticClass:"bindCard"},[n("p",{staticClass:"lbl"},[t._v("绑定银行卡")]),n("van-cell",[n("template",{slot:"title"},[n("span",{staticClass:"custom-title"},[t._v(" "+t._s(t.bindCardBasicInfo.shortName)+" "+t._s(t._f("filterBankCardType")(t.bindCardInfo.cardType))+" "+t._s(t.bindCardInfo.cardNumber?"("+t.bindCardInfo.cardNumber.slice(-4)+")":"")+" ")])])],2)],1),n("p",{staticClass:"lbl"},[t._v("银行卡号")]),n("van-field",{attrs:{"error-message":t.numberErrorMsg,maxlength:"23",placeholder:"请输入银行卡号"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),n("p",{staticClass:"lbl"},[t._v("预留手机号")]),n("van-field",{attrs:{"error-message":t.mobileErrorMsg,maxlength:"11",placeholder:"请输入银行预留手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),n("p",{staticClass:"lbl"},[t._v("验证码")]),n("van-field",{attrs:{"error-message":t.validCodeErrorMsg,maxlength:"6",disabled:!t.ifAllowInputValidCode,placeholder:"请输入验证码"},model:{value:t.validCode,callback:function(e){t.validCode=e},expression:"validCode"}},[n("div",{attrs:{slot:"button"},slot:"button"},[0===t.countDownTime||120===t.countDownTime?n("a",{attrs:{href:"javascript:void(0)"},on:{click:t.sendVerificationCode}},[t._v("获取验证码")]):n("a",{attrs:{href:"javascript:void(0)"}},[n("span",[t._v(t._s(t.countDownTime))]),t._v("s后重新发送 ")])])]),n("van-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"btn_next",attrs:{type:"primary",disabled:t.isSubmitDisable},on:{click:t.nextStep}},[t._v("下一步")])],1),n("VanLoading",{attrs:{"if-show-loading":t.ifShowLoading},on:{"update:ifShowLoading":function(e){t.ifShowLoading=e},"update:if-show-loading":function(e){t.ifShowLoading=e}}})],1)},a=[],r=(n("a9e3"),n("ac1f"),n("5319"),n("498a"),n("96cf"),n("89ba")),i={name:"PaymentPswForget",data:function(){return{bindCardBasicInfo:"",bindCardInfo:"",ifAllowInputValidCode:!1,ifShowLoading:!1,isSubmitDisable:!0,interval:"",countDownTime:120,reqNo:"",validCode:"",validCodeErrorMsg:null,number:"",numberErrorMsg:null,mobile:"",mobileErrorMsg:null}},watch:{number:function(t){var e=this;this.$nextTick((function(){e.number=t.replace(/\D/g,"").replace(/....(?!$)/g,"$& ");var n=t.length;e.numberErrorMsg=""===t?"银行卡号不能为空":n<14?"银行卡号格式不正确":""}))},mobile:function(t){var e=this;this.$nextTick((function(){""===t?e.mobileErrorMsg="预留手机号不能为空":/^[1][34578]\d{9}$/.test(t)&&/^[1-9]\d*$/.test(t)&&11===t.length?e.mobileErrorMsg="":e.mobileErrorMsg="手机号码格式不正确"}))},validCode:function(t){t?6===t.length?(this.validCodeErrorMsg="",this.checkValidCode()):this.validCodeErrorMsg="验证码为6位数":this.validCodeErrorMsg="验证码不能为空"}},mounted:function(){this.getBindCardInfo()},methods:{getBindCardInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ifShowLoading=!0,t.next=3,this.$api.customer.getCardList({customerId:this.$session.getCustomerInfo().customerId});case 3:e=t.sent,e&&"200"===e.code?(n=e.data[0]?e.data[0]:{},this.bindCardInfo=n,this.bindCardBasicInfo=this.$app.getBankBasicInfo(n.cardChinaName)):this.$notify({type:"danger",message:e.message}),this.ifShowLoading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),initCountDown:function(){var t=this;this.countDownTime=120,this.interval=setInterval((function(){t.countDownTime>0?t.countDownTime--:clearInterval(t.interval)}),1e3)},handleInput:function(t){return t?t.trim().replace(/\s+/g,""):t},checkBasinInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ifShowLoading=!0,e=this.$session.getCustomerInfo(),n=e.customerId,t.next=4,this.$api.payment.checkPersonInfo({customerId:n,customerPersonBankId:this.bindCardInfo.customerPersonBankId,mobile:this.handleInput(this.mobile),number:this.handleInput(this.number)});case 4:if(s=t.sent,!s||200!==Number(s["code"])){t.next=9;break}return t.abrupt("return",!0);case 9:return this.$notify({type:"danger",message:s["message"]}),this.ifShowLoading=!1,t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sendVerificationCode:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===this.numberErrorMsg&&""===this.mobileErrorMsg){t.next=3;break}return this.$notify({type:"warning",message:"请先填入基本信息"}),t.abrupt("return",!1);case 3:return t.next=5,this.checkBasinInfo();case 5:if(e=t.sent,e){t.next=8;break}return t.abrupt("return",!1);case 8:return this.initCountDown(),n=this.$session.getCustomerInfo(),s=n.customerId,t.next=12,this.$api.customer.getSMSCode({customerId:s,type:"1"});case 12:a=t.sent,a&&"200"===a.code?(this.ifAllowInputValidCode=!0,this.reqNo=a.data[0].reqNo):(this.$notify({type:"danger",message:a.message}),clearInterval(this.interval),this.countDownTime=120),this.ifShowLoading=!1;case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkValidCode:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ifShowLoading=!0,t.next=3,this.$api.customer.checkSMSCode({reqNo:this.reqNo,code:this.validCode});case 3:e=t.sent,e&&"200"===e.code?(this.isSubmitDisable=!1,this.validCodeErrorMsg=""):(this.$notify({type:"danger",message:e.message}),this.isSubmitDisable=!0,this.validCodeErrorMsg="输入的验证码不正确"),this.ifShowLoading=!1;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),nextStep:function(){this.$router.push({path:"/paymentPsw/set/enter",query:{operate:"找回",routeName:"settings"}})}}},o=i,u=(n("5f61"),n("539a"),n("2877")),c=Object(u["a"])(o,s,a,!1,null,"6ee40521",null);e["default"]=c.exports},1199:function(t,e,n){},"32b2":function(t,e,n){},"36b4":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"paymentPsw_setConfirm"}},[n("van-nav-bar",{attrs:{title:"设置支付密码","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}},[this.$route.query.operate?n("div",{staticClass:"currentProgress",attrs:{slot:"right"},slot:"right"},[n("span",{staticClass:"currentStep"},[t._v("3")]),n("span",{staticClass:"totalStep"},[t._v("/3")])]):n("div",{staticClass:"currentProgress",attrs:{slot:"right"},slot:"right"},[n("span",{staticClass:"currentStep"},[t._v("2")]),n("span",{staticClass:"totalStep"},[t._v("/2")])])]),n("StepList",{attrs:{percentage:100}}),n("div",{staticClass:"mainContent g_container"},[n("h2",[t._v("重复新支付密码")]),n("van-password-input",{attrs:{value:t.curPaymentPsw,length:6,gutter:15,focused:!0}}),n("van-number-keyboard",{attrs:{show:!0},on:{input:t.onInput,delete:t.onDelete}})],1),n("VanLoading",{attrs:{"if-show-loading":t.ifShowLoading},on:{"update:ifShowLoading":function(e){t.ifShowLoading=e},"update:if-show-loading":function(e){t.ifShowLoading=e}}})],1)},a=[],r=(n("fb6a"),n("96cf"),n("89ba")),i={name:"PaymentPswSetConfirm",data:function(){return{ifShowLoading:!1,curPaymentPsw:""}},watch:{curPaymentPsw:function(t){6===t.length&&(t===this.$route.query.newPaymentPsw?this.setPaymentPsw():(this.$notify({type:"danger",message:"两次输入的支付密码不一致！"}),this.curPaymentPsw=""))}},methods:{setPaymentPsw:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,s,a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ifShowLoading=!0,e=this.$session.getCustomerInfo(),n=e.customerId,t.next=4,this.$api.payment.setPsw({id:n,payPassword:this.curPaymentPsw});case 4:s=t.sent,a=this.$route.query,r=a.operate,i=a.routeName,s&&"200"===s.code?(this.$router.push({path:"/success",query:{name:r?r+"支付密码":"设置支付密码",result:r?r+"成功":"设置成功！",routeName:i||""}}),this.$session.removePaymentPwdLimit(),this.$session.removePaymentPwdTime()):this.$router.push({path:"/failure",query:{name:r?r+"支付密码":"设置支付密码",result:r?r+"失败":"设置失败！"}}),this.ifShowLoading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onInput:function(t){this.curPaymentPsw=(this.curPaymentPsw+t).slice(0,6)},onDelete:function(){this.curPaymentPsw=this.curPaymentPsw.slice(0,this.curPaymentPsw.length-1)}}},o=i,u=(n("aaf6"),n("2877")),c=Object(u["a"])(o,s,a,!1,null,"10c1946c",null);e["default"]=c.exports},"3bb1":function(t,e,n){},"539a":function(t,e,n){"use strict";var s=n("9485"),a=n.n(s);a.a},"5f61":function(t,e,n){"use strict";var s=n("32b2"),a=n.n(s);a.a},9485:function(t,e,n){},"9e74":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"paymentPsw_setEnter"}},[this.$route.query.operate?n("div",[n("van-nav-bar",{attrs:{title:"设置支付密码","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}},[n("div",{staticClass:"currentProgress",attrs:{slot:"right"},slot:"right"},[n("span",{staticClass:"currentStep"},[t._v("2")]),n("span",{staticClass:"totalStep"},[t._v("/3")])])]),n("StepList",{attrs:{percentage:200/3}})],1):n("div",[n("van-nav-bar",{attrs:{title:"设置支付密码","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}},[n("div",{staticClass:"currentProgress",attrs:{slot:"right"},slot:"right"},[n("span",{staticClass:"currentStep"},[t._v("1")]),n("span",{staticClass:"totalStep"},[t._v("/2")])])]),n("StepList",{attrs:{percentage:50}})],1),n("div",{staticClass:"mainContent g_container"},[n("h2",[t._v("设置新支付密码")]),n("van-password-input",{attrs:{value:t.newPaymentPsw,length:6,gutter:15,focused:!0}}),n("van-number-keyboard",{attrs:{show:!0},on:{input:t.onInput,delete:t.onDelete}})],1),n("VanLoading",{attrs:{"if-show-loading":t.ifShowLoading},on:{"update:ifShowLoading":function(e){t.ifShowLoading=e},"update:if-show-loading":function(e){t.ifShowLoading=e}}})],1)},a=[],r=(n("fb6a"),n("96cf"),n("89ba")),i={name:"PaymentPswSetEnter",data:function(){return{ifShowLoading:!1,newPaymentPsw:""}},watch:{newPaymentPsw:function(t){6===t.length&&this.checkPaymentPsw()}},methods:{checkPaymentPsw:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ifShowLoading=!0,e=this.$session.getCustomerInfo(),n=e.customerId,t.next=4,this.$api.payment.checkPsw({id:n,payPassword:this.newPaymentPsw});case 4:s=t.sent,s&&"200"===s.code?(this.$notify({type:"danger",message:"输入的新密码与老密码一致！"}),this.newPaymentPsw="",this.ifShowLoading=!1):(this.$router.push({path:"/paymentPsw/set/confirm",query:{newPaymentPsw:this.newPaymentPsw,operate:this.$route.query.operate,routeName:this.$route.query.routeName}}),this.curPaymentPsw="",this.ifShowLoading=!1);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onInput:function(t){this.newPaymentPsw=(this.newPaymentPsw+t).slice(0,6)},onDelete:function(){this.newPaymentPsw=this.newPaymentPsw.slice(0,this.newPaymentPsw.length-1)}}},o=i,u=(n("a86e"),n("2877")),c=Object(u["a"])(o,s,a,!1,null,"685b6268",null);e["default"]=c.exports},a127:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"paymentPsw_update"}},[n("van-nav-bar",{attrs:{title:"修改支付密码","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}},[n("div",{staticClass:"currentProgress",attrs:{slot:"right"},slot:"right"},[n("span",{staticClass:"currentStep"},[t._v("1")]),n("span",{staticClass:"totalStep"},[t._v("/3")])])]),n("StepList",{attrs:{percentage:100/3}}),n("div",{staticClass:"mainContent g_container"},[n("h2",[t._v("输入原支付密码")]),n("van-password-input",{attrs:{value:t.curPaymentPsw,length:6,gutter:15,focused:!0}}),n("van-number-keyboard",{attrs:{show:!0},on:{input:t.onInput,delete:t.onDelete}})],1),n("VanLoading",{attrs:{"if-show-loading":t.ifShowLoading},on:{"update:ifShowLoading":function(e){t.ifShowLoading=e},"update:if-show-loading":function(e){t.ifShowLoading=e}}})],1)},a=[],r=(n("fb6a"),n("96cf"),n("89ba")),i={name:"PaymentPswUpdate",data:function(){return{ifShowLoading:!1,oldPaymentPsw:"123456",curPaymentPsw:""}},watch:{curPaymentPsw:function(t){6===t.length&&this.checkPaymentPsw()}},methods:{checkPaymentPsw:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.ifShowLoading=!0,e=this.$session.getCustomerInfo(),n=e.customerId,t.next=4,this.$api.payment.checkPsw({id:n,payPassword:this.curPaymentPsw});case 4:s=t.sent,s&&"200"===s.code?(this.$router.push({path:"/paymentPsw/set/enter",query:{operate:"修改",routeName:"settings"}}),this.ifShowLoading=!1):(this.$notify({type:"danger",message:"输入的原支付密码不正确！"}),this.curPaymentPsw="",this.ifShowLoading=!1);case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onInput:function(t){this.curPaymentPsw=(this.curPaymentPsw+t).slice(0,6)},onDelete:function(){this.curPaymentPsw=this.curPaymentPsw.slice(0,this.curPaymentPsw.length-1)}}},o=i,u=(n("fc43"),n("2877")),c=Object(u["a"])(o,s,a,!1,null,"08e857c4",null);e["default"]=c.exports},a86e:function(t,e,n){"use strict";var s=n("3bb1"),a=n.n(s);a.a},aaf6:function(t,e,n){"use strict";var s=n("1199"),a=n.n(s);a.a},fa90:function(t,e,n){},fc43:function(t,e,n){"use strict";var s=n("fa90"),a=n.n(s);a.a}}]);