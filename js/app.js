const getRandomNumber = (upper) => Math.floor(Math.random() * upper) + 1

const main = document.querySelector('main')
const randomNumber = getRandomNumber(10)
let guess = ''
let message = ''

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable

//  2) End the loop when the user's guess matches the random number

//Convert while to for loop
for (let i = 1; i <= 10; i++) {
  if (i === 1) {
    guess = prompt('I am thinking of a number between 1 and 10. What is it?')
  } else {
    guess = prompt('Incorrect. Please guess again.')
  }
  if (parseInt(guess) === randomNumber) {
    message = `<h1>You guessed the number! It was ${randomNumber}.</h1><h2>It only took you ${i} guesses.</h2>`
    break
  } else {
    message = `<h1>Womp Womp! You ran out of guesses. It was ${randomNumber}.</h1>`
  }
}

//  3) Display a message letting the user know they guessed the number
main.innerHTML = message
