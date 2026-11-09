// INDEPENDENT FLOATING DECORATIONS

const decorationArea = document.getElementById("decorations");

const decorations = ["♡", "✿", "୨୧", "✧", "♥", "⋆"];

function createDecoration() {

const item = document.createElement("span");

item.classList.add("floating-item");

item.innerHTML =
    decorations[Math.floor(Math.random() * decorations.length)];

item.style.left = Math.random() * 100 + "vw";

item.style.fontSize = (12 + Math.random() * 20) + "px";

const duration = 8 + Math.random() * 12;

item.style.animationDuration = duration + "s";

decorationArea.appendChild(item);

setTimeout(() => {
    item.remove();
}, duration * 1000);

}

// Each decoration has its own timing

setInterval(createDecoration, 900);

// BACKGROUND MUSIC

const music = document.getElementById("backgroundMusic");

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

if (music.paused) {

    music.play();

    musicBtn.innerHTML = "PAUSE MUSIC ♡";

} else {

    music.pause();

    musicBtn.innerHTML = "PLAY MUSIC ♡";

}

});

// WELCOME MESSAGE

console.log("A little world made with love for Kak Rara ♡");
