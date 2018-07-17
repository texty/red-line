/**
 * Created by yevheniia on 10.07.18.
 */


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
        return (event.clientX - getPosition(timeline)) / timelineWidth;
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






//Перший чувак

var music = document.getElementById("music"); // id for audio element
var duration = music.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton = document.getElementById("pButton"); // play button
var playhead = document.getElementById("playhead"); // playhead
var timeline = document.getElementById("timeline"); // timeline
autooplay(music, duration, pButton, playhead, timeline);


// Другий чувак

var music2 = document.getElementById("music2"); // id for audio element
var duration2 = music2.duration; // Duration of audio clip, calculated here for embedding purposes
var pButton2 = document.getElementById("pButton2"); // play button
var playhead2 = document.getElementById("playhead2"); // playhead
var timeline2 = document.getElementById("timeline2"); // timeline
autooplay(music2, duration2, pButton2, playhead2, timeline2);