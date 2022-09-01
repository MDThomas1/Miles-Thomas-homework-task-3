var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() { 
    var characters = ['!','@','#','$','%','&','*','?','=','+','-','0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var length = prompt("How many characters do you want in your password?")

    if (length >= 8 && length <= 128) {
      confirmUpper()
    } else if (length < 8 || length > 128) {
      alert("Password must contain between 8 and 128 characters")
      generatePassword()
    } else {
      alert ("Please enter a valid number")
      generatePassword()
    }

    function confirmUpper() {
      if (confirm("Would you like your password to include upper case letters?") === true) {
        confirmLower()
      } else {
        confirmLower()
        characters.splice(47, 26)
      }
    }

    function confirmLower() {
      if (confirm("Would you like your password to include lower case letters?") === true) {
        confirmNumbers()
      } else {
        confirmNumbers()
        characters.splice(21, 26)
      }
    }

    function confirmNumbers() {
      if (confirm("Would you like your password to include numbers?") === true) {
        confirmSpecials()
      } else {
        confirmSpecials()
        characters.splice(11, 10)
      }
    }

    function confirmSpecials() {
      if (confirm("Would you like your password to include special characters?") === true ) {
        concoctPassword()
      } else {
        concoctPassword()
        characters.splice(0, 11)
      }
    }

    function concoctPassword() {
        var result = characters.charAt(Math.floor(Math.random() * length));
      alert("Generated password is " + result) 
    }
  }
}

generateBtn.addEventListener("click", writePassword);
