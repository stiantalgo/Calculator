const currentDisplay = document.querySelector('#displayNums');
const previousDisplay = document.querySelector('#displayNums2');
const clearBtn = document.querySelector('#btn-clear');
const deleteBtn = document.querySelector('#btn-delete');
const dotBtn = document.querySelector('#btn-dot');
const equalsBtn = document.querySelector('#btn-equals');

const testBtn = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');




var mathOperator = "";
var currentNum = "";
var prevNum = "";
var totalNum = 0;

function addNumbers(number) {
    currentNum += number;
    updateDisplay();

}

function operate(operator) {      
    console.log(operator);
    if(prevNum == ""){
        prevNum = parseFloat(currentNum);
        mathOperator = operator;
        currentNum = "";
    }

    // endre operator
    updateDisplay();

}


function operator(opr){
    mathOperator = opr;
    prevNum = currentNum;
    previousDisplay.textContent = `${prevNum}${mathOperator}`;
    currentNum = "";
    currentDisplay.textContent = "";
}

function calculateIt(){
    prevNum = parseFloat(prevNum);
    currentNum = parseFloat(currentNum);

    switch (mathOperator) {
        case "+": prevNum = (prevNum + currentNum); break;
        case "-": prevNum = (prevNum - currentNum); break;
        case "/": prevNum = (prevNum / currentNum); break;
        case "*": prevNum = (prevNum * currentNum); break;
        default: break;
    }
    previousDisplay.textContent = "";
    currentDisplay.textContent = prevNum;
    currentNum = prevNum;
    prevNum = "";
}


function updateDisplay() {
    
    currentDisplay.textContent = `${currentNum}`;
    if(mathOperator != undefined || mathOperator != ""){
        previousDisplay.textContent = `${prevNum}${mathOperator}`;
    }else{
        previousDisplay.textContent = prevNum;
    }
    
}


function clearIt() {
    currentNum = "";
    totalNum = 0;
    prevNum = "";
    mathOperator = "";

    previousDisplay.textContent = "";
    currentDisplay.textContent = "";
}

function deleteIt() {
    currentNum = currentNum.slice(0, -1);
    currentDisplay.textContent = currentNum;
}

function dotIt() {
    if (currentNum.includes(".")) {
        return;
    } else {
        currentNum += ".";
        currentDisplay.textContent = currentNum;
    };
}



function splitString(string, operator) {

    if (string.includes(operator)) {
        let myList = string.split(`${operator}`);
        let num1 = parseInt(myList[0]);
        let num2 = parseInt(myList[1]);
        let sum = 0;

        switch (operator) {
            case "+": sum = (num1 + num2); break;
            case "-": sum = (num1 - num2); break;
            case "/": sum = num1 / num2; break;
            case "*": sum = num1 * num2; break;
            default:
                break;
        }
        return sum;
    }
}


clearBtn.addEventListener('click', clearIt);
deleteBtn.addEventListener('click', deleteIt);
dotBtn.addEventListener('click', dotIt);

testBtn.forEach(btn => { btn.addEventListener("click", () => { addNumbers(btn.textContent); }); });
operatorBtns.forEach(opr => { opr.addEventListener("click", () => { operate(opr.textContent); }) });
equalsBtn.addEventListener('click', calculateIt);



