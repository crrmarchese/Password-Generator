// Assignment Code (DOM Elements)
var resultsEl = document.querySelector("#pw-generator-results");
var pwlengthEl = document.querySelector("#number-range-output");
var uppercaseEl = document.querySelector("#uppercase-letters");
var lowercaseEl = document.querySelector("#lowercase-letters");
var numbersEl = document.querySelector("#numbers");
var symbolsEl = document.querySelector("#symbols");
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//Object of all the function names used to create random letters/numbers/symbols
var randomFunc = {
  upper: getRandomUpperCase,
  lower: getRandomLowerCase,
  number: getRandomNumbers,
  symbol: getRandomSymbols
}

// Randomize functions for letters/numbers/symbols
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

// Get the length and checkbox values based on user selections
generateBtn.addEventListener("click", function() {
  var pwlengthRange = +pwlengthEl.value;
  var upperCaseOption = uppercaseEl.checked;
  var lowerCaseOption = lowercaseEl.checked;
  var numbersOption = numbersEl.checked;
  var symbolsOption = symbolsEl.checked;

  resultsEl.innerText = generatePassword(upperCaseOption, lowerCaseOption, numbersOption, symbolsOption, pwlengthRange);
 
});


// Generate password function
function generatePassword(upper, lower, number, symbol, pwlengthRange) {
  // Init pw var
  var writePassword = "";

  // Count the number of checked boxes
  var countCheckedBoxes = (upper + lower + number + symbol);

  //Create an array based on the checked values; Braces create key/values in array
  var checkedItemArr = [upper, lower, number, symbol];
  console.log("Checked array: ", checkedItemArr);
  
  //Return array with key/value pairs

 
  // Filter out unchecked types/false values (If not selected we don't want to include it)

  // Loop over length and call generator function for each type

  // Add final pw to the pw var and return


}

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
