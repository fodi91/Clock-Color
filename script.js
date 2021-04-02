setInterval (function colorClock() {
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
if (seconds < 10) {
    seconds = '0' + seconds;
}
if (minutes < 10) {
    minutes = '0' + minutes;
}
if (hours < 10) {
    hours = '0' + hours;
}
let clockFace = hours + ':' + minutes + ':' + seconds;
var hexColor = '#' + hours + minutes + seconds;
document.getElementById('clock').innerHTML = clockFace;
document.body.style.background = hexColor;
document.getElementById('clock').style.color = '#' + Math.floor(Math.random()*999999)
}, 1000);

