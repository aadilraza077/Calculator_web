// script.js

// Get elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const calculateButton = document.getElementById("calculate");

// Add click event listeners to number and operator buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.value += button.value;
    });
});

// Add click event listener to the "=" button to evaluate the expression
calculateButton.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});

// Clear the display when the "C" button is clicked
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});
