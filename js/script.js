// Assignment Code (DOM Elements)
let pwresultsField = document.querySelector("#pw-generator-results");
let pwlengthInput = document.querySelector("#number-range-output");
let uppercaseChBox = document.querySelector("#uppercase-letters");
let lowercaseChBox = document.querySelector("#lowercase-letters");
let numbersChBox = document.querySelector("#numbers");
let symbolsChBox = document.querySelector("#symbols");
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

//Create variables for character types
let txtUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let txtLowerCase = "abcdefghijklmnopqrstuvwxyz";
let txtNumbers = "0123456789";
let txtSymbols = "!#$%&()*+-/<=>?@[]^_{|}~";

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

  // Set empty variable for a combination of all checked/selected character types
  let allAvailableChars = "";

   // Set empty password variable
   let password = "";
 
 // Get the length and checkbox values based on user selections
  let pwlengthRange = parseInt(pwlengthInput.value);
  let upperCaseOption = uppercaseChBox.checked;
  let lowerCaseOption = lowercaseChBox.checked;
  let numbersOption = numbersChBox.checked;
  let symbolsOption = symbolsChBox.checked;
  
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
  
  //Create loop for password characters and display final pw on page
  for(let i = 0; i <= pwlengthRange; i++) {
    password += allAvailableChars[Math.floor(Math.random() * allAvailableChars.length)];
    pwresultsField.innerText = password;
  }
 
}

// Copy pw to clipboard
copyBtn.addEventListener("click", function() {
  // Create <textarea> to append to document and set its value to the pw string
  let pwtextarea = document.createElement('textarea');
  let passwordChars = pwresultsField.innerText;

  // Stop the page from refreshing if copy is clicked and no pw 
  if(passwordChars === "") {
    return;
  }

  // Append <textarea> to HTML document and select the contents of <textarea>
  pwtextarea.value = passwordChars;
  document.body.appendChild(pwtextarea);
  pwtextarea.select();
  // Use the copy command to copy the contents of <textarea> to clipboard
  document.execCommand("copy");
  //Remove the <textarea> from the document
  pwtextarea.remove();
  // Alert message
  alert("Password copied!");

});