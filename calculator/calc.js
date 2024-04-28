//name my variable
const display = document.getElementById("display");
const equal = document.querySelector(".equalbtn");

// a function to display the number clicked on
function chooseNumber(input) {
  display.value = display.value + input;
  // if (display.value === eval(display.value)) {
  //   display.value = "";
  // };
}

// a function to display the operator character choice
function operationButton(input) {
  display.value = display.value + input;
}

// a function to clear all the displays
function clearButton() {
  display.value = '';
}

// a function to remove/delete the first display on the right each time that button is clicked
function deleteBtn() {
 value = display.value.slice(0,-1);
 display.value = value;
}

//conditional function for the equal-button
function equalBtn() {
  if (display.value === eval(display.value)) {
    equal.addEventListener("click", ()=> {
      let x = display.value;
      let y = Math.eval(x);
      display.value = y;
    })
  }
}

// a function to calculate/evaluate the result of the display
function equalButton() {
  display.value = eval(display.value);
};
