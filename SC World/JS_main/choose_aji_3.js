var selected_box_right = '<div class="selected_box_right"><div class="border_span_top"><div class="radia_0cen radia"></div><div class="radia radia_50cen"></div><div class="border_radius_top_right"><div class="border_right_90deg"><div class="radia radia_0deg_cen"></div></div></div></div><div class="border_span_bottom"><div class="radia radia_25cen"></div><div class="radia radia_75cen"></div><div class="border_radius_bottom_right"></div></div></div>';
function print_text(){
	$(".print_text").fadeIn();
	setTimeout(function(){
		$(".print_text").fadeOut();
	},3000);
}
$(function(){
$(".select_color1>.turn_on").click(function () { 
chrome.tabs.getAllInWindow(null, function(tabs){
    for (var i = 0; i < tabs.length; i++) {
    chrome.tabs.sendRequest(tabs[i].id, {
	style: "sent_style_red"}, function (reponse) { try{ $(".print_text").text(reponse.load_to);  
	chrome.storage.sync.set({"style_fb": "color_red", "old_color": "red_color"}); print_text();}catch(e){ 
	chrome.storage.sync.set({"style_fb": "color_red", "old_color": "red_color"}); print_text()}; }); };});
});
$(".select_color2>.turn_on").click(function () { 
chrome.tabs.getAllInWindow(null, function(tabs){
    for (var i = 0; i < tabs.length; i++) {
    chrome.tabs.sendRequest(tabs[i].id, {
	style: "sent_style_2"}, function (reponse) { try{ $(".print_text").text(reponse.load_to_2); 
	chrome.storage.sync.set({"style_fb": "color_css_2", "old_color": "css_2_color"}); print_text() }catch(e){
	chrome.storage.sync.set({"style_fb": "color_css_2", "old_color": "css_2_color"}); print_text();}}); };});
});
$(".select_color3>.turn_on").click(function () { 
chrome.tabs.getAllInWindow(null, function(tabs){
    for (var i = 0; i < tabs.length; i++) {
    chrome.tabs.sendRequest(tabs[i].id, {
	style: "sent_style_3"}, function (reponse) { try{ $(".print_text").text(reponse.load_to_3); 
	chrome.storage.sync.set({"style_fb": "color_css_3", "old_color": "css_3_color"}); print_text() }catch(e){
	chrome.storage.sync.set({"style_fb": "color_css_3", "old_color": "css_3_color"}); print_text();}}); };});
});
$(".select_color1>.turn_off, .select_color2>.turn_off, .select_color3>.turn_off").click(function () { 
chrome.tabs.getAllInWindow(null, function(tabs){
    for (var i = 0; i < tabs.length; i++) {
    chrome.tabs.sendRequest(tabs[i].id, {
	style: "sent_removed"}, function (reponse) { try{$(".print_text").text("OK"); $(".print_text").text(reponse.load_to); 
	chrome.storage.sync.remove("style_fb", function () {
            }); }catch(e){
	chrome.storage.sync.remove("style_fb", function () {
            }); }}); };});
});
$(".select_security2>.reset").click(function(){ 
 chrome.storage.sync.remove(["time_set_se","time_set_miu","time_set_ho","time_set_day"], function () {
         $(".print_text").text("Đã reset"); print_text();
        });
});
$(".select_security2>.turn_on").click(function () {
        chrome.storage.sync.set({"timed_start": "OK"});
        $(".print_text").text("Đã bật"); print_text()
    });
    $(".select_security2>.turn_off").click(function () {
        chrome.storage.sync.remove("timed_start", function () {
            $(".print_text").text("Đã vô hiệu hóa"); print_text()
        });
    });
	 $(".select_security3>.turn_on").click(function () {
        chrome.storage.sync.set({"block_bit_coin": "yes"});
        $(".print_text").text("Đã kích hoạt chế độ chặn mã đào tiền ảo"); print_text()
    });
    $(".select_security3>.turn_off").click(function () {
        chrome.storage.sync.remove("block_bit_coin", function () {
            $(".print_text").text("Đã vô hiệu hóa chế độ chặn mã đào tiền ảo"); print_text()
        });
    });
	  $(".select_security4>.turn_on").click(function () {
        chrome.storage.sync.set({"clickjacking": "yes"});
        $(".print_text").text('Đã kích hoạt chế độ chặn clickjacking"'); print_text()
    });
    $(".select_security4>.turn_off").click(function () {
        chrome.storage.sync.remove("clickjacking", function () {
            $(".print_text").text('Đã vô hiệu hóa chế độ chặn clickjacking'); print_text()
		});  });
	 $(".select_security5>.turn_on").click(function () {
        chrome.storage.sync.set({"block_pm": "yes"});
        $(".print_text").text('Đã kích hoạt chặn "đã xem"'); print_text()
    });
    $(".select_security5>.turn_off").click(function () {
        chrome.storage.sync.remove("block_pm", function () {
            $(".print_text").text('Đã vô hiệu hóa chặn "đã xem"'); print_text()
        });
    });
	 $(".select_security6>.turn_on").click(function () {
        chrome.storage.sync.set({"block_typ": "yes"});
        $(".print_text").text('Đã kích hoạt chặn "đang nhập"'); print_text()
        chrome.storage.sync.set({"seen_1": "yes"});
    });
    $(".select_security6>.turn_off").click(function () {
        chrome.storage.sync.remove("block_typ", function () {
            $(".print_text").text('Đã vô hiệu hóa chặn "đang nhập"'); print_text()
        });
    });
	$(".select_security7>.turn_on").click(function () {
        chrome.storage.sync.set({"block_typ_com": "yes"});
        $(".print_text").text('Đã kích hoạt chặn "đang trả lời" trong bình luận'); print_text() 
        chrome.storage.sync.set({"seen_2": "yes"});
    });
    $(".select_security7>.turn_off").click(function () {
        chrome.storage.sync.remove("block_typ_com", function () {
            $(".print_text").text('Đã vô hiệu hóa chặn "đang trả lời" trong bình luận"'); print_text()
        });
    });
	$(".select_security8>.turn_off").click(function () {
        chrome.storage.sync.remove("edit", function () {
            $(".print_text").text('Đã tắt chế độ'); print_text() 
        });
    });
    $(".select_security8>.turn_on").click(function(){
        chrome.storage.sync.set({"edit": "yes"}); $(".print_text").text("Đã kích hoạt chế độ"); print_text()});
	$(".select_security9>.turn_on").click(function () {
        chrome.storage.sync.set({"pri_fb": "yes"});
        $(".print_text").text('Đã bật chế độ "tàn hình"'); print_text()
        chrome.storage.sync.set({"seen_3": "yes"});
    });
    $(".select_security9>.turn_off").click(function () {
        chrome.storage.sync.remove("pri_fb", function () {
           $(".print_text").text('Đã vô hiệu hóa chế độ "tàn hình"'); print_text()
        });
    });
	 $(".select_security10>.turn_on").click(function () {
        chrome.storage.sync.set({"save_net": "yes"});
        $(".print_text").text('Đã bật chế độ tiết kiệm dữ liệu"'); print_text();
		chrome.storage.sync.set({"seen_4": "yes"});
    });
    $(".select_security10>.turn_off").click(function () {
        chrome.storage.sync.remove("save_net", function () {
            $(".print_text").text('Đã vô hiệu hóa chế độ tiết kiệm dữ liệu'); print_text()
        });
    });
	  $(".select_analytic2>.open").click(function () {
        chrome.tabs.create({url: "/InitialChatFriendsList.html"});
    });
	 $(".select_analytic1>.open").click(function () {
        chrome.tabs.create({url: "/status_sectury_facebook.html"});
    });
	$(".select_analytic3>.open").click(function () {
        chrome.tabs.create({url: "/edit.html"});
    });
	 $(".select_sound1>.turn_on_AIO_1").click(function () {
            chrome.storage.sync.set({"style_sound_2": "sound_type_1", "old_sound_2": "type_1"});
            $(".print_text").text("Đã thay đổi âm báo thông báo"); print_text();
        });
	$(".select_sound2>.turn_on_AIO_1").click(function () {
            chrome.storage.sync.set({"style_sound_1": "sound_type_1", "old_sound_1": "type_1"});
            $(".print_text").text("Đã thay đổi âm báo tin nhắn (phong cách 1)"); print_text();
        });
	$(".select_sound2>.turn_on_AIO_2").click(function () {
            chrome.storage.sync.set({"style_sound_1": "sound_type_2", "old_sound_1": "type_2"});
            $(".print_text").text("Đã thay đổi âm báo tin nhắn (phong cách 2)"); print_text()
        });
	$(".select_sound3>.turn_on_AIO_1").click(function () {
            chrome.storage.sync.set({"style_sound_3": "sound_type_1", "old_sound_3": "type_1"});
            $(".print_text").text("Đã thay đổi âm báo cuộc gọi đến"); print_text()
        });
	 $(".select_sound1>.turn_off").click(function () {
        chrome.storage.sync.remove("style_sound_2",function(){ $(".print_text").text("Đã tắt thành công âm báo thông báo"); print_text()});
    });
    $(".select_sound2>.turn_off").click(function () {
        chrome.storage.sync.remove("style_sound_1",function(){ $(".print_text").text("Đã tắt thành công âm báo tin nhắn"); print_text()});
    });
    $(".select_sound3>.turn_off").click(function () {
        chrome.storage.sync.remove("style_sound_3",function(){ $(".print_text").text("Đã tắt thành công âm báo cuộc gọi đến"); print_text()});
    });
	chrome.storage.sync.get({"user": {},"style_fb": {}, "old_color": {},"timed_start": {},"block_bit_coin": {},"block_typ": {},"block_typ_com": {},"pri_fb": {},"save_net": {},"block_pm": {},"edit": {},
    "style_sound_1": {},"style_sound_3": {},"style_sound_2": {},"clickjacking":{}}, function (load_from) {
    if (load_from["timed_start"].length <=2) {
        $(".select_security2>.turn_on").append(selected_box_right);
    }else{ $(".select_security2>.turn_off").append(selected_box_right);}
    if (load_from["block_bit_coin"].length <=3) {
        $(".select_security3>.turn_on").append(selected_box_right);
    }else{ $(".select_security3>.turn_off").append(selected_box_right);}
    if (load_from["block_typ"] =="yes") {
        $(".select_security6>.turn_on").append(selected_box_right);
    }else{ $(".select_security6>.turn_off").append(selected_box_right);}
    if (load_from["block_typ_com"] =="yes") {
        $(".select_security7>.turn_on").append(selected_box_right);
    }else{ $(".select_security7>.turn_off").append(selected_box_right);}
    if (load_from["pri_fb"] =="yes") {
        $(".select_security9>.turn_on").append(selected_box_right);
    }else{ $(".select_security9>.turn_off").append(selected_box_right);}
    if (load_from["save_net"] =="yes") {
        $(".select_security10>.turn_on").append(selected_box_right);
    }else{ $(".select_security10>.turn_off").append(selected_box_right);}
    if (load_from["block_pm"].length<="3") {
        $(".select_security5>.turn_on").append(selected_box_right);
    }else{ $(".select_security5>.turn_off").append(selected_box_right);}
    if (load_from["edit"] =="yes") { $(".select_security8>.turn_on").append(selected_box_right);
    }else{ $(".select_security8>.turn_off").append(selected_box_right);}
    if (load_from["style_sound_1"] == "sound_type_1") {
        $(".select_sound2>.turn_AIO_1").append(selected_box_right);
    }
    else if (load_from["style_sound_1"] == "sound_type_2") {
        $(".select_sound2>.turn_on_AIO_2").append(selected_box_right);
    }
    if (load_from["style_sound_3"] == "sound_type_1") {
        $(".select_sound_3>.turn_on_AIO_1").append(selected_box_right);
    }
    else if (load_from["style_sound_3"] == "sound_type_2") {
        $(".select_sound3>.turn_on_AIO_3").append(selected_box_right);
    }
    if (load_from["style_sound_2"] == "sound_type_1") {
        $(".select_sound1>.turn_on_AIO_1").append(selected_box_right);
    }
    else if (load_from["style_sound_2"] == "sound_type_2") {
        $(".select_sound1>.turn_on_AIO_2").append(selected_box_right);
    }
    if(load_from["clickjacking"] =="yes"){
        $(".select_security4>.turn_on").append(selected_box_right);
    }else{ $(".select_security4").append(selected_box_right);
    }
    if(load_from["style_sound_1"] !="sound_type_1" && load_from["style_sound_1"] !="sound_type_2") {
        $(".select_sound2>.turn_off").append(selected_box_right);
    }
    if(load_from["style_sound_2"] !="sound_type_1"){
        $(".select_sound1>.turn_off").append(selected_box_right);
    }
    if(load_from["style_sound_3"] !="sound_type_1"){
        $(".select_sound3>.turn_off").append(selected_box_right);
    }
	 if(load_from["style_fb"] =="color_red"){
		  $(".select_color1>.turn_on").append(selected_box_right);
	 }
	  if(load_from["style_fb"] =="color_css_2"){
	 $(".select_color2>.turn_on").append(selected_box_right);
	 }
	  if(load_from["style_fb"] =="color_css_3"){
	 $(".select_color3>.turn_on").append(selected_box_right);
	 }
	 if(load_from["style_fb"] !="color_css_2"){
		 $(".select_color2>.turn_off").append(selected_box_right);
	 }
	 if(load_from["style_fb"] !="color_red"){
		  $(".select_color1>.turn_off").append(selected_box_right);
	 }
	 if(load_from["style_fb"] !="color_css_3"){
		  $(".select_color3>.turn_off").append(selected_box_right);
	 }
});
});