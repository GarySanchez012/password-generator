// Assignment code here

var generatePassword = function () {
  var finalPassword = "" //finalPassword.length
  var passwordOptions = ""
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLONOPQRSTUVWXYZ"
  var specialCharcters = "!@#$%^&*()"
  var number = "0123456789"
  var passwordSize = parseInt(prompt("How many characters would you like your password to contain?"));
  while (Number.isNaN(passwordSize) || passwordSize < 8 || passwordSize >128)
  console.log(passwordSize)

  
  var isLowerCase = confirm("Does your password include lowerCase?")
  
  var isUpperCase = confirm("Does your password include UpperCase?")
  
  var isSpecialCharacter= confirm("Does your password include special?")
  
  var isNumber = confirm("Does your password include number?")
  console.log(isLowerCase)
  // ending 

  
  if (isLowerCase) {
    passwordOptions += lowerCase
    finalPassword += lowerCase.charAt(Math.floor(Math.random())*lowerCase.length)
  }
  if(isUpperCase){
    passwordOptions += upperCase
    finalPassword += upperCase.charAt(Math.floor(Math.random())*upperCase.length)
  }
  if(isSpecialCharacter){
    passwordOptions += specialCharcters
    finalPassword += specialCharcters.charAt(Math.floor(Math.random())*specialCharcters.length)
  }
  if(isNumber){
    passwordOptions += number
    finalPassword += number.charAt(Math.floor(Math.random())*number.length)
  }
  for(var i = finalPassword.length; i<passwordSize; i++){
    finalPassword += passwordOptions.charAt(Math.floor(Math.random()*passwordOptions.length));
  }
  console.log(finalPassword);
  return finalPassword
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

