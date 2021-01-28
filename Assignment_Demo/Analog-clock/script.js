import {ClockLib} from './clockLib.js';

document.getElementById('submit').addEventListener('click', createClock);

function createClock() {
    var speed = parseInt(document.getElementById('speed').value); 
    var timeZone = document.getElementById('timezone').value;

    const newClock = new ClockLib(speed, timeZone);
    const containerElm = document.getElementById('container');
    containerElm.appendChild(newClock.getElement());
}
