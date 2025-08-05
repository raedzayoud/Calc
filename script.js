const display = document.getElementById("display");

function appendToDispaly(value) {
  display.value += value;
}

function calulate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
