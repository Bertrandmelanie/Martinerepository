let userInput = prompt("Please enter a number:");
let number = parseInt(userInput);

if (number % 1 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}
