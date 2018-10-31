$(function(){
function toats(message){
$(".toats").html(message);
$(".toats").fadeIn();
setTimeout(function(){$(".toats").fadeOut(); $(".toats").html("");},2000);
}
function change_voice(voice_chosse){
	chrome.storage.sync.set({"voice_ass":voice_chosse});
}
function load_voice(){
	chrome.storage.sync.get({"voice_ass":{}},function(ass){
	if(ass["voice_ass"] =="hatieumai"){
	$("#rdo-1").prop('checked', true);
	}
	if(ass["voice_ass"] =="female"){
	$("#rdo-2").prop('checked', true);
	}
	else if(ass["voice_ass"] =="ngoclam"){
	$("#rdo-3").prop('checked', true);
	}
	else if(ass["voice_ass"] =="male"){
	$("#rdo-5").prop('checked', true);
	}
	if(JSON.stringify(ass["voice_ass"]).length <=2 || ass["voice_ass"] =="default"){
	$("#rdo-4").prop('checked', true);
	}
	});
}
load_voice();
function set_session(){
	$.ajax({url: "http://whiteweb.tk/myna/started.php", method: "get", success: function(e) {
	    chrome.storage.sync.set({"session":e["session"]});
        }})
}
chrome.storage.sync.get({"session":{}},function(e){
    if(e["session"] ==null){
        set_session()
    }
    });
time_ok =0;
function voice_chat(a){
	setTimeout(function(){
		$(".your_speak>span").text("");
	},3000);
		$(".your_speak>span").text("Bạn đã nói: "+a);
	if(a == "sẵn sàng"){
	if(time_ok ==0){
		$("ul#check>li:nth-of-type(1)").html("Nói thêm 2 lần nữa");
	}
	else if(time_ok ==1){
		$("ul#check>li:nth-of-type(2)").html("Nói thêm 1 lần nữa")
	}
	else if(time_ok >=2){
	$("ul#check>li:nth-of-type(3)").html("Hoàn tất");
	chrome.storage.local.set({"assistant":"true"},function(sc_world){
	window.location.reload();
	})
	}
        time_ok++;
	}
}
function hide_error(){ 
setTimeout(function(){ $("#status_err").text("No error").removeClass("error"); },10000);
}
function open_tab(url){
chrome.tabs.create({url: url });
}
function change_tab(index){
chrome.windows.getLastFocused(
 {populate: true},
 function (window)
 {  
    chrome.tabs.update(window.tabs[(index-1)].id, {active: true});
  });
}
function speak_voice(url){
	var win = new Audio(url);
    win.play();
}
function close_tab(index){
	if(index !="current"){
				chrome.tabs.query({},function(sc_world){
			 chrome.tabs.remove(sc_world[(index-1)].id,function(){
			 });
	}); } else{
				chrome.tabs.getCurrent(function(tab) {
    chrome.tabs.remove(tab.id, function(){robot_speak(speak)});
				});
			}
			}
function send(a,status){
	$(".connect_ss>div:nth-of-type(1)").addClass("ss1");
	$("#status_text_send").text("Pending...");
	setTimeout(function(){
	$(".connect_ss>div:nth-of-type(1)").removeClass("ss1");
	},2000);
	chrome.storage.local.get({"conves_ass":[],"user_info":[]},function(data_ass){
	chrome.storage.sync.get({"voice_ass":{},"session":{}},function(voice_ass){
		voice_ass = voice_ass["voice_ass"];
if(status ==true){
	$(".conve>table").append('<tr><td class="you_chat">'+a+'</td></tr>');
		ass = data_ass["conves_ass"];
		user_info =data_ass["user_info"];
		ass.push({"you_speak":a});
	chrome.storage.local.set({"conves_ass":ass});}
	$("#chat").val("");
	setTimeout(function(){
	$.ajax({ url: "http://whiteweb.tk/myna/AI.php?get=extension&speak_voice="+voice_ass+"&speak="+a+"&parse=json&session="+voice_ass["session"],
type : "GET",
async: false,
success: function(data){
$(".connect_ss>div:nth-of-type(2)").addClass("ss2");
$("#status_text_send").text("Thành công!").addClass("status_send_sucess");
	setTimeout(function(){
	$(".connect_ss>div:nth-of-type(2)").removeClass("ss2");
	$("#status_text_send").text("No send").removeClass("status_send_sucess");
	},2000);
data = JSON.parse(data);
speak = data["speak"];
custom_payload = data["custom_payload"];
action = data["action"];
background_send = data["background_send"];
audio_speak = data["audio_speak"];
$(".conve").animate({ scrollTop: $('.conve')[0].scrollHeight }, 300);
if(speak.length >=1){
$(".conve>table").append('<tr><td class="mina_chat">'+speak+'</td></tr>');
ass.push({"mina_speak":speak});
chrome.storage.local.set({"conves_ass":ass});
}
if(JSON.stringify(audio_speak).length >4){
speak_voice(audio_speak);
}
if(JSON.stringify(custom_payload).length >=6){
//load custom;
$(".conve>table").append('<tr><td class="mina_chat"><div class="custom_pay"><div class="header_pay"><div>'+custom_payload["weather"]["location"]+'</div><div>'+custom_payload["weather"]["lastupdate"]+'</div></div><div class="body_pay"><div class="temp_c">'+custom_payload["weather"]["temp_c"]+'</div><img src="http:'+custom_payload["weather"]["icon"]+'"><div class="temp_f">'+custom_payload["weather"]["temp_f"]+'</div></div><div class="fotter_pay">'+custom_payload["weather"]["text"]+'</div></div></td></tr>');
ass.push({"mina_speak":custom_payload});
chrome.storage.local.set({"conves_ass":ass});
}
if(JSON.stringify(background_send).length >=6){
if(background_send["require"] =="location_gl"){
location_gl = user_info[0]["location"];
message = background_send["message"].replace("%location_gl%",location_gl);
send(message,false);
}
}

if(JSON.stringify(action).length >=6){
//action
if(action["new_tab"] !=undefined){
open_tab(action["new_tab"]["url"]);
}
if(action["change_tab"] !=undefined){
	change_tab(action["change_tab"]);
}
if(action["close_tab"] !=undefined){
close_tab(action["close_tab"]);	
}
if(action["new_tab_custom"] !=undefined){
chrome.storage.sync.get({"short_app":[]},function(ass){
ass = ass["short_app"];
check_open = false;
for(var i = 0; i < ass.length; i++){
title_app = ass[i]["title"].toLowerCase();
if(title_app == action["new_tab_custom"]["name_object"]){
check_open = true;
console.info("OK");
open_tab(ass[i]["url"]);
return;
}
if(i ==ass.length - 1 && check_open == false){
console.info("NO");
a = "not find "+title_app;
send(a,false);
}
}
});
}
}
},
error: function(e){
	$("#status_err").addClass("error").text("Lỗi không thể kết nối đến máy chủ. Mã lỗi: "+e["status"]);
	$("#status_text_send").text("Lỗi kết nối!").addClass("status_send_error");
	setTimeout(function(){
		$("#status_text_send").text("No send").removeClass("status_send_error");
	},2000);
	hide_error();
}
 });
	},1000);
	});
	});
}
$("#status_err").text("No error");
$(".advan").click(function(){
chrome.runtime.sendMessage({require_ass: "voice"});
});
$(".basic").click(function(){
chrome.runtime.sendMessage({require_ass: "no_voice"});
});
$(".news").click(function(){ 
if($("head").find("#load_news")["length"] ==0){
$(".loading").show();
setTimeout(function(){
	$(".loading").hide();
	},3000);
var element = document.createElement("script");
    element.src = "/JS_main/news_mina.js";
    element.id = "load_news";
    document.head.appendChild(element);
}
});
function voice_check(from){
	setTimeout(function(){
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  a ='';
  recognition.lang = 'vi-VN';
  recognition.start();
},1000);
			  var final_transcript = '';
var recognizing = false;
if ('webkitSpeechRecognition' in window) {

  var recognition = new webkitSpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
	$("#voice_a").css({"color":"deepskyblue"});
    recognizing = true;
  };

  recognition.onerror = function(event) {
	  hide_error();
	$("#voice_a").css({"color":"#000"});
   if(event.error =="aborted"){
	$("#status_err").addClass("error").text("Lỗi không thể chạy microphone, có thể do xung đột. Mã lỗi: "+event.error);
   }
   else if(event.error =="network"){
	$("#status_err").addClass("error").text("Lỗi không thể kết nối internet. Mã lỗi: "+event.error);
   }
   else if(!(event.error =="network" || event.error =="aborted")){
	 $("#status_err").addClass("error").text("Lỗi không xác định. Mã lỗi: "+event.error);
   }
  };

  recognition.onend = function() {
  $("#voice_a").css({"color":"#000"});
    recognizing = false;
     if(from =="setup_ass"){
         voice_check("setup_ass")
     }
  };

  recognition.onresult = function(event) {
      if(from =="setup_ass"){
          voice_check("setup_ass")
      }
    var interim_transcript = '', a =''; b='';
    for (var i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        a = event.results[i][0].transcript.trim().toLowerCase();
		if(from =="input_chat"){
		$("#chat").val(a);
		send(a,true);}
		else if(from =="setup_ass"){
		voice_chat(a);
		}
		chrome.runtime.sendMessage({your_speak_message: a});
      } else {
        b += event.results[i][0].transcript;
		if(from =="input_chat"){
		$("#chat").val(b);
		}
		else if(from =="setup_ass"){
		voice_chat(b);
		}
      }
    }
  };
}
}
chrome.storage.local.get({"assistant":{}},function(sc_world){
if(sc_world["assistant"] !="true"){
	$(".full_screen").remove();
	$(".full_screen").hide();
	$("#ready").click(function(){
	navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ audio: true },
      function(stream) {
		  var track = stream.getTracks()[0];
track.stop();
voice_check("setup_ass");
		  $("ul#check").show();
		  $(".begin").text('Trước khi chúng tôi khởi động trợ lý ảo, vui lòng để chúng tôi kiểm tra micro của bạn. Oke bây giờ hãy nói: "Sẵn sàng".');
		  $("button#ready").hide();

      },
      function(err) {
         $(".begin").text("Không thể kết nối với micro của bạn, mã lỗi: " + err.name);
      }
   );
} else {
  $(".begin").text("Thiết bị của bạn không hỗ trợ micro!");
}
});
}else{
	$(".wellcome").remove();
	$(".robot").addClass("begin");
	$(".robot_dot").addClass("wait");
	setTimeout(function(){
		$(".robot").removeClass("begin").addClass("started");
		
	},3000);
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
if(request.speak){ $(".dot_1").addClass("speak");	$(".robot .message").show().text(request.speak); }
if(request.end_speak){
	$(".dot_1").removeClass("speak"); setTimeout(function(){ $(".robot .message").hide().text("");},1500);
}
if(request.your_speak){
	$(".head").addClass("speak"); $(".humman .message").show()
}
if(request.your_speak_message){
	$(".humman .message").show().text(request.your_speak_message); setTimeout(function(){ $(".humman .message").hide().text("");},1500);
}
});
function load_his(){
	$(".conve>table").html("");
	chrome.storage.local.get({"conves_ass":[]},function(ass){
		for(var i = 0; i < ass["conves_ass"].length; i++){
			ass_get = ass["conves_ass"][i];
		try{if(ass_get["you_speak"]){ $(".conve>table").append('<tr><td class="you_chat">'+ass_get["you_speak"]+'</td></tr>'); }else{ 
		if(ass_get["mina_speak"]["weather"]){
		custom_payload = ass_get["mina_speak"];
			$(".conve>table").append('<tr><td class="mina_chat"><div class="custom_pay"><div class="header_pay"><div>'+custom_payload["weather"]["location"]+'</div><div>'+custom_payload["weather"]["lastupdate"]+'</div></div><div class="body_pay"><div class="temp_c">'+custom_payload["weather"]["temp_c"]+'</div><img src="http:'+custom_payload["weather"]["icon"]+'"><div class="temp_f">'+custom_payload["weather"]["temp_f"]+'</div></div><div class="fotter_pay">'+custom_payload["weather"]["text"]+'</div></div></td></tr>');
		}else{$(".conve>table").append('<tr><td class="mina_chat">'+ass_get["mina_speak"]+'</td></tr>');} }}catch(e){ 
		};
		}
	});
};
function load_u_info(){
$("#info_u_content input").val("");
chrome.storage.local.get({"user_info":[]},function(ass){
for(var j = 0; j < ass["user_info"].length; j++){
			ass_get = ass["user_info"][j];
		$("input.firstname").val(ass_get["firstname"]);
		$("input.lastname").val(ass_get["lastname"]);
		$("input.birthday").val(ass_get["birthday"]);
		$("input.location").val(ass_get["location"]);
		}
});
}
load_u_info();
load_his();
$("#chat").on({
	keypress: function(e){
		if(e.keyCode == 13 && $("#chat").val() !=""){
			var a = $("#chat").val().trim();
	send(a,true);
	}
}});
$("#send_a").click(function(){
	if($("#chat").val() !=""){
	var a = $("#chat").val().trim();
	send(a,true);
	}
});
$("#voice_a").click(function(){
	voice_check("input_chat");
});
$("#info_u_content input").keyup(function(){
	$("div.save_info").show();
});
$("div.save_info").click(function(){
	firstname = $("input.firstname").val();
	lastname = $("input.lastname").val();
	fullname = firstname+" "+lastname;
	birthday = $("input.birthday").val();
	locations = $("input.location").val();
	full_data = [{"user_name":fullname,"firstname":firstname,"lastname":lastname,"birthday":birthday,"location":locations}];
	chrome.storage.local.set({"user_info":full_data});
	$(this).hide();
	});
