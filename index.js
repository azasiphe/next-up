let currentNumber = 1;
document.querySelectorAll('.number-cell').forEach(cell => {
    cell.addEventListener('click', function() {
        currentNumber = parseInt(this.textContent);
        updateDisplay();
    });
});

function nextUp() {
    currentNumber++;
    updateDisplay();
}


function updateDisplay() {
    document.getElementById('numberBox').textContent = currentNumber;
}