/*! sophisicated_code.js */

// This code generates a random password based on specified criteria
// such as length, availability of uppercase, lowercase, numbers, and symbols

// Generates a random uppercase letter
function getRandomUppercaseLetter() {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
}

// Generates a random lowercase letter
function getRandomLowercaseLetter() {
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
}

// Generates a random number
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

// Generates a random symbol
function getRandomSymbol() {
  const symbols = "!@#$%^&*()_-+=<>?/{[]}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generates a random password
function generateRandomPassword(length, uppercase, lowercase, numbers, symbols) {
  let password = "";

  // Creates an array to hold all possible characters based on criteria
  const characterPool = [];
  if (uppercase) {
    characterPool.push(getRandomUppercaseLetter);
  }
  if (lowercase) {
    characterPool.push(getRandomLowercaseLetter);
  }
  if (numbers) {
    characterPool.push(getRandomNumber);
  }
  if (symbols) {
    characterPool.push(getRandomSymbol);
  }

  // Generates the password by picking random characters from the pool
  for (let i = 0; i < length; i++) {
    const randomCharacterGenerator =
      characterPool[Math.floor(Math.random() * characterPool.length)];
    password += randomCharacterGenerator();
  }

  return password;
}

// Example usage
const password = generateRandomPassword(12, true, true, true, true);
console.log(password);
