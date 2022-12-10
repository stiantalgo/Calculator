let test = "21-3+7";

checkString(test, "-");

function checkString(string, operator) {
    let mystr = string;
    if (mystr.includes(operator)) {
        let mystr = string.split(`${operator}`);
        let num1 = parseInt(mystr[0]);
        let num2 = parseInt(mystr[1]);
        let sum = 0;

        switch (operator) {
            case "+": sum = (num1 + num2); break;
            case "-": sum = (num1 - num2); break;
            case "/": sum = num1 / num2; break;
            case "*": sum = num1 * num2; break;
            default:
                break;
        }
        console.log(sum);


    }

}