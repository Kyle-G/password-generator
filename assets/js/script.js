// Assignment code here
function generatePassword() {
    var password = "";
    var characters = "";
    var passwordLength = 0;
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_-+=";

    var passwordLengthPrompt = window.prompt('Please choose a password length between 8 and 128 characters long.');
    if (parseInt(passwordLengthPrompt) > 7 && parseInt(passwordLengthPrompt) < 128) {
        passwordLength = parseInt(passwordLengthPrompt);
    } else {
        window.alert("Please enter a valid number from 8 to 128 characters long");
        return generatePassword();
    }


    // if (lowerCase === "YES" || lowercase === "yes") {
    //     characters += lower;
    // } else if (lowerCase === "NO" || lowercase === "no") {
    //     break;
    // } else {
    //     window.alert("You need to provide a valid answer! Please try again. Please enter YES or yes, or NO and no(case sensitive)");
    //     return generatePassword();
    // }

    var lowerCase = window.prompt('Do you want to include lowercase letters?');
    switch (lowerCase) {
        case "YES":
            characters += lower;
            break;
        case "yes":
            characters += lower;
            break;
        case "NO":
            break;
        case "no":
            break;
        default:
            window.alert("You need to provide a valid answer! Please try again. Please enter YES or yes. And NO or no (case sensitive)");
            return generatePassword();
    }


    // var upperCase = window.prompt('Do you want to include upper case characters? Please enter yes or no (case sensitive)');
    // if (upperCase === "YES" || uppercase === "yes") {
    //     characters += upper;
    // } else if (upperCase === "NO" || uppercase === "no") {
    //     { continue };
    // } else {
    //     window.alert("You need to provide a valid answer! Please try again. Please enter yes or no (case sensitive)");
    //     return generatePassword();
    // }

    var upperCase = window.prompt('Do you want to include upper case characters? Please enter yes or no (case sensitive)');
    switch (upperCase) {
        case "YES":
            characters += upper;
            break;
        case "yes":
            characters += upper;
            break;
        case "NO":
            break;
        case "no":
            break;
        default:
            window.alert("You need to provide a valid answer! Please try again. Please enter YES or yes. And NO or no (case sensitive)");
            return generatePassword();
    }

    // var numeric = window.prompt('Do you want to include numeric characters? Please enter yes or no (case sensitive)');
    // if (numeric === "YES" || numeric === "yes") {
    //     characters += numeric;
    // } else if (numeric === "NO" || numeric === "no") {
    //     { continue };
    // } else {
    //     window.alert("You need to provide a valid answer! Please try again.");
    //     return generatePassword();
    // }

    var numeric = window.prompt('Do you want to include numeric characters? Please enter yes or no (case sensitive)');
    switch (numeric) {
        case "YES":
            characters += numbers;
            break;
        case "yes":
            characters += numbers;
            break;
        case "NO":
            break;
        case "no":
            break;
        default:
            window.alert("You need to provide a valid answer! Please try again. Please enter YES or yes. And NO or no (case sensitive)");
            return generatePassword();
    }

    // var specialCharacters = window.prompt('Do you want to include special characters? Please enter yes or no (case sensitive).');
    // if (specialCharacters === "YES" || specialCharacters === "yes") {
    //     characters += specialCharacters;
    // } else if (specialCharacters === "NO" || specialCharacters === "no") {
    //     { continue };
    // } else {
    //     window.alert("You need to provide a valid answer! Please try again.");
    //     return generatePassword();
    // }

    var specialCharacters = window.prompt('Do you want to include special characters? Please enter yes or no (case sensitive).');
    switch (specialCharacters) {
        case "YES":
            characters += symbols;
            break;
        case "yes":
            characters += symbols;
            break;
        case "NO":
            break;
        case "no":
            break;
        default:
            window.alert("You need to provide a valid answer! Please try again. Please enter YES or yes. And NO or no (case sensitive)");
            return generatePassword();
    }

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
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