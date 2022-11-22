
const container = document.getElementById("container");
let slider = document.getElementById('range_input');
pixelSize(slider.value);



function makeRows(n) {
        container.style.setProperty('--grid-rows', n);
        container.style.setProperty('--grid-cols', n);
        for (c = 0; c < (n * n); c++) {
                let cell = document.createElement("div");
                container.appendChild(cell).className = "grid-item";
        }
        let select_divs = container.querySelectorAll('div')
        select_divs.forEach(y => y.addEventListener('mouseover',colorChange))
}

function colorChange(){
    let color_input = document.getElementById('color_input').value;
    this.style.background = color_input;
    this.classList.remove
}

function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    makeRows(slider.value);
}

slider.addEventListener('mouseup', pixelSize);