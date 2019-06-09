
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> */ }

// All available options for computer to select
var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-text");

// computer selects a random letter
var computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];


document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess === computerChoice) {
        wins++;
    } else {
        --guessesLeft;
    }

    if (guessesLeft === 0) {
        losses++
    }


    // document.getElementById("wins").innerHTML = "Wins " + wins;
    // document.getElementById("losses").innerHTML = "Losses " + losses;
    // document.getElementById("guessesLeft").innerHTML = "Guesses left " + guessesLeft;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesLeft.textContent = "ties: " + ties;
};


