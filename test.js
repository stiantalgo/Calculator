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
equalsBtn.addEventListener('click', equalNums);


testBtn.forEach(btn => { btn.addEventListener("click", () => { addNumbers(btn.textContent); }); });
operatorBtns.forEach(opr => { opr.addEventListener("click", () => { operate(opr.textContent); }) });


//global string variabel på topp som tracke aktiv operator, kjør if / switch på global tracker når du ska kjøre split//
var currentOperator = undefined;
var currentNum = "";
var prevNum = "";
var totalNum = 0;

function addNumbers(number) {
    currentNum += number;
    updateDisplay();
}

function operate(operator) {
    //prevNum = currentNum
        if (currentNum.includes(operator)) {
            console.log("Includes");
            let myList = currentNum.split(`${operator}`);
            let num1 = parseInt(myList[0]);
            let num2 = parseInt(myList[1]);
            let sum = 0;

            switch (operator) {
                case "+": sum = (num1 + num2); break;
                case "-": sum = (num1 - num2); break;
                case "/": sum = (num1 / num2); break;
                case "*": sum = (num1 * num2); break;
                default: break;
            }
            console.log(typeof(sum));
            console.log(typeof(totalNum));
            totalNum = sum;
        }
        else {
            currentNum += operator;
        }
        
        updateDisplay();
        

}

function updateDisplay() {
    currentDisplay.textContent = currentNum;
    previousDisplay.textContent = totalNum;
}

function equalNums() {

    if (currentNum.includes("+")) {
        totalNum = + splitString(currentNum, "+");
    }
    else if (currentNum.includes("-")) {
        totalNum = splitString(currentNum, "-");
    }
    else if (currentNum.includes("/")) {
        totalNum = splitString(currentNum, "/");
    }
    else if (currentNum.includes("*")) {
        totalNum = splitString(currentNum, "*");
    }
    currentNum = "";
    updateDisplay();
}


function clearIt() {
    currentOperator = undefined;
    currentNum = "";
    totalNum = "";
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






