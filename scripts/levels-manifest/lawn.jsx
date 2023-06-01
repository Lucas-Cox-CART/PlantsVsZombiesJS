import '../../styles/levels-styles/lawn.css';
import React from 'react';
import ReactDOM from 'react-dom';

let playableGrid = document.getElementById('gridLawn');
let gridBox = [];
for (let i = 0; i < 45; i++) {
    gridBox[i] = document.createElement('div');
    gridBox[i].classList.add('gridChild');
    playableGrid.append(gridBox[i]);
}