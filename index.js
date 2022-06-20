// JavaScript for click and change image.
var x = document.getElementById("x");
var body = document.getElementById('clicker');
var lcm = document.getElementById('lcm');
var nums = document.getElementById('n');
var clicks = localStorage.getItem('LcmClicks');
var clicker = document.getElementById('clicker');
var rick = document.getElementById('rickRollV');
var rickdiv = document.getElementById('rickRoll');
clicks = clicks == undefined ? 0 : clicks;
nums.innerText = (clicks);
body.onmousedown = () => {
    clicks++;
    nums.innerText = (clicks);
    localStorage.setItem('LcmClicks', clicks);
    lcm.src = './d1c7e543-f09f-47c7-97d6-f4f157a13d4c.png';
}
body.ontouchstart = body.onmousedown;
body.onmouseup = () => {
    lcm.src = './d1c7e543-f09f-47c7-97d6-f4f157a13d3c.png';
    if (clicks % 100 == 68) {
        clicker.style.display = 'none';
        rickdiv.style.display = 'flex';
        rick.play();
    }
}
body.ontouchend = body.onmouseup;
var closeX = () => {
    rickdiv.style.display = 'none';
    clicker.style.display = 'flex';
    rick.pause();
}