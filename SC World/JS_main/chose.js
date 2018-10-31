$(function(){
$('*').bind('contextmenu', function(e){
        return false;
});});
function load_theme_fb() {
    $(function () {
    $("#content1>.control").html("");
        object_id = 0;
        for (var id in theme) {
            object_id++;
            $("#content1>.control").append('<label for="style_' + object_id + '" chosse="_1" class="btn-radio ana" style="background: ' + theme[id]["theme_color"] + ';color: ' + theme[id]["text_color"] + '"><input type="radio" id="style_' + object_id + '" name="radio-grp" class="style_fb"><svg width="20px" height="20px" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9"></circle><path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" class="inner"></path><path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" class="outer"></path></svg><span>facebook</span></label>');
        }
        chrome.storage.sync.get({"theme_custom":[]},function(sc_world) {
           sc_world = sc_world["theme_custom"]
            for(i = 0; i < sc_world.length; i++) {
                object_id++;
                for(id in sc_world[i]){
                try{$("#content1>.control").append('<label for="style_custom_'+i+ '" chosse="_1" class="btn-radio ana canremove" style="background: ' + sc_world[i][id]["theme_color"]+ ';color: ' + sc_world[i][id]["text_color"] + '"><input type="radio" id="style_custom_' + i + '" name="radio-grp" class="style_fb"><svg width="20px" height="20px" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9"></circle><path d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z" class="inner"></path><path d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z" class="outer"></path></svg><span>facebook</span><i class="fas fa-trash-alt hidden" id="' + i + '"></i></label>');}catch(e){};
                if (i == sc_world.length - 1) {
                    $(".style_fb").click(function () {
                        get_id = $(this).attr("id");
                        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                            chrome.tabs.sendMessage(tabs[0].id, {style: get_id});
                        });
                        chrome.storage.sync.set({"style_fb": get_id});
                    });
                    $(".canremove>i").click(function (event) {
                     sc_world.splice($(this).attr("id").replace("style",""),1);
                       chrome.storage.sync.set({"theme_custom":sc_world});
                        load_theme_fb();
                        event.preventDefault();
                    });
                }
            }
            } });
        color_check();
    });
}
$(function(){
    chrome.storage.sync.get({"disable":{}},function(sc_world){
        disable = sc_world["disable"];
for(var status_dis in disable) {
    if (disable[status_dis]["status"] == "false") {
        $('body *[disable=' + status_dis + ']').append('<div class="disable"></div>');
    }
}
    });
})
load_theme_fb();
function Toats(message){
	$(".toats").text(message).fadeIn();
	setTimeout(function(){
	$(".toats").fadeOut().text("");	
	},3000);
}
$(function(){
    function check_if_ov(e) {
        $(function() {
            $("#content"+e+">div,#content"+e).scroll(function(){ if(($(this).scrollTop() + $(this).height()) < $(this)[0].scrollHeight){
                if($(this).find(".arrow")["length"] ==0){
                    $(this).append('<div class="arrow bounce"><a class="fa fa-arrow-down fa-1x" href="#"></a></div>'); }}
            else{
                $(".arrow").remove();
            }});
            $("#content"+e+">div,#content"+e).scroll();
            if ($("#content" + e)[0].scrollHeight > $("#content" + e).height() || $("#content" + e).children("div")[0].scrollHeight > $("#content" + e).height()) {
                if($("#content"+e).find(".arrow")["length"] ==0){
                    $("#content"+e).append('<div class="arrow bounce"><a class="fa fa-arrow-down fa-1x" href="#"></a></div>'); }}
            else{
                $(".arrow").remove();
            }
            a = 0;
            $(".add_color").click(function(){
                if(a == 0){ a++;
                $(".add_color").before('<div class="cancel_save">'+chrome.i18n.getMessage("cancel")+'</div>');
                $(".cancel_save").click(function(){  a = 0;   $(".add_color").text("Thêm chủ đề").removeClass("save_theme"); load_theme_fb(); $(".cancel_save").remove(); });
                $(this).text(chrome.i18n.getMessage("save_theme")).addClass("save_theme");
                $("#content1>.control").html("");
                $("#content1>.control").append('<div id="custom_theme"><span>'+chrome.i18n.getMessage("border")+'</span><input type="color" id="main_color"><input type="text" id="main_color"></div>' +
                    '<div id="custom_theme"><span>'+chrome.i18n.getMessage("header")+'</span><input type="color" id="main_color"><input type="text" id="main_color"></div>'+
                '<div id="custom_theme"><span>'+chrome.i18n.getMessage("main")+'</span><input type="color" id="main_color"><input type="text" id="main_color"></div>'+
                    '<div id="custom_theme"><span>'+chrome.i18n.getMessage("button")+'</span><input type="color" id="main_color"><input type="text" id="main_color"></div>'+
                    '<div id="custom_theme"><span>'+chrome.i18n.getMessage("color_main")+'</span><input type="color" id="main_color"><input type="text" id="main_color"></div>'+
                    '<div id="custom_theme"><span>'+chrome.i18n.getMessage("color_header")+'</span><input type="color" id="main_color"><input type="text" id="main_color"></div>'+
                '<div id="custom_theme"><span>'+chrome.i18n.getMessage("heading")+'</span><input type="color" id="main_color"><input type="text" id="main_color"></div>'+
                    '<div id="custom_theme"><span>'+chrome.i18n.getMessage("inner_box")+'</span><input type="color" id="main_color"><input type="text" id="main_color"></div>'+
                    '<div id="custom_theme"><span>'+chrome.i18n.getMessage("messager_box")+'</span><input type="color" id="main_color"><input type="text" id="main_color"></div>');
            $("#custom_theme>input:nth-of-type(1)").change(function(){ $(this).next().val($(this).val()); });
             $("#custom_theme>input:nth-of-type(2)").keyup(function(){ $(this).prev().val($(this).val()); });
             $("#custom_theme>input:nth-of-type(1)").change(); }
            else{ a--;  $(".cancel_save").remove();
                    chrome.storage.sync.get({"theme_custom":[]},function(sc_world) {
                        array_theme = sc_world["theme_custom"];
                        b = '{"style_' + sc_world["theme_custom"].length + '": {"borders_color": "'+$("#custom_theme:nth-of-type(1)>input:nth-of-type(2)").val()+'","header_color": "'+$("#custom_theme:nth-of-type(2)>input:nth-of-type(2)").val()+'","theme_color": "'+$("#custom_theme:nth-of-type(3)>input:nth-of-type(2)").val()+'","buttons_color": "'+$("#custom_theme:nth-of-type(4)>input:nth-of-type(2)").val()+'","text_color": "'+$("#custom_theme:nth-of-type(5)>input:nth-of-type(2)").val()+'","text_header_color": "'+$("#custom_theme:nth-of-type(6)>input:nth-of-type(2)").val()+'","heading_color": "'+$("#custom_theme:nth-of-type(7)>input:nth-of-type(2)").val()+'","inner_boxes_color": "'+$("#custom_theme:nth-of-type(8)>input:nth-of-type(2)").val()+'","message_title_theme": "'+$("#custom_theme:nth-of-type(9)>input:nth-of-type(2)").val()+'"}}';
                        b = JSON.parse(b);
                        array_theme.push(b);
                        chrome.storage.sync.set({"theme_custom": array_theme});
                    });
            $(this).text("Thêm chủ đề").removeClass("save_theme");
                    load_theme_fb();
                }});
        });
    }
    check_if_ov(1);
    $("main>label").click(function(){ check_if_ov(parseInt($(this).attr("for").replace("tab","")));});
$(".title_hor").text($(".title_hor").text()+" THÁNG "+new Date().getMonth());
	chrome.storage.sync.get({"news":{}},function(data){ var i = Math.floor(Math.random() * data["news"].length); $(".news").text(data["news"][i]);});
	setInterval(function(){
	chrome.storage.sync.get({"news":{}},function(data){ var i = Math.floor(Math.random() * data["news"].length); $(".news").text(data["news"][i]);});
	},20000);
	chrome.storage.sync.get({"hornor":{}},function(data){ data= data["hornor"]; if(data !="null"){ for(var i =0; i < data.length; i++){
		$(".member_list").append('<div class="pos_'+i+'"><img src="http://graph.facebook.com/' + data[i].split('-')[0] + '/picture?type=normal"><div class="name_pos'+i+'">'+data[i].split('-')[1]+'</div></div>');
	}
	}
	else{
		$(".member_list").append('<div class="empty">Hiện tại không có data, vui lòng thử lại sau</div>');
	}
	})
});
chrome.storage.sync.get({"websafe":{},"style_fb": {}, "old_color": {},"timed_start": {},"block_bit_coin": {},"block_typ": {},"block_typ_com": {},"pri_fb": {},"save_net": {},"block_pm": {},"edit": {},
    "style_sound_1": {},"style_sound_3": {},"style_sound_2": {},"clickjacking":{},"blockads":{}}, function (load_from) {
    if (load_from["style_fb"].length >= 6) {
		$(document).ready(function(){
            if (load_from["style_fb"].indexOf("style_custom_") <0) {
                $("#" + load_from["style_fb"]).prop("checked", true);
                $('.turn_on input').prop('checked', true);
            }
            else{
                $(document).ready(function(){
                $("#" + load_from["style_fb"]).prop("checked", true);
                $('.turn_on input').prop('checked', true); }); }
	});
    }
	 if(load_from["websafe"] =="yes"){
        $(".websafe").addClass("check");
    }
	if(load_from["blockads"] =="yes"){
        $(".blockads").addClass("check");
    }
    if (load_from["timed_start"].length <=2) {
        $(".time").addClass("check");}
    if (load_from["block_bit_coin"].length <=3) {
        $(".bitcoin").addClass("check");}
    if (load_from["block_typ"] =="yes") {
        $(".typ").addClass("check");}
    if (load_from["block_typ_com"] =="yes") {
        $(".typ_com").addClass("check");}
    if (load_from["pri_fb"] =="yes") {
        $(".pri").addClass("check");}
    if (load_from["save_net"] =="yes") {
        $(".save").addClass("check");}
    if (load_from["block_pm"].length<="3") {
        $(".seen").addClass("check"); }
	if(load_from["clickjacking"] =="yes"){
       $(".jacking").addClass("check");
    }
    if (load_from["style_sound_1"] == "sound_type_1") {
        $(".sound_mess .on_1 span").addClass("border_red"); $(".sound_mess").addClass("check");
    }
    else if (load_from["style_sound_1"] == "sound_type_2") {
        $(".sound_mess .on_2 span").addClass("border_red"); $(".sound_mess").addClass("check");
    }
    if (load_from["style_sound_3"] == "sound_type_1") {
        $(".sound_call .on span").addClass("border_red"); $(".sound_call").addClass("check");
    }
    if (load_from["style_sound_2"] == "sound_type_1") {
        $(".sound_in .on span").addClass("border_red"); $(".sound_in").addClass("check");
    }
});

