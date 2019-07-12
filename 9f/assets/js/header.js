var headerEle = "<div id='jfHeader'>"+
"<div class='container'>"+
    "<div class='lt'>"+
       "<a href='javascript:void(0)'>"+
            "<img src='../assets/images/logo_9f_red_190x24.png' alt='玖富开放平台'/>"+
        "</a>"+
    "</div>"+
    "<div class='ct'>"+
        "<ul id='headerNav' class='clearfix'>"+
            "<li><a href='./index.html'>首页</a></li>"+
            "<li><a href='./resource-center.html'>资源中心</a></li>"+
            "<li><a href='./management-center.html'>管理中心</a></li>"+
            "<li><a href='./account-center.html'>账号中心</a></li>"+
            "<li><a target='_blank' href='https://www.9fgroup.com/introduce.html'>关于集团</a></li>"+
        "</ul>"+
    "</div>"+
    "<div class='rt'>"+
        "<div class='loginStatus'>"+
            "<div class='toggle'>"+
                "<span class='via'><img src='../assets/images/icon_userHeader.png' alt='user via'/></span>"+
                "<span class='name'>李筱明</span>"+
                "<span class='arrow'></span>"+
            "</div>"+
            "<ul class='subMenu'>"+
                "<li><a href='../index.html'>退出</a></li>"+
            "</ul>"+
        "</div>"+
        "<span class='alertMsg'><img src='../assets/images/icon_alertMsg_14x16.png' alt='alert Message'/></span>"+
    "</div>"+
"</div>"+
"</div>";

$("#wrapper").prepend(headerEle);

$("#jfHeader .rt .loginStatus .toggle").click(function(){
    $("#jfHeader .rt .loginStatus .subMenu").slideToggle('fast');
});
$(document).click(function(){
    $("#jfHeader .rt .loginStatus .subMenu").slideUp('fast');
});
$("#jfHeader .rt .loginStatus .toggle, #jfHeader .rt .loginStatus .subMenu").bind('click',function(e){
    stopPropagation(e);
});
function stopPropagation(e) {
	if (e.stopPropagation)
		e.stopPropagation();
	else
		e.cancelBubble = true;
}