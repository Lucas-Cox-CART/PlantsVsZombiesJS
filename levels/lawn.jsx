import './lawn.scss';
import './assets.jsx';

const fWidth = window.innerWidth;
const fHeight = window.innerHeight;
let width = window.innerWidth;
let height = window.innerHeight;

function pageUpdate() {
    window.addEventListener('resize', (e) => {
        window.location.reload();
    });
}
setInterval(() => {pageUpdate;}, 10);

const canvas = document.getElementById('lawn');
const stage = canvas.getContext("2d");

stage.fillStyle = "green";
stage.fillRect(0, 0, 1500, 1500);