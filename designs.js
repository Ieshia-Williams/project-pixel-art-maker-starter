// Select color input
const colorInput = document.getElementById("colorPicker");
let tableCell = document.getElementById("pixelCanvas");

// Select size input
let heightInput = document.querySelector("#inputHeight");
let widthInput = document.querySelector("#inputWidth");
let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", buttonClicked);
colorInput.addEventListener("onchange", getColor);
tableCell.addEventListener("click", updateCell);

// When size is submitted by the user, call makeGrid()
function buttonClicked(e) {
    makeGrid;
}

function makeGrid() {
    // Your code goes here!
    let table = document.querySelector("#pixelCanvas");
    tableCell = designCanvas(table);
    console.log(tableCell);
}

function removeTable(table) {
    table.remove;
}

function updateCell(e) {
    let cell = e.target.closest("td");
    if (!cell) {
        return;
    } else {
        let row = cell.parentElement;
        document.getElementById("pixelCanvas").rows[row.rowIndex].cells[
            cell.cellIndex
        ].bgColor = getColor();
    }
}

function getColor() {
    let currentColor = colorInput.value;
    return currentColor;
}

function setHeight() {
    return heightInput.valueAsNumber;
}

function setWidth() {
    return widthInput.valueAsNumber;
}

function designCanvas(table) {
    let height = setHeight();
    let width = setWidth();

    if (table.rows.length > 0) {
        removeTable(table);
    } else {
        for (index = 0; index < height; index++) {
            let row = table.insertRow(index);
            for (indexJ = 0; indexJ < width; indexJ++) {
                row.insertCell(indexJ);
            }
        }
    }
    tableCell = document.getElementsByTagName("td");
    return tableCell;
}