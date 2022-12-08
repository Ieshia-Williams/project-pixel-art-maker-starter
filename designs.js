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

// Listen for the following events
submitButton.addEventListener("click", buttonClicked);
colorInput.addEventListener("onchange", setColor);
tableCell.addEventListener("click", setColor);

// When size is submitted by the user, call makeGrid()
function buttonClicked(e) {
  try {
    makeGrid;
  } catch (error) {
    console.error(error); // if error occurs, log it to console
  }
}

function makeGrid() {
  // Your code goes here!
  // initialize table
  let table = document.querySelector("#pixelCanvas");
  try {
    tableCell = designCanvas(table);
  } catch (error) {
    console.error(error); // if error occurs, log it to console
  } finally {
    return tableCell;
  }
}

// function to set the color of the cell
function setColor(e) {
  // grabs the cell that was just clicked
  let cell = e.target.closest("td");

  try {
    let row = cell.parentElement;
    document.getElementById("pixelCanvas").rows[row.rowIndex].cells[
      cell.cellIndex
    ].bgColor = getColor(); // using getColor set the color of selected cell to the selected color
  } catch (error) {
    console.error(error); // if error occurs, log it to console
  } finally {
    return;
  }
}

function getColor() {
  // get the color selected by the user and return it
  try {
    let currentColor = colorInput.value;
    return currentColor;
  } catch (error) {
    console.error(error); // if error occurs, log it to console
  }
}

function setHeight() {
  try {
    // set the height of the table
    return heightInput.valueAsNumber;
  } catch (error) {
    console.error(error); // if error occurs, log it to console
  }
}

function setWidth() {
  try {
    // set the width of the table
    return widthInput.valueAsNumber;
  } catch (error) {
    console.error(error); // if error occurs, log it to console
  }
}

function designCanvas(table) {
  // use height and width function expressions
  // to declare and assign values of height and width
  let height = setHeight();
  let width = setWidth();

  try {
    // set the initial value of innerHTML for table to null
    table.innerHTML = "";
  } catch (error) {
    console.error(error); // if error occurs, log it to console
  }
  // for the height and width selected by user
  // generate the table
  try {
    for (index = 0; index < height; index++) {
      let row = table.insertRow(index);
      for (indexJ = 0; indexJ < width; indexJ++) {
        row.insertCell(indexJ);
      }
    }
    // assign new value to tableCell variable and return it
    tableCell = document.getElementsByTagName("td");
    return tableCell;
  } catch (error) {
    console.error(error); // if error occurs, log it to console
  }
}
