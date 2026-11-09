// FLOATING DECORATIONS

const decorationArea = document.getElementById("decorations");

const decorations = ["♡", "✿", "୨୧", "✧", "♥", "⋆"];

function createDecoration() {
const item = document.createElement("span");

item.classList.add("floating-item");
item.innerHTML = decorations[
    Math.floor(Math.random() * decorations.length)
];

item.style.left = Math.random() * 100 + "vw";
item.style.fontSize = (12 + Math.random() * 20) + "px";

const duration = 8 + Math.random() * 12;
item.style.animationDuration = duration + "s";

decorationArea.appendChild(item);

setTimeout(() => {
    item.remove();
}, duration * 1000);

}

setInterval(createDecoration, 900);

// BACKGROUND MUSIC & VINYL

const music = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");
const vinyl = document.getElementById("vinyl");

musicBtn.addEventListener("click", async () => {

if (music.paused) {

    try {
        await music.play();

        musicBtn.textContent = "PAUSE ♡";
        vinyl.classList.add("playing");

    } catch (error) {
        console.log("Music could not be played:", error);
        musicBtn.textContent = "TRY AGAIN ♡";
    }

} else {

    music.pause();

    musicBtn.textContent = "PLAY ♡";
    vinyl.classList.remove("playing");

}

});

// WELCOME MESSAGE

console.log("A little world made with love for Kak Rara ♡");
