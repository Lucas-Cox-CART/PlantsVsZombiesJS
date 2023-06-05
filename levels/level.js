import './level.scss';
import './assets.js';

const normalWidth = window.innerWidth;
const normalHeight = window.innerHeight;
let width = window.innerWidth;
let height = window.innerHeight;
let lawnWrapper = document.getElementById('lawnWrapper');

function pageUpdate() {
    window.addEventListener('resize', (e) => {
        window.location.reload();
    });
}

setInterval(() => {pageUpdate();}, 16);

// Pause Game
let pausedGame = document.createElement('section');
pausedGame.classList.add('pausedGame');
document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        lawnWrapper.appendChild(pausedGame);
        console.log('amogus');
    }
};


// Game Grid + Tiles
let playableGrid = document.getElementById('gridLawn');
playableGrid.style.height = `${100*(height/normalHeight)-14}vh`;
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

// Plant Selection
let almanac = document.getElementById('plantSelection');
for (let i = 0; i < plants.length; i++) {
    almanac.append(almanacItems[i], startGameButton);
}
let addedPlants = [[], []];

startGameButton.addEventListener('click', (e) => {
    almanac.remove();
    lawnWrapper.style.display = "flex";
    playablePlants();
});

for (let i = 0; i < plants.length; i++) {
    addedPlants[0][i] = document.createElement('div');
    addedPlants[0][i].classList.add('plant');
    addedPlants[1][i] = document.createElement('img');
    addedPlants[1][i].src = plants[i].sprite;
}

function playablePlants() {
    for (let i = 0; i < plants.length; i++) {
        if (plants[i].selected == true) {
            addedPlants[0][i].appendChild(addedPlants[1][i]);
            UI.appendChild(addedPlants[0][i]);
        }
    }
}

// Planting Plants
for (let i = 0; i < plants.length; i++) {
    addedPlants[0][i].addEventListener('dragstart', (e) => {
        addedPlants[0][i].addEventListener('dragend', (e) => {
            onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}
        });
    });
}