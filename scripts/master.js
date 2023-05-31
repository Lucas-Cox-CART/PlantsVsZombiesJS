// Tombstone Options Hover Animation
let tombstoneOptions = [];
let tombstoneOptionsText = [];

for (let i = 0; i < 4; i++) {
    tombstoneOptions[i] = document.getElementById(`tombstoneOptions${[i]}`);
    tombstoneOptions[i].setAttribute('dragging', 'false');

    tombstoneOptionsText[i] = document.getElementById(`tombstoneOptionsText${[i]}`);
    tombstoneOptionsText[i].setAttribute('dragging', 'false');

    tombstoneOptions[i].addEventListener('mouseover', (e) => {
        tombstoneOptions[i].style.animationName = "tombstoneOptionHover";
        tombstoneOptionsText[i].style.animationName = "tombstoneOptionText";
    });
    
    tombstoneOptions[i].addEventListener('mouseout', (e) => {
        tombstoneOptions[i].style.animationName = "tombstoneOptionHoverRev";
        tombstoneOptionsText[i].style.animationName = "tombstoneOptionTextRev";
    });
}

// Tombstone Current Level
let levelDisplay = document.getElementById('levelCount');
let stage;
let level;
// levelDisplay.innerText = `Level ${stage} - ${level}`;
levelDisplay.innerText = 'Level 1 - 1';