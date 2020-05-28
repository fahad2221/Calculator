const input = document.querySelector('.keypad');
const output = document.querySelector('.view-key');
let clicks = 0;
let runningTotal = 0;
let buffer = "";
let lastOperator = null;
input.addEventListener('click', function () {
    //inital zeros
    if (clicks == 0) {
        if (event.target.className != "numberSquare botRow big" && event.target.className == "numberSquare topRow") {
            output.innerText = event.target.innerText;
            clicks++;
        }
    } else {
        if (event.target.className == "numberSquare topRow" || event.target.className == "numberSquare botRow big") {
            output.innerText += event.target.innerText;
        }
    }
    //addition
    if (event.target.className == "numberSquare topKey plus") {
        runningTotal += pasrseInt(output.innerText);
        lastOperator = "+";
        output.innerText = "";
    }
    //clear button
    if (event.target.className == "numberSquare topRow big") {
        clicks = 0;
        output.innerText = "0"
        lastOperator = null;
    }

    //equals button
    if(event.target.className == "numberSquare topRow equals")

});