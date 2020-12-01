
// function selectBar(barNo) {
//     chosenBar = barNo;
//     buttonState = "";
//     show();
// } 

// function removeBar() {
//     if (chosenBar == "") { return };
//     barHeights.splice(chosenBar-1, 1);
//     chosenBar = "";
//     buttonState = "disabled"
//     show();
// }

// function addBar() {
// inputValue = parseInt(inputValue);
// if (inputValue > 10 || inputValue < 1 || isNaN(inputValue)) {
//     alert("Verdi må være mellom 1 og 10");
//     return; }
// let barHeight = inputValue;
// barHeights.push(barHeight);
// console.log(barHeights);
// show();
// }

// function editBar() {
//     if (validateInputValue() === false){ return };
//     barHeights[chosenBar-1] = inputValue;
//     console.log("Ny stolpeverdi er" + inputValue);

//     show();
// } 

// function validateInputValue() {
//     inputValue = parseInt(inputValue);
//     if (inputValue > 10 || inputValue < 1 || isNaN(inputValue)) {
//     alert("Verdi må være mellom 1 og 10");
//     return false; } 
//     else {
//         return true;
//     };
// }


function selectBar(barNo) {
    if (chosenBar === barNo) { chosenBar = ""; 
    alert("deselected bar")
    buttonState = "disabled";
    } else {
    chosenBar = barNo;
    buttonState = "";
    }
    
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
if (validateInputValue() === false){ return };
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