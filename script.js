// declare variables
var length;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Special characters array
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// letter characters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
var space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
var letters2 = letters.map(toUpper);

function generatePassword() {
      // Asks for user input
      length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
      // First if statement for user validation 
      if (!length) {
          alert("This needs a value");
      } else if (length < 8 || length > 128) {
          // Validates user input
          // Start user input prompts
          length = parseInt(prompt("You must choose between 8 and 128"));
  
      } else {
          // Continues once user input is validated
          confirmNumber = confirm("Will this contain numbers?");
          confirmCharacter = confirm("Will this contain special characters?");
          confirmUppercase = confirm("Will this contain Uppercase letters?");
          confirmLowercase = confirm("Will this contain Lowercase letters?");
      };
  
      // Else if for 4 negative options
      if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
          choices = alert("You must choose a criteria!");
  
      }
      // First if statement that uses user input prompts to determine choices
      // Else if for 4 positive options
      else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  
          choices = character.concat(number, letters, letters2);
      }
      // Else if for 3 positive options
      else if (confirmCharacter && confirmNumber && confirmUppercase) {
          choices = character.concat(number, letters2);
      }
      else if (confirmCharacter && confirmNumber && confirmLowercase) {
          choices = character.concat(number, letters);
      }
      else if (confirmCharacter && confirmLowercase && confirmUppercase) {
          choices = character.concat(letters, letters2);
      }
      else if (confirmNumber && confirmLowercase && confirmUppercase) {
          choices = number.concat(letters, letters2);
      }
      // Else if for 2 positive options 
      else if (confirmCharacter && confirmNumber) {
          choices = character.concat(number);
  
      } else if (confirmCharacter && confirmLowercase) {
          choices = character.concat(letters);
  
      } else if (confirmCharacter && confirmUppercase) {
          choices = character.concat(letters2);
      }
      else if (confirmLowercase && confirmNumber) {
          choices = letters.concat(number);
  
      } else if (confirmLowercase && confirmUppercase) {
          choices = letters.concat(letters2);
  
      } else if (confirmNumber && confirmUppercase) {
          choices = number.concat(letters2);
      }
      // Else if for 1 positive option
      else if (confirmCharacter) {
          choices = character;
      }
      else if (confirmNumber) {
          choices = number;
      }
      else if (confirmLowercase) {
          choices = letters;
      }
      // Created space variable to fill uppercase conversion
      else if (confirmUppercase) {
          choices = space.concat(letters);
      };
  
      // password variable is an array placeholder for user generated amount of length
      
      var password = [];
      

      // Random selection for all variables: 
      for (var i = 0; i < length; i++) {
          var ranPassword = choices[Math.floor(Math.random() * choices.length)];
          password.push(ranPassword);
      }
  return password;
  
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
