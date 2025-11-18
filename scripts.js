const happy = document.getElementById("gift-img-happy");
const sound = document.getElementById("happySound");

happy.addEventListener("mouseenter", () => {
    sound.currentTime = 0;
    sound.play();
});

happy.addEventListener("mouseleave", () => {
    sound.pause();
    sound.currentTime = 0;
});
