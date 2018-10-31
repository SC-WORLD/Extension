$(function(){
host = "http://whiteweb.tk/analytic/set.php";
function send(host, id){
	$.ajax({ url: host, data: "chosse="+id, method: "get"});
}
$(".ana").click(function(){
	id = $(this).attr("chosse").split("_")[1];
	send(host,id);
});
});