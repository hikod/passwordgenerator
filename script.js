// Assignment Code
var generateBtn = document.querySelector("#generate");
var counter = 0;

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = lowerCase.toUpperCase();
  var number = "1234567890";
  var specialChar = "!@#$%^&*(){}[]=<>/,.";
  var finalConcatinatedPwd = "";
  var questionArr = ["lowercase", "uppercase", "numeric", "special characters"];

  var desiredPasswordLength = prompt("Please enter your desired password length");

  /**
   * 
   * @summary below code validates
   * the entered value between 8 and 128
   * if it is not, it will ask to re-enter
   */
  while (desiredPasswordLength < 8 || desiredPasswordLength > 128) {
    alert("The desired password length must be between 8 and 128");
    desiredPasswordLength = parseInt(prompt("Please re-enter your desired password length."));
  }

  /**
   * the user will be asked whether 
   * they want the options in the array above 
   * in the password while generating
   */

  questionArr.forEach((str) => {
    var answer = confirm("Please tell me if you would like your password to have " + str);


    if (str === "lowercase" && answer) {
      finalConcatinatedPwd = finalConcatinatedPwd.concat(lowerCase);
    }
    if (str === "uppercase" && answer) {
      finalConcatinatedPwd = finalConcatinatedPwd.concat(upperCase);
    }
    if (str === "numeric" && answer) {
      finalConcatinatedPwd = finalConcatinatedPwd.concat(number);
    }
    if (str === "special characters" && answer) {
      finalConcatinatedPwd = finalConcatinatedPwd.concat(specialChar);
    }
    if (!answer) {
      counter++;
      console.log(counter);
    }
  })

  /**this piece of code is checking 
   * if one character type should be selected  
   */
  if (counter === questionArr.length) {
    alert("You need to answer at least one of the options for your password!!");
    counter = 0;
    return generatePassword();
  } else {
    counter = 0;
    return randomPasswordWithLength(desiredPasswordLength, finalConcatinatedPwd);
  }
}


/**
 * 
 * @param {*desired password length} length 
 * @param {*finalConcatinatedPwd string} chars 
 * @returns 
 */
function randomPasswordWithLength(desiredPasswordLength, chars) {
  var result = '';
  for (var i = desiredPasswordLength; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

