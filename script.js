const x = document.getElementById('number1');
const y = document.getElementById('number2');
const result = document.getElementById('result');

function calculater(operator) {
    const num1 = parseFloat(x.value);
    const num2 = parseFloat(y.value);

    if (isNaN(num1) || isNaN(num2)) {
        result.innerText = 'Please enter valid numbers';
        return;
    }

    let output;

    switch (operator) {
        case '+':
            output = num1 + num2;
            break;
        case '-':
            output = num1 - num2;
            break;
        case '*':
            output = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result.innerText = 'Cannot divide by zero';
                return;
            }
            output = num1 / num2;
            break;
        default:
            result.innerText = 'Invalid operator';
            return;
    }

    result.innerText = `Result: ${output}`;
}
