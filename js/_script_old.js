// Assignment Code (DOM Elements)
let pwresultsField = document.querySelector("#pw-generator-results");
let pwlengthInput = document.querySelector("#number-range-output");
let uppercaseChBox = document.querySelector("#uppercase-letters");
let lowercaseChBox = document.querySelector("#lowercase-letters");
let numbersChBox = document.querySelector("#numbers");
let symbolsChBox = document.querySelector("#symbols");
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");


//FROM VIDEO
//Object of all the function names used to create random letters/numbers/symbols
// var charRandomFunc = {
//   upper: getRandomUpperCase,
//   lower: getRandomLowerCase,
//   number: getRandomNumbers,
//   symbol: getRandomSymbols
// }

// Randomize functions for letters/numbers/symbols
function getRandomUpperCase() {
  let txtUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return txtUpperCase[Math.floor(Math.random() * txtUpperCase.length)];
}

function getRandomLowerCase() {
  let txtLowerCase = "abcdefghijklmnopqrstuvwxyz";
  return txtLowerCase[Math.floor(Math.random() * txtLowerCase.length)];
}

function getRandomNumbers() {
  let txtNumbers = "0123456789";
  return txtNumbers[Math.floor(Math.random() * txtNumbers.length)];
}

function getRandomSymbols() {
  let txtSymbols = "!#$%&()*+-/<=>?@[]^_{|}~";
  return txtSymbols[Math.floor(Math.random() * txtSymbols.length)];
}

// Get the length and checkbox values based on user selections
generateBtn.addEventListener("click", function() {

  let pwlengthRange = parseInt(pwlengthInput.value);
  let upperCaseOption = uppercaseChBox.checked;
  let lowerCaseOption = lowercaseChBox.checked;
  let numbersOption = numbersChBox.checked;
  let symbolsOption = symbolsChBox.checked;
  console.log(pwlengthRange, upperCaseOption, lowerCaseOption, numbersOption, symbolsOption);

//FROM VIDEO
//  pwresultsField.innerText = generatePassword(upperCaseOption, lowerCaseOption, numbersOption, symbolsOption, pwlengthRange);

});

//FROM VIDEO
// Generate password function
//function generatePassword(upper, lower, number, symbol, pwlengthRange) {
  // Init pw var
  //let writePassword = "";

  // Count the number of checked boxes
  //let countCheckedBoxes = (upper + lower + number + symbol);

  //Create an array based on the checked values; Braces create key/values in array
 // let checkedItemArr = [upper, lower, number, symbol];
  //console.log("Checked array: ", checkedItemArr);
  
  //Return array with key/value pairs

 
  // Filter out unchecked types/false values (If not selected we don't want to include it)

  // Loop over length and call generator function for each type

  // Add final pw to the pw var and return


//}

// Custom Range Slider

// Range slider control ID
var sliderRangeNum = document.getElementById("slider-range-customizer");

//Input box ID to return value from slider control
var sliderNumOutput = document.getElementById("number-range-output");

//Returns value from slider control into input box
sliderNumOutput.innerHTML = sliderRangeNum.value;

//Return the value from the slider into the <input> value attribute
sliderRangeNum.oninput = function() {
  sliderNumOutput.value = this.value;
}
