const currentDisplay = document.querySelector('#displayNums');
const previousDisplay = document.querySelector('#displayNums2');
const clearBtn = document.querySelector('#btn-clear');
const deleteBtn = document.querySelector('#btn-delete');
const dotBtn = document.querySelector('#btn-dot');
const equalsBtn = document.querySelector('#btn-equals');

const testBtn = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');


testBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        appendNumber(btn.textContent);
        updateCalculator();
    });
});

operatorBtns.forEach(opr => {
    opr.addEventListener("click", () => {
        operateNumber(`${opr.textContent}`);
        updateCalculator();
    })
});

equalsBtn.addEventListener("click", () => {
    calculateIt();
    updateCalculator();
})

clearBtn.addEventListener('click', clearIt);
deleteBtn.addEventListener('click', deleteIt);
dotBtn.addEventListener('click', dotIt);


currentDisplay.textContent = "";
previousDisplay.textContent = "";

var currentNumber = "";
var previousNumber = "";
var operator = undefined;






function operateNumber(oper) {
    operator = oper;
    if (currentNumber === "") { return; }
    if (previousNumber !== "") { calculateIt(); }

    
    previousNumber = currentNumber;
    currentNumber = "";
}

function calculateIt() {
    let calc;
    const previous = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(previous) || isNaN(current)) { return };

    switch (operator) {
        case "+": calc = previous + current; break;
        case "-": calc = previous - current; break;
        case "/": calc = previous / current; break;
        case "*": calc = previous * current; break;
        default: return;
    }
    currentNumber = calc;
    operator = undefined;
    previousNumber = "";
}

function appendNumber(number) {
    currentNumber = currentNumber.toString() + number.toString();
}


function displayFormat(num){
    const stringNum = num.toString();
    const intNums = parseFloat(stringNum.split(".")[0])
    const decNums = stringNum.split(".")[1];

    var interDisplay;
    if(isNaN(interDisplay)){
        interDisplay = '';
    }else{
        interDisplay = intNums.toLocaleString('en', {maximumFractionDigits: 0});
    }

    if(decNums != null){
        return `${intNums}.${decNums}`;
    }else{
        return intNums;
    }
}

function updateCalculator() {
    currentDisplay.textContent = displayFormat(currentNumber);
    if(operator != null){
        previousDisplay.textContent = `${displayFormat(previousNumber)} ${operator}`;
    }else{
        previousDisplay.textContent = "";
    }
    
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
    console.log(currentNumber);
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


