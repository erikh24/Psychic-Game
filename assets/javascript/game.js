
// Creates an array that lists out all of the choices for the computer to choose from (a-z)
 var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
 // Creating variables to hold the letters guessed, number of wins, number of losses, and guesses left.
 var lettersGuessed = [];
 var wins = 0;
 var losses = 0;
 var guesses = 9;
 var computerGuess;

 // Create variables that hold references to the places in the HTML where we want to display things.
 var directionsText = document.getElementById("directions-text");
 var userChoiceText = document.getElementById("userchoice-text");
 var lettersGuessedText = document.getElementById("letters-text");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");
 var guessesText = document.getElementById("guesses-text");

// Randomly chooses a choice from the options array. This is the Computer's guess.
  function computerPick() {
     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   }

  computerPick();

 // This function is run whenever the user presses a key.
 document.onkeyup = function (event) {


  // Function to reset the game
 function resetGame() {
     computerPick();
     lettersGuessed = [];
     guesses = 9;
 }
  // Determines which key was pressed and logs it as a letter guessed.
   var userGuess = event.key;
   lettersGuessed.push(userGuess);


   // This logic determines the outcome of the game (win or loss), and increments the appropriate win/loss total, also resets game when you win or lose
   if ((userGuess === computerGuess)) {
     wins++;
     resetGame();
   } else {
     guesses--;
   }

   if (guesses === 0) {
     losses++;
     resetGame();
   }


   // Hide the directions
   directionsText.textContent = "";

   // Display the user guess, the letters already guessed,the wins/losses and remainig guesses avialable.
   userChoiceText.textContent = "You just chose the letter: " + userGuess;
   lettersGuessedText.textContent = "You have already guessed these letters: " + lettersGuessed;
   winsText.textContent = "Wins: " + wins;
   lossesText.textContent = "Losses: " + losses;
   guessesText.textContent = "Guesses remaining: " + guesses;
 };


