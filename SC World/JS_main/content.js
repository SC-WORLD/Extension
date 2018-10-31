var css_ruler = {
	"borders_color":"*:not(a):not(button), #mainContainer *:not(a):not(button)::before {border-color:#color# !important}",
	"header_color": "._4f7n,._2s1x ._2s1y,._53jh, #fbTimelineHeadline, ._83k {background:#color# !important;border-color:#colorc# !important}"+
			"._4f7n:after{background:none !important;}"+
			"._53jh input,._585-, #fbTimelineHeadline, ._6-6{border-color:#colorc# !important}"+
			"._4kny .uiToggle:not(.hasNew) ._2n_9, ._4d1i ._59fb, ._5lxt {filter: invert(1)}",
	"theme_color": "body, .fbNubFlyoutFooter, div#globalContainer, #mainContainer, #leftCol, #facebook, #contentCol, #pageFooter, .fbChatSidebar, ._juy, "+
			"/*likes popup*/div._4-i2,/*mutal friend pop */._4-i0,"+
			"._iw3, ._cue, .fbNubFlyoutTitlebar, .pagesTimelineLayout #globalContainer,/*msg recv*/._1nc7 ._5w1r {background:#color# !important;}"+
			"._ipo, ._1g5v+._4arz, #rightColContent ul {background: none; !important}"+
			".sideNavItem *::after, .sideNavItem a{background:transparent !important; border-color:transparent !important;}"+
			".fbSettingsList a:hover, .sideNavItem a:hover, .fbxWelcomeBoxSmallRow:hover::after{background: rgba(0, 0, 0, 0.1) !important; border-color:transparent !important;}"+
			"#globalContainer,.fbIndex .gradient, ._4lh .fbTimelineTimePeriod, .loadingIndicator {background:#color# !important;}",
	"buttons_color":"._42fu, ._xag, ._3z5 ._3zr a, .uiButtonConfirm, ._xah, ._4jy1, ._517h, ._59pe, ._4jy2, ._3g_v, .uiButton, .uiButtonSuppressed {background:#color# !important;border-color:#colorc# !important} "+
	"._xag:hover, ._3z5 ._3zr a:hover, .uiButtonConfirm:hover, ._xah:hover, ._4jy1:hover, ._517h:hover, ._59pe:hover, ._4jy2:hover, ._3g_v:hover, .uiButton:hover, .uiButtonSuppressed:hover {background:#colorc# !important}",
	"text_color":"*, ._1nd3 a,.snippet span,  li._kv ._l3,._1n-e,._c24,.fcg, .sideNavItem a{color:#color# !important;}",
	"text_header_color":"._2s25, ._2s25 span, ._6-6, ._6-6 span, ._8_2 span, ._9ry {color:#color# !important;}",
	"message_title_theme":".clearfix.fbNubFlyoutTitlebar.titlebar._1m34{background: #color# !important}",
	"heading_color":".ellipsis,._3na7 ._4jy1, ._3na7 ._4jy2, a, .name,.name span, a span,a .accessible_elem,a ._l1,._3s6x,.__MenuItem span,.__MenuItem div,._5vb_, ._5vb_ #contentCol,._5qtp,button,button span,._5p3y .uiSideNav .item div,.uiButton input,label,label span{color:#color# !important;}",
	"inner_boxes_color":".tooltipContent, ._4arz span, ._t, .fbFeedTicker .fbFeedTickerStory, ._3soe, ._4-u8, .commentable_item, #globalContainer, html ._262m ._698, ._5vsj._5vsj._5vsj, ._5vsj .UFIRow, ._6m2, ._30f, ._1lot, #fbContextualHelpContent div, "+
			".pbs, .uiBoxWhite, .uiBoxLightblue, .uiScrollableAreaBody, .uiToggleFlyout, ._30d, .escapeHatchMinimal, .fbNubButton, ._53ij, .conversationContainer, .fbChatTypeahead ._4p-s, ._7a5, #documentation_body_pagelet td, .uiMenu, ._4t2a, ._3t09 {background:#color# !important;}"+
			".uiTypeahead, ._585-, ._5vb_ .home_right_column .fbFeedTicker .tickerStoryActive, ._5vb_ .home_right_column .fbFeedTicker .tickerStoryClickable:hover, ._1lor, ._kj3, .fbTimelineStickyHeader *, ._54ng, ._5i-7, ._3ubp, ._1cx1 ._ei_, ._3cz, ._g3h, ._1a8t, ._1xy2, ._5wcf, ._1nc6 ._d97, ._hh7, .uiBoxGray, ._344_, ._3iue, #documentation_body_pagelet th, ._25_a:hover, ._25_c, html ._55r1, ._6-7:hover, ._6-6:hover, ._9rx.openToggler, ._9ry:hover, ._33e, ._54ne, ._54ne a, ._55ln:hover {background:#colorc# !important; background-color:#colorc# !important;}"+
			".uiToggleFlyout *:not(button):not(._517h), .uiToggleFlyout *:not(button):not(._517h):hover, .mtm *, ._3ztw:hover, ._3ztw a{background-color: transparent !important;}"+
			"._2iwq,._2iwq div,._2iwq::before, ._sg1, ._5mac, ._3t3, ._3ow-, ._1_cb, ._4sp8, .displayedTickerToggleWrapper .tickerLineToggle {background:transparent !important}"+
			".UFICommentPhotoIcon, .UFICommentStickerIcon {filter: invert(1)}"+
			".uiScrollableAreaBody a {border-color:transparent !important}"+
			"._3c40, ._57d8, ._1jyk, .commentable_item *, ._4-h7:hover, ._19_3, div._5a8u, ._4o-g:hover {background-color:transparent !important}"+
			"._6lh ._6li, .UFIInputContainer, ._m_1, ._70l {background: rgba(0, 0, 0, 0.1) !important}"+
			"._558b ._54nc, .uiMenuItem .itemAnchor, ._s39 {border: none !important}"+
			"input, ._55r1, .fbChatSidebarMessage {background: #colorc#}"+
			".tooltipContent { border: 1px solid rgba(100, 100, 100, .4); box-shadow: 0 3px 8px rgba(0, 0, 0, .25) }",
}
function ColorLuminance(hex, lum) {
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}
	return rgb;
}

