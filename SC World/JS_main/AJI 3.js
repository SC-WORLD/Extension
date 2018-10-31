var selected_box_right = '<div class="selected_box_right"><div class="border_span_top"><div class="radia_0cen radia"></div><div class="radia radia_50cen"></div><div class="border_radius_top_right"><div class="border_right_90deg"><div class="radia radia_0deg_cen"></div></div></div></div><div class="border_span_bottom"><div class="radia radia_25cen"></div><div class="radia radia_75cen"></div><div class="border_radius_bottom_right"></div></div></div>';
function load_after(){
    $(".main_border_center, .main_border_center_2").css({"width": $(window).width() * 0.23});
    $(".child_2").css({"width": $(".child").css("width")});
    $(".rotate_border_45_final").css({"width": $("")});
	var width = $(window).width();
	if(width >= 1600){
	$(".box_left").css({"zoom":"1"}); }
	else if(width < 1600 && width >=1300){
	$(".box_left").css({"zoom":"0.85"});
	}
	else if(width < 1300 && width >= 1000){
		$(".box_left").css({"zoom":"0.65"});
	}
	else if(width < 1000){
		$(".box_left").css({"zoom":"0.5"});
	}
	$(".box_left_body>div>div").not(".body_title").click(function(){  $(".box_left_body>div>div").removeClass("selected"); $(this).addClass("selected"); $(".box_right>div").hide();	});
	$(".box_right>div>div>div").click(function(){  $(this).parent().find('.selected_box_right').remove('.selected_box_right'); $(this).append(selected_box_right);
var win = new Audio('/MEDIA/ring_robot_1.mp3');
    win.play();	});
	$(".body_2").click(function(){
		$(".main_screen>div").hide();
		$(".choise_color").show();
		$(".color_append").show();
	});
	$(".body_3").click(function(){
		$(".main_screen>div").hide();
		$(".choise_music").show(); 
		$(".sound_append").show();
	});
	$(".body_4").click(function(){
	 $(".main_screen>div").hide();
	 $(".choise_security").show(); 
	 $(".security_append").show();
	});
	$(".body_5").click(function(){
		$(".main_screen>div").hide();
		$(".choise_analytic").show();
		 $(".analytic_append").show();
	});
	$(".main_screen>div>div").click(function(){
	$(this).parent().children().removeClass("selected_ok");
	$(this).addClass("selected_ok"); $(".no_action_cover").hide(); });
$(".choise_security>div").click(function(){	var nth = $(this).index() + 1;
	$(".security_append").show();
$(".security_append>div").hide(); $(".security_append>div:nth-child("+nth+")").show();});
$(".choise_color>div").click(function(){	var nth = $(this).index() + 1;
	$(".color_append").show();
$(".color_append>div").hide(); $(".color_append>div:nth-child("+nth+")").show();});
$(".choise_music>div").click(function(){	var nth = $(this).index() + 1;
	$(".sound_append").show();
$(".sound_append>div").hide(); $(".sound_append>div:nth-child("+nth+")").show();});
$(".choise_analytic>div").click(function(){	var nth = $(this).index() + 1;
	$(".analytic_append").show();
$(".analytic_append>div").hide(); $(".analytic_append>div:nth-child("+nth+")").show();});
};
$(function(){var info = 0;
	var myinter = setInterval(function(){ info=info+1; $(".per").text(info+"%"); if(info ==100){ clearInterval(myinter); $(".modal_loading").fadeOut() }},100);
	
	var load_source_1 = '<div class="select_security_n security"><div class="turn_on"><span class="cmd">1.</span><span> Bật</span></div><div class="turn_off"><span class="cmd">2.</span><span> Tắt</span></div></div>';
	var load_source_2 = '<div class="select_color_n color"><div class="turn_on"><span class="cmd">1.</span><span> Bật</span></div><div class="turn_off"><span class="cmd">2.</span><span> Tắt</span></div></div>';
	var load_source_3 = '<div class="select_sound_n color"><div class="turn_on_AIO_1"><span class="cmd">1.</span><span> Chế độ 1</span></div><div class="turn_on_AIO_2"><span class="cmd">2.</span><span> Chế độ 2</span></div><div class="turn_off"><span class="cmd">3.</span><span> Tắt</span></div></div>';
	var load_source_4 = '<div class="select_analytic_n analytic"><div class="open"><span class="cmd">1.</span><span> Mở</span></div></div>';
	for(var in_h = 1; in_h <= 10; in_h++){
			$(".box_right>.security_append").append(load_source_1).find(".select_security_n").attr({"class":"security select_security"+in_h});
	}
	for(var in_h = 1; in_h <=3; in_h++){
		$(".box_right>.color_append").append(load_source_2).find(".select_color_n").attr({"class":"color select_color"+in_h});
	}
	for (var in_h = 1; in_h <= 4; in_h++){
		$(".box_right>.sound_append").append(load_source_3).find(".select_sound_n").attr({"class":"sound select_sound"+in_h});
	}
	for (var in_h = 1; in_h <= 4; in_h++){
		$(".box_right>.analytic_append").append(load_source_4).find(".select_analytic_n").attr({"class":"analytic select_analytic"+in_h});
	}
	$(".select_security2").append('<div class="reset"><span class="cmd">3.</span><span> Reset</span></div>');
	load_after();
});
	//security AJI 3
