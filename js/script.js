// Assignment Code (DOM Elements)
let pwresultsField = document.querySelector("#pw-generator-results");
let pwlengthInput = document.querySelector("#number-range-output");
let uppercaseChBox = document.querySelector("#uppercase-letters");
let lowercaseChBox = document.querySelector("#lowercase-letters");
let numbersChBox = document.querySelector("#numbers");
let symbolsChBox = document.querySelector("#symbols");
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

//Create variables for characters
let txtUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let txtLowerCase = "abcdefghijklmnopqrstuvwxyz";
let txtNumbers = "0123456789";
let txtSymbols = "!#$%&()*+-/<=>?@[]^_{|}~";

// Randomize functions for letters/numbers/symbols
// function getRandomUpperCase() {
//   let txtUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   return txtUpperCase[Math.floor(Math.random() * txtUpperCase.length)];
// }

// function getRandomLowerCase() {
//   let txtLowerCase = "abcdefghijklmnopqrstuvwxyz";
//   return txtLowerCase[Math.floor(Math.random() * txtLowerCase.length)];
// }

// function getRandomNumbers() {
//   let txtNumbers = "0123456789";
//   return txtNumbers[Math.floor(Math.random() * txtNumbers.length)];
// }

// function getRandomSymbols() {
//   let txtSymbols = "!#$%&()*+-/<=>?@[]^_{|}~";
//   return txtSymbols[Math.floor(Math.random() * txtSymbols.length)];
// }

// Custom Range Slider

// Range slider control ID
var sliderRangeNum = document.getElementById("slider-range-customizer");

// Input box ID to return value from slider control
var sliderNumOutput = document.getElementById("number-range-output");

// Returns value from slider control into input box
sliderNumOutput.innerHTML = sliderRangeNum.value;

// Return the value from the slider into the <input> value attribute
sliderRangeNum.oninput = function() {
  sliderNumOutput.value = this.value;
}

// When the generate button is clicked, check to see which checkboxes are checked
generateBtn.addEventListener("click", function() {

  // If no checkboxes are selected, return an alert message
  // Otherwise get the length value and checkbox values that are true by calling
  // the generatePassword() function

  if(uppercaseChBox.checked === false && lowercaseChBox.checked === false && numbersChBox.checked === false && symbolsChBox.checked === false) {
    alert("Please select your options using the checkboxes.");
  } else {
    generatePassword();
  }
});

function generatePassword() {
  // Set empty password variable
   let password = "";

  // Set empty variable for a combination of all checked/selected character types
  let allAvailableChars = "";
 
 // Get the length and checkbox values based on user selections
  let pwlengthRange = parseInt(pwlengthInput.value);
  let upperCaseOption = uppercaseChBox.checked;
  let lowerCaseOption = lowercaseChBox.checked;
  let numbersOption = numbersChBox.checked;
  let symbolsOption = symbolsChBox.checked;
  // console.log(pwlengthRange, upperCaseOption, lowerCaseOption, numbersOption, symbolsOption);
  if (upperCaseOption === true) {
    allAvailableChars += txtUpperCase;
  }
  if (lowerCaseOption === true) {
    allAvailableChars += txtLowerCase;
  }
  if (numbersOption === true) {
    allAvailableChars += txtNumbers;
  }
  if (symbolsOption === true) {
    allAvailableChars += txtSymbols;
  }
  //  console.log(allAvailableChars);
  
};

//Create loop for password characters
//for(let i = 0; i <= pwlengthRange; i++) {

//}

// Write password to the pw results field
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = pwresultsField;
  
//     passwordText.value = password;
  
// }

