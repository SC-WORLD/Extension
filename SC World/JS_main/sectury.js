$(function(){
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	if(request.stop_me ==="true"){ console.info("OK"); } });
	chrome.storage.sync.get({"websafe": {}}, function (load_from) {
		if(load_from["websafe"] =="yes"){
var css_security = "<style>body{background: #E72403; font-family: cursive;}.modal>*{color: white}.modal{position: absolute; margin: auto; width: 50%; top: 50%; height: 300px;   left: 50%;  transform: translate(-50%, 0); margin-top: -150px;}.footer_security>button{float: right; background: rgba(255,255,255,0.5); padding: 13px 15px; text-align: center; border: 0px; color: #FFF; cursor: pointer; }.title_security{position: fixed; top: 0px; left: 0px; width: 100%; text-align: center; font-size: 25px; color: deepskyblue}</style>";
	if(window.location.href.search("facebook.com") <=-1){
		if(window.location.protocol !="https"){
			var check = $("head").find("title").text().toLowerCase();
			var check2 = $("body").find("input");
			if(check.search("facebook") >=0){
               if(check.search("đăng nhập") >=0 || check.search("login") >=0){
				$("input").each(function(){
					if($(this).attr("type") =="password"){
				$("body").html("");
				$("head>style").each(function(e){
					$(this).remove();
				});
				$("head>link").each(function(e){
                    console.info($(this).attr("href"))
					if($(this).attr("href").indexOf(".css") >=1) {
                        $(this).remove();

                    }
				});
				$("body").append(css_security);
				$("body").append('<div class="modal"><img src="data:image/png;base64,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" /><div class="title_security">SC WOLRD FIRE WALL</div><h3></h3><p><span id="attack_security"></span><b>'+window.location.hostname+'</b><span id="ms_security"></span></p><div class="footer_security"><button></button></div></div>');
				$(".footer_security>button").click(function(){  window.history.back(); });
                        $(function(){
                            $(".modal h3").text(chrome.i18n.getMessage("warning_security"));
                            $(".modal #attack_security").text(chrome.i18n.getMessage("attack_security"));
                            $(".modal #ms_security").text(chrome.i18n.getMessage("ms_security"));
                            $(".modal .footer_security>button").text(chrome.i18n.getMessage("way_back_safe"));
                        });
					}
				});
			}}
	}}
	} });
});