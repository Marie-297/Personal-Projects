//name my variable
const display = document.getElementById("display");
const equal = document.querySelector(".equalbtn");
let operators = document.querySelectorAll(".operator");
let previousDisplay = '';

// a function to display the number clicked on
function chooseNumber(input) {
  // Clear the display if it contains the result of the evaluation
  if (!isNaN(display.value)) {
    display.value = '';
  }
  // Append the new number to the display
  display.value = display.value + input;
}

// a function to display the operator character choice
function operationButton(input) {
  if (input === input &&  display.value.length+1 === input)  return
  display.value = eval(display.value.toString()) + input.toString();
}

// a function to clear all the displays
function clearButton() {
  display.value = '';
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
  let operatorSelect = '';
  let previousDisplay = display.value;
  console.log(previousDisplay);
  // Evaluate the expression in the display value
  let result = eval(previousDisplay);
  console.log(previousDisplay);
  console.log(result);
  display.value = result;
  equal.addEventListener("click", () => {
    operators.forEach(operator => {
      if (previousDisplay.includes(operator.textContent)) {
        operatorSelect = operator.textContent;
        console.log(operatorSelect);
        console.log(previousDisplay);
      }
    });
    console.log(previousDisplay);
    // If an operator is found, split the display value and evaluate the expression
    if (operatorSelect) {
      console.log(previousDisplay);
      let parts = previousDisplay.split(operatorSelect);
      const lastNum = parts[1];
      console.log(lastNum);
      console.log(operatorSelect);
      let result = eval(display.value + operatorSelect + lastNum);
      console.log(display.value + operatorSelect + lastNum);
      display.value = result;
      console.log(result);
    };
  }); 
};

//After clicking on the equal button several times and changing the display value with a different operator, the equal button will continue running the function from previous onclick event


