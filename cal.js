let result = '';

function appendNumber(number) {
    result += number;
    document.getElementById('result').value = result;
}

function appendOperator(operator) {
    result += ' ' + operator + ' ';
    document.getElementById('result').value = result;
}

function clearResult() {
    result = '';
    document.getElementById('result').value = result;
}

function calculateResult() {
    try {
        result = eval(result);
        document.getElementById('result').value = result;
    } catch (error) {
        alert('Invalid input');
    }
}
