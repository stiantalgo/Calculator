const currentDisplay = document.querySelector('#displayNums');
const previousDisplay = document.querySelector('#displayNums2');
const clearBtn = document.querySelector('#btn-clear');
const deleteBtn = document.querySelector('#btn-delete');
const dotBtn = document.querySelector('#btn-dot');
const equalsBtn = document.querySelector('#btn-equals');

const testBtn = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');

clearBtn.addEventListener('click', clearIt);
deleteBtn.addEventListener('click', deleteIt);
dotBtn.addEventListener('click', dotIt);
// equalsBtn.addEventListener('click', equalNums);


// testBtn.forEach(btn => { btn.addEventListener("click", () => { addNumbers(btn.textContent); }); });
// operatorBtns.forEach(opr => { opr.addEventListener("click", () => { operate(opr.textContent); }) });

testBtn.forEach(btn => { btn.addEventListener("click", () => { addNumbers(btn.textContent); }); });
operatorBtns.forEach(opr => { opr.addEventListener("click", () => { operate(opr.textContent); }) });
equalsBtn.addEventListener('click', calculateIt);

var myOperator = undefined;

var mathOperator = "";
var currentNum = "";
var prevNum = "";
var totalNum = 0;

function addNumbers(number) {
    currentNum += number;
    //updateDisplay();
}


// broken

function operate(operator) {      

    if(prevNum == ""){
        prevNum = parseFloat(currentNum);
        myOperator = operator;
        currentNum = "";
    }
    else if(prevNum != "" && myOperator != undefined){
        num2 = parseFloat(currentNum);
        switch (operator) {
            case "+": sum = (prevNum + num2), myOperator = operator; break;
            case "-": sum = (prevNum - num2), myOperator = operator; break;
            case "/": sum = (prevNum / num2), myOperator = operator; break;
            case "*": sum = (prevNum * num2), myOperator = operator; break;
            default: break;
        }
        prevNum = sum;
        currentNum = "";
    } 
    updateDisplay();

}


function operate(opr){
    mathOperator = opr;
    prevNum = currentNum;
    previousDisplay.textContent = `${prevNum}${mathOperator}`;
    currentNum = "";
    currentDisplay.textContent = "";
}

function calculateIt(){
    prevNum = Number(prevNum);
    currentNum = Number(currentNum);

    switch (mathOperator) {
        case "+": prevNum = (prevNum + num2); break;
        case "-": prevNum = (prevNum - num2); break;
        case "/": prevNum = (prevNum / num2); break;
        case "*": prevNum = (prevNum * num2); break;
        default: break;
    }
    previousDisplay.textContent = "";
    currentDisplay.textContent = prevNum;
}


function updateDisplay() {
    
    currentDisplay.textContent = `${currentNum}`;
    if(myOperator != undefined){
        previousDisplay.textContent = `${prevNum}${myOperator}`;
    }else{
        previousDisplay.textContent = prevNum;
    }
    
}

function equalNums() {
    num2 = parseFloat(currentNum);
    switch (myOperator) {
        case "+": sum = (prevNum + num2); break;
        case "-": sum = (prevNum - num2); break;
        case "/": sum = (prevNum / num2); break;
        case "*": sum = (prevNum * num2); break;
        default: break;
    }
    prevNum = sum;
    currentNum = sum;
    myOperator = undefined;
    updateDisplay();
}


function clearIt() {
    currentNum = "";
    totalNum = 0;
    prevNum = "";

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









function operateTwo(operator){
    // if(prevNum == "" || !prevNum.toString().includes(operator)){
    //     prevNum =+ (currentNum);
    //     prevNum = `${prevNum}${operator}`
    //     currentNum = "";
    // }

    // else if(prevNum.toString().includes(operator)){
    //     let num1 = parseFloat(prevNum.split(([prevNum.length -1])))
    //     let num2 = parseFloat(currentNum);
    //     let sum = 0;

    //     switch (operator) {
    //         case "+": sum =+ (num1 + num2); break;
    //         case "-": sum =+ (num1 - num2); break;
    //         case "/": sum =+ (num1 / num2); break;
    //         case "*": sum =+ (num1 * num2); break;
    //         default: break;
    //     }
    //     prevNum =+ sum;        
    // }    
    updateDisplay();
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






