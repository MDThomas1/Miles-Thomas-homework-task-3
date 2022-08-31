var generateBtn = document.querySelector("#generate");

var characters = {
  upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  numbers: ['0','1','2','3','4','5','6','7','8','9'],
  specials: ['!','@','#','$','%','&','*','?','=','+','-']
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    let length = prompt("How many characters do you want in your password?")

    if (length >= 8 && length <= 128) {
      generatePassword.length === length
    } else if (length < 8 || length > 128) {
      alert("Password must contain between 8 and 128 characters")
      generatePassword()
    } else {
      alert ("Please enter a valid number")
      generatePassword()
    }

    if (confirm("Would you like your password to include upper case letters?") === true) {
      
    } else {
      generatePassword.toString()
    }

    if (confirm("Would you like your password to include lower case letters?") === true) {

    }

    if (confirm("Would you like your password to include numbers?") ===true) {
      
    }

    if (confirm("Would you like your password to include special characters?") === true ) {

    }
  }
}

generateBtn.addEventListener("click", writePassword);
