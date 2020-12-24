// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Custom Range Slider

// Range slider control ID
var sliderRangeNum = document.getElementById("slider-range-customizer");

//Input box ID to return value from slider control
var sliderNumOutput = document.getElementById("number-range-output");

//Returns value from slider control into input box
sliderNumOutput.innerHTML = sliderRangeNum.value;

// Execute JS when a user writes something in <input> field. Write the value from the slider into the <input> value attribute
sliderRangeNum.oninput = function() {
  sliderNumOutput.value = this.value;
}
