/*
    Author: Ieshia Williams
    Date: 12/05/2022
    Project Title: Pixel Art Maker
*/

// Select color input
const colorInput = document.getElementById("colorPicker");
let tableCell = document.getElementById("pixelCanvas");

// Select size input
let heightInput = document.querySelector("#inputHeight");
let widthInput = document.querySelector("#inputWidth");
let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", buttonClicked);
colorInput.addEventListener("onchange", setColor);
tableCell.addEventListener("click", setColor);

// When size is submitted by the user, call makeGrid()
function buttonClicked(e) {
    try {
        makeGrid;
    } catch (error) {
        console.error(error);
    }
}

function makeGrid() {
    // Your code goes here!
    let table = document.querySelector("#pixelCanvas");
    try {
        tableCell = designCanvas(table);
    } catch (error) {
        console.error(error);
    }
}

function setColor(e) {
    let cell = e.target.closest("td");

    try {
        let row = cell.parentElement;
        document.getElementById("pixelCanvas").rows[row.rowIndex].cells[
            cell.cellIndex
        ].bgColor = getColor();
    } catch (error) {
        console.error(error);
    } finally {
        return;
    }
}

function getColor() {
    let currentColor = colorInput.value;
    try {
        return currentColor;
    } catch (error) {
        console.error(error);
    }
}

function setHeight() {
    try {
        return heightInput.valueAsNumber;
    } catch (error) {
        console.error(error);
    }
}

function setWidth() {
    try {
        return widthInput.valueAsNumber;
    } catch (error) {
        console.error(error);
    }
}

function designCanvas(table) {
    let height = setHeight();
    let width = setWidth();

    try {
        table.innerHTML = "";
    } catch (error) {
        console.error(error);
    }
    try {
        for (index = 0; index < height; index++) {
            let row = table.insertRow(index);
            for (indexJ = 0; indexJ < width; indexJ++) {
                row.insertCell(indexJ);
            }
        }
        tableCell = document.getElementsByTagName("td");
        return tableCell;
    } catch (error) {
        console.error(error);
    }
}