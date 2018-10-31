$(function(){
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if (request.zc_function == "down_photo"){
	var a = $(".KL4Bh img").attr("src");
	window.open(a,"_blank");
}
if (request.zc_function == "down_video"){
	var a = $("._5wCQW video").attr("src");
	window.open(a,"_blank");
}
if (request.zc_function == "down_storie_photo"){
	var a = $(".qbCDp img").attr("src");
	window.open(a,"_blank");
}
if (request.zc_function == "down_storie_video"){
	var a = $(".y-yJ5 source:nth-of-type(1)").attr("src");
	window.open(a,"_blank");
}
});
});
