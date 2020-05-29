const input = document.querySelector('.keypad');
const output = document.querySelector('.view-key');
let clicks = 0;
let runningTotal = 0;
let buffer = 0;
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
        buffer = parseInt(output.innerText);
        lastOperator = "+";
        output.innerText = "0";
        clicks = 0;
    }
    //negate
    if(event.target.className == "numberSquare botRow minus"){
        buffer = parseInt(output.innerText);
        clicks = 0;
        output.innerText= "0";
        lastOperator = "-";
    }
    //multiply
    if(event.target.className == "numberSquare topKey multiply"){
        buffer = parseInt(output.innerText);
        clicks = 0;
        output.innerText= "0";
        lastOperator = "x";
    }
    //division
    if(event.target.className == "numberSquare topKey divide"){
        buffer = parseInt(output.innerText);
        clicks = 0;
        output.innerText = "0";
        lastOperator = "/";
    }
    //clear button
    if (event.target.className == "numberSquare topRow big") {
        clicks = 0;
        output.innerText = "0";
        lastOperator = null;
        runningTotal = 0;
    }
    //equals button
    if(event.target.className == "numberSquare topKey equals"){
        switch (lastOperator){
            case '+':
                let temp = parseInt(output.innerText) + buffer;
                output.innerText = "" + temp;
                runningTotal += temp;
                buffer = 0;
                break;
            case '-':
                let temp2 = buffer - parseInt(output.innerText);
                output.innerText = "" + temp2;
                runningTotal += temp2;
                buffer = 0;
                break;
            case 'x':
                let temp3 = buffer * parseInt(output.innerText);
                output.innerText = "" + temp3;
                runningTotal += temp3;
                buffer = 0;
                break;
            case '/':
                let temp4 = buffer / parseInt(output.innerText);
                output.innerText = "" + temp4;
                runningTotal += temp4;
                buffer = 0;
                break;  
        }   

    }

});