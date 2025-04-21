document.addEventListener("DOMContentLoaded", () => {
    const clicker = document.getElementById("clicker");
    const counter = document.getElementById("n");
    const sounds = ["assets/pop1.ogg", "assets/pop2.ogg", "assets/pop3.ogg", "assets/pop4.ogg"];

    let count = 0;
    let isTouch = false; // Detect touch devices

    counter.textContent = count;

    // Get min value of width and height of viewport for scaling
    const minSize = Math.min(window.innerWidth, window.innerHeight) * 0.8; // 80% of the viewport size
    clicker.style.width = `${minSize}px`;
    clicker.style.height = `${minSize}px`;
    clicker.style.backgroundImage = 'url("assets/normal.webp")';
    clicker.style.backgroundSize = "cover";
    clicker.style.cursor = "pointer";

    const popEffect = (event) => {
        // Prevent double activation on touch screens
        if (event.type === "touchstart") isTouch = true;
        if (event.type === "mousedown" && isTouch) return;

        count++;
        counter.textContent = count;

        // Play a random pop sound
        const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
        audio.play();

        // Change image to opened & add animation
        clicker.style.backgroundImage = 'url("assets/opened.webp")';
    };

    const revertEffect = () => {
        clicker.style.backgroundImage = 'url("assets/normal.webp")';
    };

    // Detect touch/mouse interactions
    clicker.addEventListener("touchstart", popEffect);
    clicker.addEventListener("touchend", revertEffect);
    clicker.addEventListener("mousedown", popEffect);
    clicker.addEventListener("mouseup", revertEffect);
});

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
document.addEventListener('doubleclick', function (e) {
    e.preventDefault();
});
var allElements = document.getElementsByTagName('*');
for (let i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('click', function (e) {
        if (e.target.tagName == 'INPUT' || e.target.tagName == 'A') return;
        e.preventDefault();
    });
}
