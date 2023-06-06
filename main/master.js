import './style.scss';

let width = window.innerWidth;
let height = window.innerHeight;

let index = document.getElementById('index');

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
let pound = Math.floor(stage[1]/3.3);
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
        currentLevel = 'night';
        break;
    case 2:
        currentLevel = 'pool';
        break;
    case 3:
        currentLevel = 'roof';
        break;
}

levelDisplay.innerText = `Level ${stage[0]} - ${stage[1]}`;

// Menu Options Click Event
let transitionEndEventName = function getTransitionEndEventName() {
    var transitions = {
        "transition"      : "transitionend",
        "OTransition"     : "oTransitionEnd",
        "MozTransition"   : "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }
    for(let transition in transitions) {
        if (notification.style[transition] != undefined) {
            return transitions[transition];
        } 
    }
}

let notification = document.createElement('div');
let innerPackage = {
    button: document.createElement('button'),
    form: document.createElement('form'),
    p: document.createElement('p')
};
notification.classList.add('notification');
innerPackage.button.classList.add('expungeManual');
innerPackage.button.addEventListener('click', (e) => {
    index.removeChild(notification);
});
innerPackage.form.classList.add('exitSign');
innerPackage.p.innerText = "Please execuse me as This feature hasn't been implemented yet. Forgive me! 😖";
innerPackage.button.append(innerPackage.form);
notification.append(innerPackage.button, innerPackage.p);

[0, 1, 2, 3].forEach((button) => {
    tombstoneOptions[button].addEventListener('click', (e) => {
        if (button == 0) {
            window.location.href = `../levels/stage/${currentLevel}.html`;
        } else if (button == 1) {
            if (index.contains(notification) == true) {
                index.removeChild(notification);
                index.append(notification);
            } else {
                index.append(notification);
                notification.style.animationName = "fadeOut";
                setTimeout(() => {
                    index.removeChild(notification);
                    notification.style.animationName = "";
                }, 5000);
            }
        } else if (button == 2) {
            if (index.contains(notification) == true) {
                index.removeChild(notification);
                index.append(notification);
            } else {
                index.append(notification);
                notification.style.animationName = "fadeOut";
                setTimeout(() => {
                    index.removeChild(notification);
                    notification.style.animationName = "";
                }, 5000);
            }
        } else if (button == 3) {
            if (index.contains(notification) == true) {
                index.removeChild(notification);
                index.append(notification);
            } else {
                index.append(notification);
                notification.style.animationName = "fadeOut";
                setTimeout(() => {
                    index.removeChild(notification);
                    notification.style.animationName = "";
                }, 5000);
            }
        }
    });
});