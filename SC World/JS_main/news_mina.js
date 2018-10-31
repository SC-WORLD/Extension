function extract_server(sc_news,where,position){
    sc_news = JSON.parse(sc_news);
    sc_news = sc_news["custom_payload"];
    if (where == "left") {
        if (position == 1) {
            $(".left_content>.position_1").append('<div class="custom_pay" style="background: #e5e5e5; padding: 5px; border-radius: 4px;"><div class="header_pay"><div>' + sc_news["weather"]["location"] + '</div><div>' + sc_news["weather"]["lastupdate"] + '</div></div><div class="body_pay"><div class="temp_c">' + sc_news["weather"]["temp_c"] + '</div><img src="http:' + sc_news["weather"]["icon"] + '"><div class="temp_f">' + sc_news["weather"]["temp_f"] + '</div></div><div class="fotter_pay">' + sc_news["weather"]["text"] + '</div></div>')
        }
    }
    if(where =="center"){
        for(i = 0; i < sc_news.length; i++){
            $(".body_main_robot>.news_from_server").append('<a href="'+sc_news[i]["link"]+'" target="_blank" style="color: unset"><div class="news_feed"><div class="cell w_75"><div class="title_feed">'+sc_news[i]["title"]+'</div><div class="bottom_feed">'+sc_news[i]["time"]+'</div></div><div class="cell w_25 full_img ver_mid"><img src="'+sc_news[i]["thumb"]+'"></div></div>');
        }
    }
}
function extract_local(get_data,where, position,name){
    get_datadata = new DOMParser().parseFromString(get_data, "text/html").getElementsByTagName("body")[0];
    message = $(get_data).find("#header a[accesskey=4]").text().replace(/[^0-9\.]+/g, "");
    noti = $(get_data).find("#header a[accesskey=3]").text().replace(/[^0-9\.]+/g, "");
    if(message.length ==0){
        message = 0;
    }
    if(noti.length ==0){
        noti = 0;
    }
    if (where == "right") {
        if (position == 1) {
            $(function() {
                $(".user_info>.position_1").append('<div class="cell w_75 border border_left">Tin nhắn</div><div class="cell w_25 border border_right">'+message+
                '</div>'
            )
                ;
                $(".user_info>.position_1").append('<div class="cell w_75 border border_left">Thông báo</div><div class="cell w_25 border border_right">'+noti+
                '</div>'
            )
                ;
            });
        }
    }}
function get_news(from,url,where,position){
    $.ajax({
        url: url,
        type: "get",
    async: false,
    success: function(sc_news){
            if(from =="server") {
                extract_server(sc_news,where,position);
            }
            if(from =="local"){
                extract_local(sc_news,where,position);
            }
    }})
}
$(function() {
    chrome.storage.local.get({"user_info": []}, function (data_ass) {
        user_info = data_ass["user_info"];
        try{location_gl = user_info[0]["location"]}catch (e) {
            location_gl = "Hà Nội"
        }
        get_news("server","http://whiteweb.tk/myna/news.php","center");
        get_news("server","http://whiteweb.tk/myna/AI.php?get=extension&speak=Thời tiết hiện tại ở " + location_gl + "&parse=json","left",1);
        get_news("local","https://mbasic.facebook.com/","right",1,"facebook");
    });
});
