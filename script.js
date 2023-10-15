function clearDisplay() {
  document.getElementById("display").value = "";
}

function clearEntry() {
  var display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function toggleSign() {
  var display = document.getElementById("display");
  if (display.value.startsWith("-")) {
    display.value = display.value.substr(1);
  } else {
    display.value = "-" + display.value;
  }
}

function appendToDisplay(value) {
  var display = document.getElementById("display");
  display.value += value;
}

function calculateResult() {
  var display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}