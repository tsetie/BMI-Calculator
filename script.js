var calculateBtn = document.getElementById("calculateBtn"),
  infoBox = document.getElementById("infoBox"),
  resultBox = document.getElementById("resultBox"),
  recalculateBtn = document.getElementById("recalculateBtn"),
  textBox = document.getElementsByClassName("textBox"),
  ft = document.getElementById("ft"),
  inches = document.getElementById("inches"),
  lbs = document.getElementById("lbs"),
  bmiSpan = document.getElementById("bmi"),
  weightSpan = document.getElementById("status");

calculateBtn.addEventListener("click", function (event) {
  for (var i = 0; i < textBox.length; i++) {
    if (isNaN(parseFloat(textBox[i].value))) {
      window.alert("Please enter only numbers.");
      return;
    }
  }
  infoBox.style.display = "none";
  var bmiValue = bmiCalculate(ft.value, inches.value, lbs.value);
  bmiSpan.textContent = bmiValue;
  weightStatus(bmiValue);
  resultBox.style.display = "block";
});

recalculateBtn.addEventListener("click", function (event) {
  resultBox.style.display = "none";
  for (var i = 0; i < textBox.length; i++) {
    textBox[i].value = "";
  }
  infoBox.style.display = "block";
});

function bmiCalculate(ft, inches, lbs) {
  var height = 0;
  var bmi = 0;
  height = parseFloat(ft) * 12 + parseFloat(inches);
  bmi = ((parseFloat(lbs) * 703) / (height * height)).toFixed(1);
  return bmi;
}

function weightStatus(bmiValue) {
  if (bmiValue < 18.5) {
    weightSpan.textContent = "underweight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightSpan.textContent = "healthy weight";
  } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
    weightSpan.textContent = "overweight";
  } else {
    weightSpan.textContent = "obese";
  }
}
