function open_tab(url){
chrome.tabs.create({url: url });
}
function close_tab(index, speak){
	if(index !="current"){
				chrome.tabs.query({},function(sc_world){
			 chrome.tabs.remove(sc_world[(index-1)].id,function(){
			 });
	}); } else{
				chrome.tabs.getCurrent(function(tab) {
    chrome.tabs.remove(tab.id);
				});
			}
			}
function change_tab(index, speak){
				chrome.windows.getLastFocused(
 {populate: true},
 function (window)
 {
  
    chrome.tabs.update(window.tabs[(index-1)].id, {active: true});
    return;
  });
			}
			var a = 'a';
	function voice_chat(a){
		if(a.indexOf("mina") >=0){
		console.info(a);
chrome.storage.sync.get({"voice_ass":{}},function(voice_ass){
		voice_ass = voice_ass["voice_ass"];
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.status !=404 && this.readyState == 4) {
		data ="";
		try{
		data = JSON.parse(this.responseText); }catch(e){}
		try{
		if(data["speak"] !=undefined){url = data["audio_speak"]; speak = data["speak"]; robot_speak(url,speak);} } catch(e){ console.info(e)};
		try{ if(data["close_tab"] !=undefined){ index = data["close_tab"][0]["index"]; speak = data["close_tab"][1]["speak"]; close_tab(index, speak); }} catch(e){}
		try{ if(data["change_tab"] !=undefined){ index = data["change_tab"][0]["index"]; speak = data["change_tab"][1]["speak"]; change_tab(index,speak);}} catch(e){}
		try{ if(data["open_tab"] !=undefined){ url = data["open_tab"][0]["url"]; speak = data["open_tab"][1]["speak"]; open_tab(url,speak); }}
catch(e){}
	
    }
	if(this.readyState == 4 && this.status == 404){
		alert("Error");
	}
};
xhttp.open("GET", "http://whiteweb.tk/myna/AI.php?get=extension&speak_voice="+voice_ass+"=&speak="+a+"&parse=json", true);
xhttp.send();
		});
		}
	}
var final_transcript = '';
var recognizing = false;
var async_voice = false;
check_error = 0;
if ('webkitSpeechRecognition' in window) {

  var recognition = new webkitSpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {

        recognizing = true;
        async_voice = true;
        chrome.runtime.sendMessage({your_speak: "true"});
  };

  recognition.onerror = function(event) {
      check_error = 1;
    console.log(event.error);
  };

  recognition.onend = function() {
	recognizing = false;
	if(async_voice == false && recognizing == false){
        if(check_error == 0) {
            recognition.start();
        }
	}
  };
chrome.tabs.onUpdated.addListener(function(){
	chrome.tabs.query({},function(sc_world){ check_tab_voice = false;
 for(var i = 0; i < sc_world.length; i++){
if(sc_world[i]["url"].indexOf("HTML/console_mina.html") >0){
check_tab_voice = true;
}
if(i ==sc_world.length - 1 && check_tab_voice ==false){
	if(async_voice ==false && recognizing ==false){
	recognition.start();
	}
}
} }); return
 });
 chrome.tabs.onRemoved.addListener(function(){
	chrome.tabs.query({},function(sc_world){ check_tab_voice = false;
 for(var i = 0; i < sc_world.length; i++){
if(sc_world[i]["url"].indexOf("HTML/console_mina.html") >0){
check_tab_voice = true;
}
if(i ==sc_world.length - 1 && check_tab_voice ==false){
	if(async_voice ==false && recognizing ==false){
	recognition.start();
	}
}
} }); return
 });
 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.require_ass =="voice"){
	async_voice = true;
	recognition.onend();
	}
	if(request.require_ass =="no_voice"){
    async_voice = false;
	recognition.start();
	}
	});
  recognition.onresult = function(event) {
    var interim_transcript = '', a ='';
    for (var i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        a = event.results[i][0].transcript.trim().toLowerCase();
		voice_chat(a);
		chrome.runtime.sendMessage({your_speak_message: a});
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
  };
}
function start(){
setTimeout(function(){
  if (recognizing && async_voice) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  a ='';
  recognition.lang = 'vi-VN';
  recognition.start();
},1000); }
chrome.storage.local.get({"assistant":{}},function(sc_world){
	if(sc_world["assistant"] =="true"){
start();
} });
chrome.storage.onChanged.addListener(function(){ 
chrome.storage.local.get({"assistant":{}},function(sc_world){
	if(sc_world["assistant"] =="true"){
start();
} });
});
function robot_speak(url,speak){
	var win = new Audio(url);
    win.play();
	chrome.runtime.sendMessage({speak: decodeURI(speak)});
	 win.addEventListener('ended', function() {
	 chrome.runtime.sendMessage({end_speak: "true"});
	 });
}