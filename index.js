const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
    


let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

function clearPrevious() {
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    
    generatePasswords()
}
function generatePasswords() {
    let selectedCharacters = []
    let includeNumbers = document.querySelector("#number-checkbox").checked
    let includeSymbols = document.querySelector("#symbol-checkbox").checked
    let passwordLength = document.getElementById("password-length").value
    
    //determine content of selectedCharacters array
    if (includeNumbers === true && includeSymbols === true) {
        selectedCharacters = letters.concat(numbers, symbols)
    } else if (includeSymbols === true) {
        selectedCharacters = letters.concat(symbols)
    } else if (includeNumbers === true) {
        selectedCharacters = letters.concat(numbers)
    } else {
        selectedCharacters = letters
    }
    
    //for loop based on passwordLength
    for (let i = 0; i < passwordLength; i++) {
        //select random character from selectedCharacters
        let randomNumberOne = Math.floor( Math.random() * selectedCharacters.length )
        let randomNumberTwo = Math.floor( Math.random() * selectedCharacters.length )
        passwordOne.textContent += selectedCharacters[randomNumberOne]
        passwordTwo.textContent += selectedCharacters[randomNumberTwo]
    }
    
}

//copy passwords to clipboard
const copyPasswordOne = async () => {
    let copy = document.getElementById("password-one").innerHTML
  
    try {
      await navigator.clipboard.writeText(copy);
      console.log("Password 1 copied to clipboard");
    } catch (err) {
      console.error('Failed to copy: ', err);
    } alert ("Password 1 copied to clipboard")
  }  
const copyPasswordTwo = async () => {
    let copy = document.getElementById("password-two").innerHTML
    
  
    try {
      await navigator.clipboard.writeText(copy);
      console.log("Password 2 copied to clipboard");
    } catch (err) {
      console.error('Failed to copy: ', err);
    } alert ("Password 2 copied to clipboard")
  } 
  
//clear passwords
function clearPasswords() {
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
}