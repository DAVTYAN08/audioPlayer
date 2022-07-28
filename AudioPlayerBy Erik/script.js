var data = {

    title: [
        "50 Cent - Candy Shop ",
        "50 Cent - In Da Club",
        "Eminem - Lose Yourself",
        "Eminem - Venom",
        "Xxxtentacion feat. John Cunningham - Hope",
        "goreouzbeats-AsumenTeMoraceles_",
        "gorgeuzbeats-Շուշիկի_",
        "skriptoint_-_mama",
        "skriptoint_-_veseley",
    ],

    song: [
        "music/50 Cent - Candy Shop (Feat. Olivia).mp3",
        "music/50 Cent - In Da Club.mp3",
        "music/Eminem - Lose Yourself.mp3",
        "music/Eminem - Venom.mp3",
        "music/Xxxtentacion feat. John Cunningham - Hope.mp3",
        "music/AsumEn.mp3",
        "music/Shushiki.mp3",
        "music/mama.mp3",
        "music/veseley.mp3",
    ],

    poster: [
        "https://i.gifer.com/8RWM.gif",
        "https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif",
        "https://i.gifer.com/2QeW.gif",
        "https://cdn130.picsart.com/e70d292f-9a8a-4844-b832-7fffb59c249b/381362300003201.jpg",
        "http://33.media.tumblr.com/941c37eaad6b8e5d2d1e87f1c2e8c9e9/tumblr_nm4le0GYdQ1rrvlodo1_500.gif",
        "https://i.ytimg.com/vi/AoLGFr0K5ho/maxresdefault.jpg",
        "https://i.ytimg.com/vi/1srLtW-P0hk/maxresdefault.jpg",
        "https://thumbs.gfycat.com/RingedZanyGelding.webp",
        "https://i.gifer.com/embedded/download/K4xb.gif",
    ]
}

var song = new Audio()
var currentSong = 0;
console.log(song);


window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}



function playOrPauseSong() {
    let play = document.getElementById("play");


    if (song.paused) {
        song.play();
        play.src = "images/pause.png" //pause
    } else {
        song.pause();
        play.src = "images/play-button-arrowhead.png" //play
    }

}



song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);

    let fill = document.getElementById("fill")

    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%";

    convertTime(song.currentTime)


    if (song.ended) {
        next()
    }

})

function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime");
    
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    
    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration));
}

function totalTime(seconds){
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    
    if(isNaN(min) || isNaN(sec)){
        return false
    }else{
        
        currentTime.textContent += " / " + min + ":" + sec
        }

}

function next (){
    currentSong++
    console.log(currentSong);
    if (currentSong == data.song.length ){
        currentSong = 0
}
    playSong();
   play.src = "images/pause.png"
}

function pre(){
    currentSong--;

    if (currentSong < 0){
    currentSong = data.song.length - 1;        8
    }
    playSong();
    play.src = "images/pause.png"
    }


    function muted() {
        let mute = document.getElementById("mute"); 

        if(song.muted){
             song.muted = false   
             mute.src = "images/volume.png"            
        }else{
            song.muted = true
            mute.src = "images/volume-mute.png"                 
        }
    }

    function decrease(){
       song.volume -= 0.2
    }

    function increase(){
        song.volume += 0.2
    }