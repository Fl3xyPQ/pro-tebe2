const songs = [
    "music/song1.mp3",
    "music/song2.mp3",
    "music/song3.mp3"
];

let currentSong = 0;
const player = document.getElementById("player");
const button = document.getElementById("playBtn");

button.addEventListener("click", () => {
    button.style.display = "none";
    playSong();
});

function playSong() {
    player.src = songs[currentSong];
    player.play();
}

player.addEventListener("ended", () => {
    currentSong++;
    if (currentSong < songs.length) {
        playSong();
    }
});