function check_color(){
	 chrome.storage.sync.get({"style_fb": {}},function(sc_world){
			 if(JSON.stringify(sc_world["style_fb"]).length >4){
			chrome.storage.sync.remove("style_fb");	
 chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {style: "sent_removed"});
            });
            		
			 }
		   });
}
function color_check(){
	 chrome.storage.sync.get({"style_fb": {}},function(sc_world){
			 if(JSON.stringify(sc_world["style_fb"]).length >4){
                 $(".modal_content1").hide();
}
else{
                 if($(".control").find(".modal_content1")["length"] ==0) {
                     $(".control").append('<div class="modal_content1"></div>');
                 }
	$(".modal_content1").show()
}
	 });
}
color_check();
$(function() {
    $(".style_fb").click(function () {
		get_id = $(this).attr("id");
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {style: get_id});
        });
        chrome.storage.sync.set({"style_fb": get_id});
    });
        $(".turn_on input").click(function(){
			if($(this).is(':checked')){
			$(".modal_content1").hide(); }
			else{
			$(".modal_content1").show();
			}
			check_color();
        });
});
$(function() {
    $(".time .on").click(function () {
        chrome.storage.sync.set({"timed_start": "OK"});
        $("div.time").addClass("check");
    });
    $(".time .off").click(function () {
        chrome.storage.sync.remove("timed_start", function () {
         $("div.time").removeClass("check");
        });
    });
    $(".time .reset").click(function () {
        chrome.storage.sync.remove("time_set_se");
        chrome.storage.sync.remove("time_set_miu");
        chrome.storage.sync.remove("time_set_ho");
        chrome.storage.sync.remove("time_set_day");
    });
	$(".websafe .on").click(function () {
        chrome.storage.sync.set({"websafe": "yes"});
		 $("div.websafe").addClass("check");
    });
    $(".websafe .off").click(function () {
		 $("div.websafe").removeClass("check");
        chrome.storage.sync.remove("websafe", function () {
        });
    });
    $(".bitcoin .on").click(function () {
        chrome.storage.sync.set({"block_bit_coin": "yes"});
		 $("div.bitcoin").addClass("check");
    });
    $(".bitcoin .off").click(function () {
		 $("div.bitcoin").removeClass("check");
        chrome.storage.sync.remove("block_bit_coin");
    });
    $(".seen .on").click(function () {
        chrome.storage.sync.set({"block_pm": "yes"});
		$("div.seen").addClass("check");
    });
    $(".seen .off").click(function () {
		$("div.seen").removeClass("check");
        chrome.storage.sync.remove("block_pm", function () {
        });
    });
    $(".typ .on").click(function () {
		$("div.typ").addClass("check");
        chrome.storage.sync.set({"block_typ": "yes"});
    });
    $(".typ .off").click(function () {
		$("div.typ").removeClass("check");
        chrome.storage.sync.remove("block_typ");
    });
    $(".typ_com .on").click(function () {
        chrome.storage.sync.set({"block_typ_com": "yes"});
        $("div.typ_com").addClass("check");
    });
    $(".typ_com .off").click(function () {
		$("div.typ_com").removeClass("check");
        chrome.storage.sync.remove("block_typ_com");
    });
    $(".count-mess .open").click(function () {
        chrome.tabs.create({url: "/HTML/no-facebook.html"});
    });
    $(".status .open").click(function () {
        chrome.tabs.create({url: "/HTML/status_security_facebook.html"});
    });
    $(".who_online .open").click(function () {
        chrome.tabs.create({url: "/HTML/find_online.html"});
    });
    $(".hs_message .open").click(function () {
        chrome.tabs.create({url: "/HTML/history_message.html"});
    });
    $(".get_token .open").click(function () {
        chrome.tabs.create({url: "/HTML/get_token.html"});
    });
	$(".grow_rep .open").click(function(){
		chrome.tabs.create({url:"/HTML/grow_rep.html"});
	});
$(".cookie .open").click(function () {
        chrome.tabs.create({url: "/HTML/edit.html"});
});
    $(".pri .on").click(function () {
        chrome.storage.sync.set({"pri_fb": "yes"});
         $("div.pri").addClass("check");
    });
    $(".pri .off").click(function () {
		$("div.pri").removeClass("check");
        chrome.storage.sync.remove("pri_fb");
    });
    $(".save .on").click(function () {
        chrome.storage.sync.set({"save_net": "yes"});
         $("div.save").addClass("check");
    });
    $(".save .off").click(function () {
		$("div.save").removeClass("check");
        chrome.storage.sync.remove("save_net", function () {
        });
    });
    $(".jacking .on").click(function () {
        chrome.storage.sync.set({"clickjacking": "yes"});
        $("div.jacking").addClass("check");
    });
    $(".jacking .off").click(function () {
		$("div.jacking").removeClass("check");
        chrome.storage.sync.remove("clickjacking");
    });
    $(".best-fr .open").click(function () {
        chrome.tabs.create({url: "/HTML/InitialChatFriendsList.html"});
    });
});

