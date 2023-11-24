let currentNumber = 1;
function nextUp(){
    currentNumber++;
    updateDisplay();
}
function updateDisplay(){
    document.getElementById('numberDisplay').textContent = currentNumber;
}