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
let placeholder = document.createElement('div');
pausedGame.classList.add('pausedGame');
placeholder.classList.add('placeholder');
pausedGame.appendChild(placeholder);
document.onkeydown = function (e) {
    if (e.keyCode == 27) {
        if (lawnWrapper.contains(pausedGame) == false) {
            lawnWrapper.appendChild(pausedGame);
        } else if (lawnWrapper.contains(pausedGame) == true) {
            lawnWrapper.removeChild(pausedGame);
        }
    }
};
// Game Grid + Tiles
let playableGrid = document.getElementById('gridLawn');
playableGrid.style.height = `${100*(height/normalHeight)-14}vh`;
playableGrid.style.width = `${100*(width/normalWidth)-21}%`;
playableGrid.style.grid = `repeat(5, 20%) / auto-flow`;
let gridBox = [];

for (let a = 0; a < 45; a++) {
    gridBox[a] = document.createElement('div');
    gridBox[a].classList.add('gridChild');
    gridBox[a].style.height = `${(0.0879 * width)}px`;
    gridBox[a].style.width = `${(0.0879 * width)}px`;
    if (a % 2 != 0) {
        gridBox[a].style.filter = "contrast(115%)";
    } else if (a % 2 == 0) {
        gridBox[a].style.filter = "contrast(85%)";
    }
    ["mouseover", "mouseout"].forEach((event) => {
        gridBox[a].addEventListener(event, (e) => {
            if (event == "mouseover") {
                gridBox[a].style.filter = "contrast(200%)";
            } else if (event == "mouseout") {
                if (a % 2 != 0) {
                    gridBox[a].style.filter = "contrast(115%)";
                } else if (a % 2 == 0) {
                    gridBox[a].style.filter = "contrast(85%)";
                }
            }
        });
    });
    playableGrid.append(gridBox[a]);
}
// Plant Selection
let almanac = document.getElementById('plantSelection');
for (let i = 0; i < plants.length; i++) {
    almanac.append(almanacItems[i], startGameButton);
}
let addedPlants = [[], []];
let copiedPlants = [[], []];
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
            copiedPlants[0][i].appendChild(copiedPlants[1][i]);
            UI.appendChild(addedPlants[0][i]);
        }
    }
}
// Planting Plants
let placed = [];
for (let i = 0; i < plants.length; i++) {
    placed[i] = false;
    addedPlants[0][i].addEventListener('click', (e) => {
        if (placed[i] == false) {
            switch(addedPlants[0][i].classList.contains('selected')) {
                case false:
                    addedPlants[0][i].classList.add('selected');
                    for (let j = 0; j < plants.length; j++) {
                        if (i !== j) {
                            addedPlants[0][j].classList.remove('selected');
                        }
                    }
                    break;
                case true:
                    addedPlants[0][i].classList.remove('selected');
                    break;
            }
        }
    });
    place(i);
}
function place(i) {
    for (let a = 0; a < 45; a++) {
        gridBox[a].addEventListener('click', (e) => {
            if (addedPlants[0][i].classList.contains('selected') == true) {
                gridBox[a].appendChild(copiedPlants[0][i]);
                addedPlants[0][i].classList.remove('selected');
                placed[i] = true;
            }
        });
    }
}