function load_theme(name_style) {
    var css = "";
    id_object = 0;
    css_t = "";
    if (name_style.indexOf("style_custom_") <0) {
        for (var id in css_ruler) {
            id_object++;
            css_t = css_ruler[id].replace(/#color#/g, theme[name_style][id]);
            css += css_t.replace(/#colorc#/g, ColorLuminance(theme[name_style][id], -0.2));
            if (id_object == Object.keys(css_ruler).length) {
                $(document).ready(function () {
                    $("body").append('<style id="css_general">' + css + '</style>');
                });
            }
        }
    } else {
        chrome.storage.sync.get({"theme_custom": []}, function (sc_world) {
            sc_world = sc_world["theme_custom"]
			i = name_style.replace("style_custom_", "")
			for(sc in sc_world[i]){
                        for (var id in css_ruler) {
                            id_object++;
                            css_t = css_ruler[id].replace(/#color#/g, sc_world[i][sc][id]);
                            css += css_t.replace(/#colorc#/g, ColorLuminance(sc_world[i][sc][id], -0.2));
                            if (id_object == Object.keys(css_ruler).length) {
                                $(document).ready(function () {
                                    $("body").append('<style id="css_general">' + css + '</style>');
                                });
                            }
                        }
                    }
        });
    }
}
count_time_miu=00;
    count_time_se=00;
    count_time_ho=00;
    hor='';
    sec='';
    miu='';
$(document).ready(function(){ $("body").append('<link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">' +
    '<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">' +
    '<style>.fa,.fas, .far{font-family: Font Awesome\\ 5 Free!important;}.fa-shield-alt{margin-top: 7px;}</style>');
chrome.storage.sync.get({"new_user": {},"time_set_se":{},"time_set_miu":{},"time_set_ho":{},"time_set_day":{},"timed_start":{},
    "style_fb":{}, "pri_fb":{}, "save_net": {}}, function (load_from) {
    if (load_from["new_user"] !="yes") { $("body").append('<div class="hello"><div class="modal"></div></div>'); }
    if(load_from["time_set_se"].length <=2 && load_from["time_set_day"]==new Date().getDate()){
        count_time_se=load_from["time_set_se"]; count_time_miu=load_from["time_set_miu"]; count_time_ho=load_from["time_set_ho"];}
    if(load_from["timed_start"].length <="2"){
        setInterval(function(){  chrome.storage.sync.set({'time_set_se': $('.time_set>span:nth-of-type(3)').text(), 'time_set_miu': $('.time_set>span:nth-of-type(2)').text(), 'time_set_ho': $('.time_set>span:nth-of-type(1)').text(), 'time_set_day': new Date().getDate()});
        },60000); }
    if(JSON.stringify(load_from["style_fb"]).length >=4){
		console.info(load_from["style_fb"]);
     load_theme(load_from["style_fb"]); }
    if(load_from["timed_start"] =="OK"){
        $(document).ready(function(){
        $('._cy6:nth-of-type(1) > ._4kny:nth-of-type(1)').after('<div class=\"_4kny _2s24 f_click\" style="font-family: \'Orbitron\', sans-serif;"><div class=\"_3qcu _cy7\" data-click=\"home_icon\" id=\"u_0_c\" style="font-weight: bold; color: aqua"><a class=\"_2s25 time_set\" data-gt=\"{&quot;chrome_nav_item&quot;:&quot;home_chrome&quot;}\" href=\"https://www.facebook.com/Ily1606\" accesskey=\"1\">' +
            setInterval(function(){ count_time_se++; if(count_time_se =="60"){count_time_miu++; count_time_se=0}if(count_time_miu =="60"){count_time_ho++; count_time_miu=0}if(count_time_se<="9"){sec="0"}if(count_time_se>="10"){sec=''}if(count_time_miu<="9"){miu="0"}if(count_time_miu>="10"){miu=''}if(count_time_ho<="9" && count_time_ho.length =="1"){hor="0"}if(count_time_ho>="10"){hor=""}if(count_time_ho + 0 =="0"){count_time_ho="0";} $(".time_set").html('<span>'+[hor,count_time_ho].join("")+'</span> : <span>'+[miu,count_time_miu].join("")+'</span> : <span>'+[sec,+count_time_se].join("")+'</span>');},1000)+
            '</a></div></div>');
    }); }
    if(load_from["pri_fb"] =="yes"){
        $(document).ready(function(){ $("._50tj").append("<i class=\"fas fa-shield-alt fa-2x\" title='Chế độ \"ẩn danh\" được bât'></i>");
		});
    }

});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.style == "sent_removed"){
	$("body").children("#css_general").each(function(){
		$(this).remove();
	});
    }
	else{
	$("body").children("#css_general").each(function(){
		$(this).remove();
	});
		load_theme(request.style);
	}
});
});