$(function(){   $(window).resize(function() { alert("AJI 3 error, screen not fixed, please no resize screen!"); }); });
$(document).ready(function(){
	particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
});
$(function(){
var before,now,fps;
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
        requestAnimationFrame(loop);
    }
 );
 setInterval(function(){
	 $(".fps").text("FPS: "+fps);
},1000);
setInterval(function(){ chrome.system.cpu.getInfo(function(e){ var total_kernel = new Array(); total_idel= new Array(); total_user = new Array(); total_last = new Array();
 for(var i = 0; i < e.numOfProcessors; i++){
    total_kernel.push(JSON.stringify(e.processors[i].usage.kernel));  total_idel.push(JSON.stringify(e.processors[i].usage.idle)); total_user.push(JSON.stringify(e.processors[i].usage.user)); total_last.push(JSON.stringify(e.processors[i].usage.total));}
    for(var i = 0; i < e.numOfProcessors; i++){ if(i < e.numOfProcessors - 1){ var total_cpu =parseInt(((parseInt(total_last[i])+parseInt(total_last[i+1])) -(parseInt(total_idel[i])+ parseInt(total_idel[i+1]))) / (parseInt(total_last[i])+ parseInt(total_last[i+1]))* 100);
	$(".cpu>.remin").css({"width":total_cpu+"%"});
	$(".cpu>.text_remin").text(total_cpu+"%");
	} } }); },1000);
	 setInterval(function(){
chrome.system.memory.getInfo(function(e){
     var available=JSON.stringify(e.availableCapacity); total_memory =JSON.stringify(e.capacity);
        var remin_memory = parseInt(((parseInt(total_memory) - parseInt(available)) / parseInt(total_memory)) *100);
    $(".ram>.remin").css({"width":remin_memory+"%"});
    $(".ram>.text_remin").text(remin_memory+"%");
         }); },1000);
		 setInterval(function(){
			 navigator.getBattery().then(battery => {
        let date = new Date(null);
        var battery_per = battery.level * 100;
        $(document).ready(function(){
			$(".battery>.remin").css({"width":battery_per+"%"});
			$(".battery>.text_remin").text(battery_per+"%");
       });
    }); 
		 },1000);
		 setInterval(function(){ 
		 $.ajax({
    beforeSend: function(){
        // right before firing off the request, create a global object that includes the request send time
        window.startTime = new Date();
    },

    // send the request to the root URI of this host
    url: '/JSON/ping.json',

    success: function(){
        // once the request comes back, record the end time
        window.endTime = new Date();

        // take the difference, which will yield a number in milliseconds, and print it out
        $(".ping").text(window.endTime - window.startTime + " ms");
    },
	error: function(err){
		console.info("Cound not ping by error"+err); 
	}
});},3000);
});
