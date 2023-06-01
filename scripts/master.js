import '../styles/style.css';

let width = window.innerWidth;
let height = window.innerHeight;

// Window Resize Detection (FontSize Adjustment)
window.addEventListener('resize', (e) => {
    window.location.reload();
});

// Main Menu Options Hover Animation
let tombstoneOptions = [];
let tombstoneOptionsText = [];

for (let i = 0; i < 4; i++) {
    tombstoneOptions[i] = document.getElementById(`tombstoneOptions${[i]}`);
    tombstoneOptionsText[i] = document.getElementById(`tombstoneOptionsText${[i]}`);
    tombstoneOptionsText[i].style.fontSize = `${width/410}rem`;

    ["mouseover", "mouseout"].forEach((event) => {
        tombstoneOptions[i].addEventListener(event, (e) => {
            if (event == "mouseover") {
                tombstoneOptions[i].style.animationName = "tombstoneOptionHover";
                tombstoneOptionsText[i].style.animationName = "tombstoneOptionText";
                tombstoneOptionsText[i].style.animationTimingFunction = "linear";
            } else if (event == "mouseout") {
                tombstoneOptions[i].style.animationName = "tombstoneOptionHoverRev";
                tombstoneOptionsText[i].style.animationName = "tombstoneOptionTextRev";
                tombstoneOptionsText[i].style.animationTimingFunction = "cubic-bezier(0, 0.25, 0.75, 1)";
            }
        });
    });
}

// Tombstone Current Level
const levelDisplay = document.getElementById('levelCount');
levelDisplay.style.fontSize = `${width/1780}rem`;

let stage = [1, 1];
let pound = Math.floor(stage[1]/3.5);
let level = stage[1] - (3*pound);
let currentLevel;

if (stage[1] > 3) {
    stage[1] = level;
    stage[0] += pound;
    levelDisplay.innerText = `Level ${stage[0]} - ${stage[1]}`;
}

switch(pound) {
    case 0:
        currentLevel = 'lawn';
        break;
    case 1:
        currentLevel = 'pool';
        break;
    case 2:
        currentLevel = 'roof';
        break;
}

levelDisplay.innerText = `Level ${stage[0]} - ${stage[1]}`;

// Menu Options Click Event
let notification = document.getElementById('notification');
let timeoutLock = true;

let expunge;
[0, 1, 2, 3].forEach((button) => {
    tombstoneOptions[button].addEventListener('click', (e) => {
        if (button == 0) {
            window.location.href = `../levels/${currentLevel}.html`;
        } else if (button == 1) {
            notification.style.animationName = "incomplete";
            if (timeoutLock == true) {
                expunge = setTimeout(expungeNotif, 7000, 1);
            }
            timeoutLock = false;
        } else if (button == 2) {
            notification.style.animationName = "incomplete";
            if (timeoutLock == true) {
                expunge = setTimeout(expungeNotif, 7000, 1);
            }
            timeoutLock = false;
        } else if (button == 3) {
            window.location.href = "../levels/survival.html";
        }
    });
});

let expungeManual = document.getElementById('expungeManual');
expungeManual.addEventListener('click', (e) => {
    notification.remove();
});

function expungeNotif(t) {
    notification.style.animationName = "incompleteRev";
    timeoutLock = true;
}