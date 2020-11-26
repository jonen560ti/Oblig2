// hjelpevariable for både view og controller
var contentDiv = document.getElementById('content');

// model

let barHeights = [7, 3, 1, 5, 8, 5];
let chosenBar = ""; // Variabel for hvilken stolpe som er valgt
let inputValue; // Variabel for hva som er skrevet i input-feltet
let buttonState = "disabled";
let editButton = document.getElementById('editButton');
let removeButton = document.getElementById('removeButton');

// view
show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < barHeights.length; i++) {
        svgInnerHtml += createBar(barHeights[i], i + 1, chosenBar - 1 == i);
    }

    contentDiv.innerHTML = `
        <svg id="chart" width="800" viewBox="0 0 200 100">
        ${svgInnerHtml}
        </svg><br/>
        Valgt stolpe: <i>${chosenBar}</i>
        <br />
        Verdi:
        <input type="number" min="1" max="10" oninput="inputValue = this.value" />
        <button id="addButton" onclick="addBar()" >Legg til stolpe</button>
        <button ${buttonState} id="editButton" onclick="editBar()" >Endre valgt stolpe</button><br />
        <button ${buttonState} id="removeButton" onclick="removeBar(this)" >Fjerne valgt stolpe</button>
        `;
}

function createBar(number, barNo, border) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 100 - height;
    let color = calcColor(1, 10, barNo);
    return `<rect width="${width}" height="${height}"
            x="${x}" y="${y}" fill="${color}" stroke="${border ? "black" : color }" 
            stroke-width="1" id="${barNo}" onclick="selectBar(${barNo})">  </rect> `;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

// controller

function selectBar(barNo) {
    chosenBar = barNo;
    buttonState = "";
    show();
} 

function removeBar() {
    if (chosenBar == "") { return };
    barHeights.splice(chosenBar-1, 1);
    chosenBar = "";
    buttonState = "disabled"
    show();
}

function addBar() {
inputValue = parseInt(inputValue);
if (inputValue > 10 || inputValue < 1 || isNaN(inputValue)) {
    alert("Verdi må være mellom 1 og 10");
    return; }
let barHeight = inputValue;
barHeights.push(barHeight);
console.log(barHeights);
show();
}

function editBar() {
    if (validateInputValue() === false){ return };
    barHeights[chosenBar-1] = inputValue;
    console.log("Ny stolpeverdi er" + inputValue);

    show();
} 

function validateInputValue() {
    inputValue = parseInt(inputValue);
    if (inputValue > 10 || inputValue < 1 || isNaN(inputValue)) {
    alert("Verdi må være mellom 1 og 10");
    return false; } 
    else {
        return true;
    };
}