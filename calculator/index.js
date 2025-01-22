//name my variable
const display = document.getElementById("display");
const equal = document.querySelector(".equalbtn");
let operators = document.querySelectorAll(".operator");
let previousDisplay = '';
let isResultDisplayed = false;

// a function to display the number clicked on
function chooseNumber(input) {
  if (isResultDisplayed) {
    // Clear the display if a result was previously shown
    display.value = '';
    isResultDisplayed = false; // Reset the flag
  }
  display.value += input; // Append the clicked number to the display
}

// a function to display the operator character choice
function operationButton(input) {
  if (!isNaN(display.value.slice(-1))) {
    display.value += input;
    isResultDisplayed = false;
  }
}

// a function to clear all the displays
function clearButton() {
  display.value = '';
  isResultDisplayed = false;
}

// a function to remove/delete the last character each time that button is pressed
function deleteBtn() {
 value = display.value.slice(0,-1);
 display.value = value;
}
let operatorSelect = '';

console.log(previousDisplay);
display.addEventListener('input', () => {
  previousDisplay = display.value;
})

// a function to calculate/evaluate the result of the display
function equalButton() {
  try {
    display.value = eval(display.value); // Calculate the result
    isResultDisplayed = true; // Set the flag to indicate result is shown
  } catch (error) {
    display.value = 'Error'; // Handle invalid expressions
  }
};




