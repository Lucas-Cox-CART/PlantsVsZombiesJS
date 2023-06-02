// import { createRoot } from 'react-dom/client';
// import React from 'react';
// import ReactDOM from 'react-dom';
// const domNode = document.getElementById('navigation');
// const root = createRoot(domNode);
// root.render(<NavigationBar />);

import './lawn.css';
import React from 'react';
import ReactDOM from 'react-dom';

const normalWidth = window.innerWidth;
const normalHeight = window.innerHeight;
let width = window.innerWidth;
let height = window.innerHeight;

window.addEventListener('resize', (e) => {
    window.location.reload();
});

let playableGrid = document.getElementById('gridLawn');
playableGrid.style.height = `${100*(height/normalHeight)-10}vh`;
playableGrid.style.width = `${100*(width/normalWidth)-19}%`;
playableGrid.style.grid = `repeat(5, 20%) / auto-flow`;
let gridBox = [];
let cellSize = [(0.0879 * width), (0.0879 * height)];

for (let i = 0; i < 45; i++) {
    gridBox[i] = document.createElement('div');
    gridBox[i].classList.add('gridChild');
    gridBox[i].style.height = `${(0.0879 * width)}px`;
    gridBox[i].style.width = `${(0.0879 * width)}px`;
    playableGrid.append(gridBox[i]);
}