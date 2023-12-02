const board = document.querySelector('#board');
const colors = ['#5e4330', '#895d2c', '#a3966a', '#f0dcaa', '#80533e', '#735b4c', '#948c70'];
const SQUARES_NUMBER = 700;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
    setColor(square));

    square.addEventListener('mouseleave', () =>
    removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#c4ba9f';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}