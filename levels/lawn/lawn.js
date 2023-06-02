import './lawn.scss';

const normalWidth = window.innerWidth;
const normalHeight = window.innerHeight;
let width = window.innerWidth;
let height = window.innerHeight;

window.addEventListener('resize', (e) => {
    window.location.reload();
});

let playableGrid = document.getElementById('gridLawn');
playableGrid.style.height = `${100*(height/normalHeight)-12}vh`;
playableGrid.style.width = `${100*(width/normalWidth)-21}%`;
playableGrid.style.grid = `repeat(5, 20%) / auto-flow`;
let gridBox = [];

for (let i = 0; i < 45; i++) {
    gridBox[i] = document.createElement('div');
    gridBox[i].classList.add('gridChild');
    gridBox[i].style.height = `${(0.0879 * width)}px`;
    gridBox[i].style.width = `${(0.0879 * width)}px`;
    if (i % 2 != 0) {
        gridBox[i].style.filter = "contrast(115%)";
    } else if (i % 2 == 0) {
        gridBox[i].style.filter = "contrast(85%)";
    }

    ["mouseover", "mouseout"].forEach((event) => {
        gridBox[i].addEventListener(event, (e) => {
            if (event == "mouseover") {
                gridBox[i].style.filter = "contrast(200%)";
            } else if (event == "mouseout") {
                if (i % 2 != 0) {
                    gridBox[i].style.filter = "contrast(115%)";
                } else if (i % 2 == 0) {
                    gridBox[i].style.filter = "contrast(85%)";
                }
            }
        });
    });

    playableGrid.append(gridBox[i]);
}