
//функція, що відповідає за аудіо програвач, аби кнопка в кожному блоці запускала потрібне аудіо
var autooplay = function(music, duration, pButton, playhead, timeline) { 

    var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

    pButton.addEventListener("click", play);


    music.addEventListener("timeupdate", timeUpdate, false);

    timeline.addEventListener("click", function (event) { //щоб таймлайн клікався
        moveplayhead(event);
        music.currentTime = duration * clickPercent(event);
    }, false);


    function clickPercent(event) {
        return (event.clientX - getPosition(timeline1)) / timelineWidth;
    }

    playhead.addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    var onplayhead = false;

    function mouseDown() {
        onplayhead = true;
        window.addEventListener('mousemove', moveplayhead, true);
        music.removeEventListener('timeupdate', timeUpdate, false);
    }


    function mouseUp(event) {
        if (onplayhead == true) {
            moveplayhead(event);
            window.removeEventListener('mousemove', moveplayhead, true);
            // change current time
            music.currentTime = duration * clickPercent(event);
            music.addEventListener('timeupdate', timeUpdate, false);
        }
        onplayhead = false;
    }

    function moveplayhead(event) {
        var newMargLeft = event.clientX - getPosition(timeline);

        if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
            playhead.style.marginLeft = newMargLeft + "px";
        }
        if (newMargLeft < 0) {
            playhead.style.marginLeft = "0px";
        }
        if (newMargLeft > timelineWidth) {
            playhead.style.marginLeft = timelineWidth + "px";
        }
    }


    function timeUpdate() {
        var playPercent = timelineWidth * (music.currentTime / duration);
        playhead.style.marginLeft = playPercent + "px";
        if (music.currentTime == duration) {
            pButton.className = "";
            pButton.className = "play";
        }
    }


    function play() {
        // start music
        if (music.paused) {
            music.play();
            // remove play, add pause
            pButton.className = "";
            pButton.className = "pause";
        } else { // pause music
            music.pause();
            // remove pause, add play
            pButton.className = "";
            pButton.className = "play";
        }
    }


    music.addEventListener("canplaythrough", function () {
        duration = music.duration;
    }, false);


    function getPosition(el) {
        return el.getBoundingClientRect().left;
    }
}; // все, кінець функції, тепер викликаємо її стільки разів, скільки в нас червоних блоків






//01

var music = document.getElementById("music1"); // id for audio element
var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton = document.getElementById("pButton1"); // play button
var playhead = document.getElementById("playhead1"); // playhead
var timeline = document.getElementById("timeline1"); // timeline
autooplay(music, duration, pButton, playhead, timeline);


// 02

var music2 = document.getElementById("music2"); // id for audio element
var duration2 = music2.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton2 = document.getElementById("pButton2"); // play button
var playhead2 = document.getElementById("playhead2"); // playhead
var timeline2 = document.getElementById("timeline2"); // timeline
autooplay(music2, duration2, pButton2, playhead2, timeline2);


// 03

var music3 = document.getElementById("music3"); // id for audio element
var duration3 = music3.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton3 = document.getElementById("pButton3"); // play button
var playhead3 = document.getElementById("playhead3"); // playhead
var timeline3 = document.getElementById("timeline3"); // timeline
autooplay(music3, duration3, pButton3, playhead3, timeline3);


// 04

var music4 = document.getElementById("music4"); // id for audio element
var duration4 = music4.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton4 = document.getElementById("pButton4"); // play button
var playhead4 = document.getElementById("playhead4"); // playhead
var timeline4 = document.getElementById("timeline4"); // timeline
autooplay(music4, duration4, pButton4, playhead4, timeline4);


// 05

var music5 = document.getElementById("music5"); // id for audio element
var duration5 = music5.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton5 = document.getElementById("pButton5"); // play button
var playhead5 = document.getElementById("playhead5"); // playhead
var timeline5 = document.getElementById("timeline5"); // timeline
autooplay(music5, duration5, pButton5, playhead5, timeline5);


// 06

var music6 = document.getElementById("music6"); // id for audio element
var duration6 = music6.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton6 = document.getElementById("pButton6"); // play button
var playhead6 = document.getElementById("playhead6"); // playhead
var timeline6 = document.getElementById("timeline6"); // timeline
autooplay(music6, duration6, pButton6, playhead6, timeline6);