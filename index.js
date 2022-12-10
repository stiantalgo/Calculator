const currentDisplay = document.querySelector('#displayNums');
const previousDisplay = document.querySelector('#displayNums2');
const clearBtn = document.querySelector('#btn-clear');
const deleteBtn = document.querySelector('#btn-delete');
const dotBtn = document.querySelector('#btn-dot');
const equalsBtn = document.querySelector('#btn-equals');

const testBtn = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');


testBtn.forEach(btn => { btn.addEventListener("click", () => { addNumbers(btn); }); });
operatorBtns.forEach(opr => { opr.addEventListener("click", () => { wtfAmIDoing(`${opr.textContent}`); }) });

clearBtn.addEventListener('click', clearIt);
deleteBtn.addEventListener('click', deleteIt);
dotBtn.addEventListener('click', dotIt);
equalsBtn.addEventListener('click', equalNums);


currentDisplay.textContent = "";

var currentNumber = "";
var previousNumber = "";

var totalA = 0;
var totalB = 0;
var totalSum = 0;
var totalDisplaySum = "";

var operatorused = false;
var chosenOperator = "";

function equalNums() {
    totalB = parseFloat(currentNumber);
    var currNum = parseFloat(totalDisplaySum.split(!typeof(Number))); // split where string is not a number
    var equalSum = 0;
    var myLen = (totalDisplaySum.length - 1);
    if (totalDisplaySum[myLen] == "+") {
        equalSum = totalSum + currNum;
    }
    else if (totalDisplaySum[myLen] == "-") {
        equalSum = totalSum - currNum;
    }
    else if (totalDisplaySum[myLen] == "/") {
        equalSum = totalSum / currNum;
    }
    else if (totalDisplaySum[myLen] == "*") {
        equalSum = totalSum * currNum;
    }
    console.log(equalSum);
    currentDisplay.textContent = `${equalSum}`;
}

function addNumbers(btn) {
    currentNumber += btn.textContent; 
    currentDisplay.textContent = currentNumber;
}

function clearIt() {
    currentNumber = "";
    previousNumber = "";
    totalA = 0;
    totalB = 0;
    totalSum = 0;
    totalDisplaySum = "";
    previousDisplay.textContent = "";
    currentDisplay.textContent = "";
}

function deleteIt() {
    currentNumber = currentNumber.slice(0, -1);
    currentDisplay.textContent = currentNumber;
}

function dotIt() {
    if (currentNumber.includes(".")) {
        return;
    } else {
        currentNumber += ".";
        currentDisplay.textContent = currentNumber;
    };
}

function wtfAmIDoing(sign) {
    var picker = sign;
    totalA = parseInt(currentNumber);

    if(isNaN(totalA) || isNaN(currentNumber)){return;}

    switch (picker) {
        case "+":
            totalSum += totalA;
            totalDisplaySum = totalSum + " +";
            break;

        case "-":
            totalSum -= totalA;
            totalDisplaySum = totalSum + " -";
            break;

        case "/":
            if (totalSum == 0) {
                totalSum = totalA;
            } else {
                totalSum /= totalA;
                totalDisplaySum = totalSum + " /";
            }
            break;

        case "*":
            if (totalSum === 0) {
                totalSum = 1;
            }
            totalSum *= totalA;
            totalDisplaySum = totalSum + " *";
            break;

        default:
            break;
    }


    currentNumber = "";
    console.log(typeof (totalSum));
    currentDisplay.textContent = totalSum;
    previousDisplay.textContent = totalDisplaySum;
    console.log(typeof(totalDisplaySum));


}

function operateThis(myKey) {
    chosenOperator = myKey;

    var mySum;
    const prev = parseFloat(currentNumber);
    const next = parseFloat(previousNumber);

    if(isNaN(prev) || isNaN(next)){
        return;
    }

    switch (chosenOperator) {
        case "+":
            mySum = prev + next;
            break;
        case "-":
            mySum = prev - next;
            break;
        case "/":
            mySum = prev / next;
            break;
        case "*":
            mySum = prev * next;
            break;
        default:
            console.log("default");
            return;
    }
    totalSum = mySum;
    chosenOperator = "";
}





