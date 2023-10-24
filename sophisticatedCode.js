/*
 * Filename: sophisticatedCode.js
 * Content: This code demonstrates a complex and sophisticated JavaScript program.
 * It includes various concepts such as object-oriented programming, asynchronous operations, and functional programming.
 */

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create instances of Person
const john = new Person("John", 30);
const jane = new Person("Jane", 25);

john.greet();
jane.greet();

// Asynchronous operation with Promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://api.example.com/data") {
        const data = { message: "Success", value: 42 };
        resolve(data);
      } else {
        reject("Error: Invalid URL");
      }
    }, 2000);
  });
}

// Fetch data asynchronously
fetchData("https://api.example.com/data")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Functional programming using Array methods
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log("Sum:", sum);

const doubledNumbers = numbers.map((number) => number * 2);
console.log("Doubled numbers:", doubledNumbers);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Complex logic using multiple functions and conditionals
function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const studentScores = [85, 92, 78, 95, 60];
const studentGrades = studentScores.map(calculateGrade);
console.log("Student grades:", studentGrades);

// More complex operations and error handling
try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Error:", error);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero!");
  }

  return a / b;
}

// ... continue with more sophisticated code ...

// End of sophisticatedCode.js
