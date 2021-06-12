// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  var length = prompt("Please enter your desired password length");

  /**
   * 
   * @summary below code validates
   * the entered value between 8 and 128
   * if it is not, it will ask to re-enter
   */

  while (length < 8 || length > 128) {
    alert("The desired password length must be between 8 and 128");
    length = parseInt(prompt("Please re-enter your desired password length."));
  }

  var questionArr = ["lowercase", "uppercase", "numeric", "special characters"];
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
  })


  return randomPasswordWithLength(length, finalConcatinatedPwd);
}


/**
 * 
 * @param {*desired password length} length 
 * @param {*finalConcatinatedPwd string} chars 
 * @returns 
 */
function randomPasswordWithLength(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

