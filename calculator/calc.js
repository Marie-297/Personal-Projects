const display = document.getElementById("display");

function chooseNumber(input) {
  display.value = display.value + input;
}

function operationButton(input) {
  display.value = display.value + input;
}

function clearButton() {
  display.value = '';
}

function deleteBtn() {
 value = display.value.slice(0,-1);
 display.value = value;
}

function equalButton() {
  display.value = eval(display.value);
}
