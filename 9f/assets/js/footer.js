if(!baseUrl){
    var baseUrl = '../';
}
var footerEle = "<div id='jfFooter'>"+
    "<div class='container'>"+
        "<div class='lt'>"+
            "<div class='linkGrp'>"+
            "<a href='javascript:void(0)'><img src='" +baseUrl+ "assets/images/footerlink1.png' alt='玖富'/></a>"+
            "<a href='javascript:void(0)'><img src='" +baseUrl+ "assets/images/footerlink2.png' alt='玖富'/></a>"+
            "<a href='javascript:void(0)'><img src='" +baseUrl+ "assets/images/footerlink3.png' alt='玖富'/></a>"+
            "<a href='javascript:void(0)'><img src='" +baseUrl+ "assets/images/footerlink4.png' alt='玖富'/></a>"+
            "<a href='javascript:void(0)'><img src='" +baseUrl+ "assets/images/footerlink5.png' alt='玖富'/></a>"+
            "</div>"+
            "<p class='cr'>Copyright©2006-2017 玖富数科科技集团有限责任公司 京ICP备07003840号-2 京ICP证070133号 <span><img src='" +baseUrl+ "assets/images/icon_guohui.png' alt='玖富'/> 京公网安备 11010502035429号</span></p>"+
        "</div>"+
        "<div class='rt'>"+
            "<img src='" +baseUrl+ "assets/images/barcode_9f_86x86.png' alt='玖富二维码' class='img_9fbarcode' />"+
            "<ul>"+
                "<li>"+
                    "<a href='javascript:void(0)'><img src='" +baseUrl+ "assets/images/icon_wechat_24x20.png' alt='联系玖富' /></a>"+
                    "<a href='javascript:void(0)'><img src='" +baseUrl+ "assets/images/icon_weibo_24x20.png' alt='联系玖富' /></a>"+
                "</li>"+
                "<li>400-810-8818</li>"+
                "<li>集团客服热线(9:30-21:00)</li>"+
            "</ul>"+
        "</div>"+
    "</div>"+
    "</div>";

$("#wrapper").append(footerEle);