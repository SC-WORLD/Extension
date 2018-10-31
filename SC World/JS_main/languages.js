$(function() {
    $(".copyright").text(chrome.i18n.getMessage("programer"));
    $("#search_q").attr({"placeholder": chrome.i18n.getMessage("search")});
    $("#search_b").text(chrome.i18n.getMessage("find"));
    // Start translate popup
    $("label[for=tab1]").text(chrome.i18n.getMessage("color"));
    $("label[for=tab2]").text(chrome.i18n.getMessage("sound"));
    $("label[for=tab3]").text(chrome.i18n.getMessage("tools"));
    $("label[for=tab4]").text(chrome.i18n.getMessage("more"));
    $(".add_color").text(chrome.i18n.getMessage("add_theme"));
    $("#text_turn_on").text(chrome.i18n.getMessage("turn_on_theme"));
    $(".sound_in>.sc-world-text").text(chrome.i18n.getMessage("sound_more_1"));
    $(".sound_mess>.sc-world-text").text(chrome.i18n.getMessage("sound_more_2"));
    $(".sound_call>.sc-world-text").text(chrome.i18n.getMessage("sound_more_3"));
    $(".websafe>.sc-world-text").text(chrome.i18n.getMessage("tool_1"));
    $(".status>.sc-world-text").text(chrome.i18n.getMessage("tool_2"));
    $(".best-fr>.sc-world-text").text(chrome.i18n.getMessage("tool_3"));
    $(".cookie>.sc-world-text").text(chrome.i18n.getMessage("tool_4"));
    $(".count-mess>.sc-world-text").text(chrome.i18n.getMessage("tool_5"));
    $(".who_online>.sc-world-text").text(chrome.i18n.getMessage("tool_6"));
    $(".hs_message>.sc-world-text").text(chrome.i18n.getMessage("tool_7"));
    $(".get_token>.sc-world-text").text(chrome.i18n.getMessage("tool_8"));
    $(".grow_rep>.sc-world-text").text(chrome.i18n.getMessage("tool_9"));
    $(".time>.sc-world-text").text(chrome.i18n.getMessage("tool_10"));
    $(".bitcoin>.sc-world-text").text(chrome.i18n.getMessage("tool_11"));
    $(".seen>.sc-world-text").text(chrome.i18n.getMessage("tool_12"));
    $(".typ>.sc-world-text").text(chrome.i18n.getMessage("tool_13"));
    $(".typ_com>.sc-world-text").text(chrome.i18n.getMessage("tool_14"));
    $(".pri>.sc-world-text").text(chrome.i18n.getMessage("tool_15"));
    $(".save>.sc-world-text").text(chrome.i18n.getMessage("tool_16"));
    $(".jacking>.sc-world-text").text(chrome.i18n.getMessage("tool_17"));
    $(".stopapp>.sc-world-text").text(chrome.i18n.getMessage("tool_18"));
    $(".dow_photo>.sc-world-text").text(chrome.i18n.getMessage("tool_19"));
    $(".dow_video>.sc-world-text").text(chrome.i18n.getMessage("tool_20"));
    $(".dow_storie_photo>.sc-world-text").text(chrome.i18n.getMessage("tool_21"));
    $(".dow_storie_video>.sc-world-text").text(chrome.i18n.getMessage("tool_22"));
    $(".shield>.sc-world-text").text(chrome.i18n.getMessage("tool_23"));
    $(".update>.sc-world-text").text(chrome.i18n.getMessage("more_1"));
    $(".full_screen>.sc-world-text").text(chrome.i18n.getMessage("more_2"));
    $(".mina_monitor>.sc-world-text").text(chrome.i18n.getMessage("more_3"));
    $(".reset_all>.sc-world-text").text(chrome.i18n.getMessage("more_4"));
    $(".vote>.sc-world-text").text(chrome.i18n.getMessage("more_5"));
    $(".report>.sc-world-text").text(chrome.i18n.getMessage("more_6"));
    $(".action>.on>span").text(chrome.i18n.getMessage("action_on"));
    $(".action>.off>span").text(chrome.i18n.getMessage("action_off"));
    $(".action>.open>span").text(chrome.i18n.getMessage("action_open"));
    $(".action>.setting>span").text(chrome.i18n.getMessage("action_setting"));
    $(".action>.reset>span").text(chrome.i18n.getMessage("action_reset"));
    $(".action>.down>span").text(chrome.i18n.getMessage("down"));
    $(".title").text(chrome.i18n.getMessage("title"));
    $(".info_news").text(chrome.i18n.getMessage("info_news"));
    $(".on_1").text(chrome.i18n.getMessage("CD_1"));
    $(".on_2").text(chrome.i18n.getMessage("CD_2"));
    //End translate popup
    /*****************************************/
    //Start translate security facebook
    if (window.location.href.indexOf("status_security_facebook.html") >= 0) {
        $("title").text(chrome.i18n.getMessage("title_security_fb"))
        $(".header_title").text(chrome.i18n.getMessage("title_security_fb"));
        $(".security_fb tr:nth-of-type(1) td:nth-of-type(1)").text(chrome.i18n.getMessage("setup"));
        $(".security_fb tr:nth-of-type(1) td:nth-of-type(2)").text(chrome.i18n.getMessage("status"));
        $(".security_fb tr:nth-of-type(2) td:nth-of-type(2)").text(chrome.i18n.getMessage("underfine"));
        $(".security_fb tr:nth-of-type(3) td:nth-of-type(2)").text(chrome.i18n.getMessage("underfine"));
        $(".security_fb tr:nth-of-type(4) td:nth-of-type(2)").text(chrome.i18n.getMessage("underfine"));
        $(".security_fb tr:nth-of-type(5) td:nth-of-type(2)").text(chrome.i18n.getMessage("underfine"));
        $(".security_fb tr:nth-of-type(6) td:nth-of-type(2)").text(chrome.i18n.getMessage("underfine"));
        $(".security_fb tr:nth-of-type(7) td:nth-of-type(2)").text(chrome.i18n.getMessage("underfine"));
        $(".security_fb tr:nth-of-type(2) td:nth-of-type(1)").text(chrome.i18n.getMessage("Email_noti"));
        $(".security_fb tr:nth-of-type(3) td:nth-of-type(1)").text(chrome.i18n.getMessage("Number_noti"));
        $(".security_fb tr:nth-of-type(4) td:nth-of-type(1)").text(chrome.i18n.getMessage("Contact_sec"));
        $(".security_fb tr:nth-of-type(5) td:nth-of-type(1)").text(chrome.i18n.getMessage("security"));
        $(".security_fb tr:nth-of-type(6) td:nth-of-type(1)").text(chrome.i18n.getMessage("confirm_login"));
        $(".security_fb tr:nth-of-type(7) td:nth-of-type(1)").text(chrome.i18n.getMessage("vote_timeline"));
    }
    // End translate security facebook
    /*********************************************/
    //Start translate InitinalChatFriendlist
    if (window.location.href.indexOf("InitialChatFriendsList.html") >= 0) {
        $("title").text(chrome.i18n.getMessage("title_Inti"));
        $(".loading_text").text(chrome.i18n.getMessage("loading"));
        $(".header_title").text(chrome.i18n.getMessage("header_title"));
        $("#initinalChat tr:nth-of-type(1) td:nth-of-type(1)").text(chrome.i18n.getMessage("ranking"));
        $("#initinalChat tr:nth-of-type(1) td:nth-of-type(2)").text(chrome.i18n.getMessage("user"));
        $("#initinalChat tr:nth-of-type(1) td:nth-of-type(3)").text(chrome.i18n.getMessage("action"));
        $(".review").text(chrome.i18n.getMessage("review"));
    }
    // End translate InitinalChatFriendlist
    /*********************************************/
    //Start translate login facebook
    if (window.location.href.indexOf("edit.html") >= 0) {
        $("title").text(chrome.i18n.getMessage("title_login"));
        $(".login_cookie").text(chrome.i18n.getMessage("login_with_cookie"));
        $(".login_access").text(chrome.i18n.getMessage("login_with_access_token"));
        $("#add-cookie").text(chrome.i18n.getMessage("more"));
        $("#cookie tr:nth-of-type(1) td:nth-of-type(4)").text(chrome.i18n.getMessage("exprice"));
        $("#cookie tr:nth-of-type(1) td:nth-of-type(5)").text(chrome.i18n.getMessage("action"));
        $("#add-token").text(chrome.i18n.getMessage("login"));
        $("#lg_token").attr({"placeholder": chrome.i18n.getMessage("ipnut_re_token")});
    }
    // End translate login facebook
    /*********************************************/
    //Start translate no_facebook
    if (window.location.href.indexOf("no-facebook.html") >= 0) {
        $("title").text(chrome.i18n.getMessage("title_no_facebook"));
        $(".info_user").text(chrome.i18n.getMessage("title_no_facebook"));
        $("#count_msg tr:nth-of-type(1) td:nth-of-type(3)").text(chrome.i18n.getMessage("name"));
        $("#count_msg tr:nth-of-type(1) td:nth-of-type(4)").text(chrome.i18n.getMessage("type"));
        $("#count_msg tr:nth-of-type(1) td:nth-of-type(5)").text(chrome.i18n.getMessage("total_message"));
        $("#count_msg tr:nth-of-type(1) td:nth-of-type(6").text(chrome.i18n.getMessage("total_message_unread"));
    }
    // End translate no_facebook
    /*********************************************/
    //Start translate who_online
    if (window.location.href.indexOf("find_online.html") >= 0) {
        $("title").text(chrome.i18n.getMessage("title_who_online"));
        $(".header_title").text(chrome.i18n.getMessage("title_header_who_online"));
        $(".loading_text").text(chrome.i18n.getMessage("loading"));
        $("#who_online tr:nth-of-type(1) td:nth-of-type(3)").text(chrome.i18n.getMessage("info_basic"));
        $("#who_online tr:nth-of-type(1) td:nth-of-type(1)").text(chrome.i18n.getMessage("no"));
    }
    // End translate who_online
    /*********************************************/
    //Start translate history_ms_fb
    if (window.location.href.indexOf("history_message.html") >= 0) {
        $("title").text(chrome.i18n.getMessage("title_history_ms"));
        $(".info_user").text(chrome.i18n.getMessage("title_history_ms"));
        $("#user_search_ms").attr({"placeholder":chrome.i18n.getMessage("input_id")});
    }
    // End translate history_ms_fb
    /*********************************************/
    //Start translate get_access_token
    if (window.location.href.indexOf("get_token.html") >= 0) {
        $("title").text(chrome.i18n.getMessage("title_get_access_token"));
        $(".info_user").text(chrome.i18n.getMessage("title_get_access_token"));
        $("#user_name").attr({"placeholder":chrome.i18n.getMessage("account")});
        $("#user_name").attr({"placeholder":chrome.i18n.getMessage("account")});
        $("#pass").attr({"placeholder":chrome.i18n.getMessage("password")});
        $("#submit_token").attr({"placeholder":chrome.i18n.getMessage("get_token")});
        $("#save_token").text(chrome.i18n.getMessage("save"));
    }
    // End translate get_access_token
    /*********************************************/
    //Start translate grow_rep
    if (window.location.href.indexOf("grow_rep.html") >= 0){
        $("title").text(chrome.i18n.getMessage("title_grow_rep"));
        $(".loading_text").text(chrome.i18n.getMessage("loading"));
        $(".header_title").text(chrome.i18n.getMessage("title_grow_rep"));
        $(".info_top>div").text(chrome.i18n.getMessage("more_grow_rep"));
        $(".info_top>button").text(chrome.i18n.getMessage("go_to"));
        $("#grow_rep tr:nth-of-type(1) td:nth-of-type(3)").text(chrome.i18n.getMessage("name"));
        $("#grow_rep tr:nth-of-type(1) td:nth-of-type(4)").text(chrome.i18n.getMessage("progress"));
        $("#grow_rep #one_all").text(chrome.i18n.getMessage("chosse_all"));
    }
    // End translate grow_rep
    /*********************************************/
    //Start translate opti_ram
    if (window.location.href.indexOf("optimization_me.html") >= 0){
        $(".body_load>div>p:nth-of-type(1)").text(chrome.i18n.getMessage("title_disable_opti"));
        $(".body_load>div>p:nth-of-type(2)").text(chrome.i18n.getMessage("click_disable_opti"));
    }
    // End translate opti_ram
    /*********************************************/
    //Start translate setting_opti_ram
    if (window.location.href.indexOf("setting_optimization.html") >= 0){
        $("title").text(chrome.i18n.getMessage("setting_optimiztion"));
        $(".info_user").text(chrome.i18n.getMessage("domain_white_opti"));
        $("#memory tr:nth-of-type(1) td:nth-of-type(1)").text(chrome.i18n.getMessage("no"));
        $("#memory tr:nth-of-type(1) td:nth-of-type(2)").text(chrome.i18n.getMessage("domain"));
        $("#memory tr:nth-of-type(1) td:nth-of-type(2)").text(chrome.i18n.getMessage("domain"));
        $("#memory tr:nth-of-type(1) td:nth-of-type(3)").text(chrome.i18n.getMessage("action"));
        $("#value_whitelist").attr({"placeholder":chrome.i18n.getMessage("example_white_list")});
        $("#add-whitelist").text(chrome.i18n.getMessage("more"));
    }
});