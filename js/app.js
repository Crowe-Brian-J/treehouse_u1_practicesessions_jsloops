const getRandomNumber = (upper) => Math.floor(Math.random() * upper) + 1

const main = document.querySelector('main')
const randomNumber = getRandomNumber(10)
let guess
let guessCount = 0

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
guess = parseInt(
  prompt('I am thinking of a number between 1 and 10. What is it?')
)
guessCount++

//  2) End the loop when the user's guess matches the random number

while (guess !== randomNumber) {
  guess = parseInt(prompt('Incorrect. Please guess again:'))
  guessCount++
}

//  3) Display a message letting the user know they guessed the number
main.innerHTML = `<h1>You guessed the number! It was ${randomNumber}.</h1><h2>It only took you ${guessCount} guesses.</h2>`
