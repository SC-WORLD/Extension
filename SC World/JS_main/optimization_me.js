$(function(){
	var url =window.location.href.split("optimization_me.html?url=")[1].split("&title")[0];
	domain = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
	title = decodeURI(window.location.href.split("&title=")[1].split("&fav")[0]);
	fav = window.location.href.split("&fav=")[1];
var link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement("link");
  link.setAttribute("rel", "shortcut icon");
  document.head.appendChild(link);
}
var faviconUrl = fav || window.location.origin + "MEDIA/icon.ico";
function onImageLoaded() {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
            canvas.height = img.height;
            context = canvas.getContext('2d');
            context.globalAlpha = 0.5;
            context.drawImage(img, 0, 0);
  link.type = "image/x-icon";
  link.href = canvas.toDataURL();
};
var img = document.createElement("img");
img.addEventListener("load", onImageLoaded);
img.src = faviconUrl;
	$(".header").html('<img src="'+fav+'"><span>'+title+'</span><div class="add"><p>Thêm '+domain+' vào danh sách an toàn</p></div>');
	$("title").text(title);
	$(".body_load").click(function(){ window.history.back();});
	$(".header p").click(function(){ chrome.storage.sync.get({"optimization_me":[]},function(data){ var data = data["optimization_me"]; 
		if(JSON.stringify(data).indexOf(url) <=-1){
			data.push(url);
			chrome.storage.sync.set({"optimization_me":data},function(){ $(".add").html("<p>Đã thêm "+domain+" vào danh sách an toàn</p>")});
	} }); });
});