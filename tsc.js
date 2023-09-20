// Get the display element
var display = document.getElementById('display');
// Function to append characters to the display
function appendToDisplay(value) {
    display.value += value;
}
// Function to clear the display
function clearDisplay() {
    display.value = '';
}
// Function to calculate the result and update the display
function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}