$(".add_app_modal").click(function(){
	$("#add_app_content").append('<div class="value_app"><div class="inline-block"><input class="title_web" placeholder=" "><span>Tên website</span></div><div class="inline-block"><input class="url_web" placeholder=" "><span>URL website</span></div></div>');
	$(this).hide(); check_keyup();
});
function load_short_app(){
chrome.storage.sync.get({"short_app":[]},function(ass){
ass = ass["short_app"];
$("#add_app_content").html("");
for(var i = 0; i < ass.length; i++){
title_app = ass[i]["title"];
url_app = ass[i]["url"];
$("#add_app_content").append('<div class="value_app"><div class="inline-block"><input class="title_web" placeholder=" " value="'+title_app+'"><span>Tên website</span></div><div class="inline-block"><input class="url_web" placeholder=" " value="'+url_app+'"><span>URL website</span></div></div>');
check_keyup();
}
}); }
load_short_app();
function check_keyup(){
$("#add_app_content input").keyup(function(){ $(".save_app").show(); $(".add_app_modal").show(); }); }
$(".save_app").click(function(){
full_data =[];
$(".value_app").each(function(){
title_app = $(this).children("div").children(".title_web").val();
url_web = $(this).children("div").children(".url_web").val();
full_data.push({"title":title_app,"url":url_web});
chrome.storage.sync.set({"short_app":full_data},function(){ $(".save_app").hide(); load_short_app(); });
});
});
function clear_data_u(){
chrome.storage.sync.remove("short_app");
chrome.storage.local.remove("user_info");
load_short_app();
load_u_info();
}
function clear_conves(){
chrome.storage.local.remove("conves_ass");
load_his();
}
$(".reset_data").click(function(){
toats("Đã xóa dữ liệu người dùng.");
clear_data_u();
});
$(".reset_conves").click(function(){
toats("Đã xóa dữ liệu hội thoại.");
clear_conves();
});
$(".reset_mina").click(function(){
toats("Đã xóa toàn bộ dữ liệu.");
clear_data_u();
clear_conves();
});
$("#rdo-1").click(function(){
toats("Đã đổi thành giọng nói của Hà Tiểu Mai.");
change_voice("hatieumai");
});
$("#rdo-2").click(function(){
toats("Đã đổi thành giọng nói của Thu Dung.");
change_voice("female");
});
$("#rdo-3").click(function(){
toats("Đã đổi thành giọng nói của Ngọc Lam.");
change_voice("ngoclam");
});
$("#rdo-4").click(function(){
toats("Đã đổi thành giọng nói của Chị Google.");
change_voice("default");
});
$("#rdo-5").click(function(){
toats("Đã đổi thành giọng nói của Cao Chung.");
change_voice("male");
});
}
});
});
$(function(){
	setTimeout(function(){
	$(".loading").hide();
	},1000);
});