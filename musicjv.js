$env: DATABASE_URL = "<connection-string>"
const audio = document.querySelector("#audio");          //document=storage?  //querySelector?

audio.pause();
audio.currentTime = 0;

//unser altes JS aus OSF
    
var audio = new Audio ('https://vincens2005.github.io/vr/Nyan%20Cat%20[original].mp3');
audio.play();     

var soundPlayer = null;

function playSound(){

soundPlayer = new Audio('https://vincens2005.github.io/vr/Nyan%20Cat%20[original].mp3');
soundPlayer.play();
}
soundPlayer.pause();

soundPlayer.stop();

_____________________________________________________________
//HTML Audio/Video DOM play Event

var aud = document.getElementById("myAudio");
aud.onplay = function() {
    alert("The audio has started to play");
};

_____________________________________________________________