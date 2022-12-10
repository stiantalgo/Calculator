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
        addNums(btn.textContent);
        updateDisplay();

    });
});

operatorBtns.forEach(opr => {
    opr.addEventListener("click", () => {
        operators(`${opr.textContent}`);
        updateDisplay();
    })
});

equalsBtn.addEventListener("click", () => {
    equalsFunc();

})

clearBtn.addEventListener('click', clearIt);
deleteBtn.addEventListener('click', deleteIt);
dotBtn.addEventListener('click', dotIt);


currentDisplay.textContent = "";
previousDisplay.textContent = "";
var currDisplayNum = 0;
var prevDisplayNum = 0;

var currentNumber = "";
var previousNumber = "";
var operator = undefined;


function equalsFunc(){

}

function addNums(number){
currentNumber += number;
}

function operators(sign) {
    var picker = sign;
    totalA = parseInt(currentNumber);

    if(isNaN(totalA) || isNaN(currentNumber)){return;}

    switch (picker) {
        case "+":
            currDisplayNum += totalA;
            prevDisplayNum = currDisplayNum + " +";
            break;

        case "-":
            currDisplayNum -= totalA;
            prevDisplayNum = currDisplayNum + " -";
            break;

        case "/":
            if (currDisplayNum == 0) {
                currDisplayNum = totalA;
            } else {
                currDisplayNum /= totalA;
                prevDisplayNum = currDisplayNum + " /";
            }
            break;

        case "*":
            if (currDisplayNum === 0) {
                currDisplayNum = 1;
            }
            currDisplayNum *= totalA;
            prevDisplayNum = currDisplayNum + " *";
            break;

        default:
            break;
    }

    currentNumber = "";
    console.log(typeof (currDisplayNum));
    currentDisplay.textContent = currDisplayNum;
    previousDisplay.textContent = prevDisplayNum;
}

function updateDisplay(){
    if(currentNumber != "" || !isNaN(currentNumber)){
        currentDisplay.textContent = currentNumber;
    }
    if(previousNumber == "" || isNaN(previousNumber)){
        previousDisplay.textContent = previousNumber;
    }
}





function clearIt() {
    currentNumber = "";
    previousNumber = "";
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


