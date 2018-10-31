$(document).ready(function(){//FUNCTION THAT GETS THE REMAINING TIME TILL DEADLINE SET
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
//FUNCTION TO INITIALIZE CLOCK
    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
//FUNCTION THAT UPDATES THE CLOCK
        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
//THIS IS WHERE YOU SET THE DESIRED DATE AND TIME!
    var deadline = 'February 16 2018 00:00:00 GMT+07';//CHANGE THE DATE AND TIME HERE, STRICTLY IN THIS FORMAT
    initializeClock('clockdiv', deadline);});
//Write html
$("body").append("<div id=\"clockdiv\">\n" +
    "        <div>Còn\n" +
    "            <span class=\"days\"></span>\n" +
    "            <span class=\"smalltext\"> ngày </span>\n" +
    "            <span class=\"hours\"></span>\n" +
    "            <span class=\"smalltext\"> giờ </span>\n" +
    "            <span class=\"minutes\"></span>\n" +
    "            <span class=\"smalltext\"> phút </span>\n" +
    "            <span class=\"seconds\"></span>\n" +
    "            <span class=\"smalltext\"> giây </span>\n" +
    "            nữa là đến tết Mậu Tuất\n" +
    "        </div>\n" +
    "    </div>");