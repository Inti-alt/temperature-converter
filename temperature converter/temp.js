const textbox = document.getElementById("textbox");
const toFaranheit = document.getElementById("toFaranheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFaranheit.checked) {
    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "Faranheit";
  } else if (toCelcius.checked) {
    temp = Number(textbox.value);
    temp = ((temp - 32) * 5) / 9;
    result.textContent = temp.toFixed(1) + "Celcius";
  } else {
    result.textContent = "Select a unit";
  }
}
