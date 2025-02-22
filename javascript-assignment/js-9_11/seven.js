// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.



var secretNumber = 8;  

const userGuess = +prompt("Guess the secret number from 1 to 10");

if (userGuess == secretNumber) {
    alert("Bingo! Correct answer");
} 
else if (userGuess + 1 == secretNumber) {
    alert("Close enough to the correct answer");
} 
else {
    alert(`Wrong guess! The correct number was ${secretNumber}. Try again!`);
}