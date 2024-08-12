let displayElement = document.getElementById('display');
let currentInput = '';
function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = '';
    }
    currentInput += number;
    updateDisplay();
}
function appendOperator(operator) {
    if (currentInput === '') return;
    currentInput += ' ' + operator + ' ';
    updateDisplay();
}
function clearDisplay() {
    currentInput = '';
    updateDisplay();
}
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}
function calculate() {
    try {
        currentInput = eval(currentInput.replace(/ /g, ''));
        updateDisplay();
    } catch (error) {
        alert('Invalid calculation');
        clearDisplay();
    }
}
function updateDisplay() {
    displayElement.textContent = currentInput || '0';
}
