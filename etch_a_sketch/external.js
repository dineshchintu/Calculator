
const container = document.getElementById("container");
let slider = document.getElementById('range_input');
pixelSize(slider.value);
let reset = document.getElementById('reset');
let random_clr = document.getElementById('random');
let color_btns = document.querySelectorAll('.color-choice');

function makeRows(n) {
        container.style.setProperty('--grid-rows', n);
        container.style.setProperty('--grid-cols', n);
        for (c = 0; c < (n * n); c++) {
                let cell = document.createElement("div");
                container.appendChild(cell).className = "grid-item";
        }
        let select_divs = container.querySelectorAll('div')
        select_divs.forEach(y => y.addEventListener('mouseover',colorChange));
}

function colorChange(){
    let color_input = document.getElementById('color_input').value;
    this.style.background = color_input;
    // this.classList.remove;
    // console.log(this.classList.remove);
}   

function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    makeRows(slider.value);
}

slider.addEventListener('mouseup', pixelSize);
function reload(){
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(grid => grid.style.background='azure');
}




function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeRandom(){
    function randomClrChange(){
        let colorInRandom = randomColor();
        this.style.background = colorInRandom;
    }
    let select_divs = container.querySelectorAll('div')
    select_divs.forEach(y => y.addEventListener('mouseover',randomClrChange));
}

random_clr.addEventListener('click', changeRandom);
reset.addEventListener('click', reload);