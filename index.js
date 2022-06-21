const x = document.getElementById("x");
const body = document.getElementById('clicker');
const lcm = document.getElementById('lcm');
const nums = document.getElementById('n');
var clicks = localStorage.getItem('LcmClicks');
const clicker = document.getElementById('clicker');
const rick = document.getElementById('rickRollV');
const rickdiv = document.getElementById('rickRoll');
const html = document.getElementsByTagName('html')[0];
var rickrolling = false;
clicks = clicks == undefined ? 0 : clicks;
nums.innerText = (clicks);
body.onmousedown = () => {
    if (!rickrolling) {
        localStorage.setItem('LcmClicks', clicks);
        lcm.src = './d1c7e543-f09f-47c7-97d6-f4f157a13d4c.png';
    }
}
body.onmouseup = () => {
    if (!rickrolling) {
        lcm.src = './d1c7e543-f09f-47c7-97d6-f4f157a13d3c.png';
        clicks++;
        nums.innerText = (clicks);
        if (clicks % 100 == 68) {
            clicker.style.display = 'none';
            rickdiv.style.display = 'flex';
            nums.innerText = ("Rickrolled");
            rickrolling = true;
            rick.play();
        }
    }
}
html.onkeydown = body.ontouchstart = body.onmousedown;
html.onkeyup = body.ontouchend = body.onmouseup;
var closeX = () => {
    rickdiv.style.display = 'none';
    clicker.style.display = 'flex';
    rick.pause();
    rickrolling = false;
}
document.getElementById('x').onclick = closeX;