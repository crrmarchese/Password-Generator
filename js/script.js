// Assignment Code (DOM Elements)
var pwlengthEl = document.querySelector("#number-range-output");
var uppercaseEl = document.querySelector("#uppercase-letters");
var lowercaseEl = document.querySelector("#lowercase-letters");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");
var generateBtn = document.querySelector("#generate");


// Randomize functions
function getRandomUpperCase() {
  var txtUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return txtUpperCase[Math.floor(Math.random() * txtUpperCase.length)];
}

function getRandomLowerCase() {
  var txtLowerCase = "abcdefghijklmnopqrstuvwxyz";
  return txtLowerCase[Math.floor(Math.random() * txtLowerCase.length)];
}

function getRandomNumbers() {
  var txtNumbers = "0123456789";
  return txtNumbers[Math.floor(Math.random() * txtNumbers.length)]; 
}

function getRandomSymbols() {
  var txtSymbols = "!#$%&()*+-/<=>?@[]^_{|}~";
  return txtSymbols[Math.floor(Math.random() * txtSymbols.length)];
}

//Get values based on user selections
function generatePassword() {
  var pwlengthRange = +pwlengthEl.value;
  var upperCaseOption = uppercaseEl.checked;
  var lowerCaseOption = lowercaseEl.checked;
  var numbersOption = numbersEl.checked;
  var symbolsOption = symbolsEl.checked;

  console.log(pwlengthRange, upperCaseOption, lowerCaseOption, numbersOption, symbolsOption);
}


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#pw-generator-results");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// Custom Range Slider

// Range slider control ID
var sliderRangeNum = document.getElementById("slider-range-customizer");

//Input box ID to return value from slider control
var sliderNumOutput = document.getElementById("number-range-output");

//Returns value from slider control into input box
sliderNumOutput.innerHTML = sliderRangeNum.value;

// Execute JS when a user writes something in <input> field. 
//Write the value from the slider into the <input> value attribute
sliderRangeNum.oninput = function() {
  sliderNumOutput.value = this.value;
}