// Main_load
    $(function () {
        $(".update .open").click(function () {
            $.getJSON("/manifest.json", function (json) {
                $.getJSON("http://whiteweb.tk/data/check.json",function(update){
				if(json["version"] !=update["version"]){
					Toats("Đã có phiên bản mới, vui lòng cập nhật!");
				}
				else{
					Toats("Phiên bản của bạn là phiên bản mới nhất!");
				}
				});
            });
        });
		$(".reset_all .open").click(function(){ chrome.storage.sync.clear(function(){ Toats("Đã đặt về mặc định, đang khởi động lại..."); setTimeout(function(){ window.location.reload(); },2900); });});
		$(".full_screen .open").click(function(){
		chrome.tabs.create({url:"/HTML/AJI 3.html"});
		});
		$(".mina_monitor .open").click(function(){
		chrome.tabs.create({url:"/HTML/console_mina.html"});
		});
		$(".vote .open").click(function(){
		chrome.tabs.create({url:"https://chrome.google.com/webstore/detail/sc-world/ejoenliehjgioblihdlfpakgfhghjgkf/reviews?hl=vi"});
		});
        $(".report .open").click(function () {
            chrome.tabs.create({url: "http://whiteweb.tk/report/report_online.php"});
        });
    });
    $(function () {
        $(".sound_mess .on_1").click(function () {
            chrome.storage.sync.set({"style_sound_1": "sound_type_1"});
			$(".sound_mess").addClass("check");
			$(".sound_mess .off span").removeClass("border_red");
			$(".sound_mess .on_2 span").removeClass("border_red");
		   $(".sound_mess .on_1 span").addClass("border_red");
        });
        $(".sound_mess .on_2").click(function () {
            chrome.storage.sync.set({"style_sound_1": "sound_type_2"});
			$(".sound_mess").addClass("check");
			$(".sound_mess .off span").removeClass("border_red");
			$(".sound_mess .on_1 span").removeClass("border_red");
            $(".sound_mess .on_2 span").addClass("border_red");
        });
        $(".sound_call .on").click(function () {
            chrome.storage.sync.set({"style_sound_3": "sound_type_1"});
			$(".sound_call .off span").removeClass("border_red");
            $(".sound_call .on span").addClass("border_red");
        });
        $(".sound_in .on").click(function () {
            chrome.storage.sync.set({"style_sound_2": "sound_type_1"});
			$(".sound_in .off span").removeClass("border_red");
            $(".sound_in .on span").addClass("border_red");
        });
		$(".sound_in .off").click(function () {
		$(".sound_in .on span").removeClass("border_red");
		$(".sound_in .off span").addClass("border_red");
        chrome.storage.sync.remove("style_sound_2");
		});
		$(".sound_mess .off").click(function () {
		$(".sound_mess .on_1 span, .sound_mess .on_2 span").removeClass("border_red");
		$(".sound_mess .off span").addClass("border_red");
        chrome.storage.sync.remove("style_sound_1"); });
    $(".sound_call .off").click(function () {
		$(".sound_call .off span").addClass("border_red");
		$(".sound_call .on span").removeClass("border_red");
        chrome.storage.sync.remove("style_sound_3");
    });
	$(".stopapp .open").click(function(){
		chrome.runtime.sendMessage({stop_me: "true"});
	});
	$(".stopapp .setting").click(function(){
		chrome.tabs.create({url:"/HTML/setting_optimization.html"});
	});
    });
//style_sound_1 is tin_nhan, style_sound_2 is thong_bao, style_sound_3 is call
// Zucker Crush
$(function(){
	$(".dow_photo .down").click(function(){
		chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {zc_function: "down_photo"});
        });
	});
	$(".dow_video .down").click(function(){
		chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {zc_function: "down_video"});
        });
	});
	$(".dow_storie_photo .down").click(function(){
		chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {zc_function: "down_storie_photo"});
        });
	});
	$(".dow_storie_video .down").click(function(){
		chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {zc_function: "down_storie_video"});
        });
	});
	$(".dow_storie_fb .down").click(function(){
		chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {zc_function: "down_storie_fb"});
        });
	});
	$(".shield .on").click(function(){
		chrome.runtime.sendMessage({zc_function: "turn_on_shield"});
	});
	$(".shield .off").click(function(){
		chrome.runtime.sendMessage({zc_function: "turn_off_shield"});
	});
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	if(request.repsonse){
Toats(request.repsonse);		} });
});