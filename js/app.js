const main = document.querySelector('main')
const randomNumber = getRandomNumber(10)
let guess

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1
}

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number
