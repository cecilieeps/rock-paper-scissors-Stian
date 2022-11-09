
/* Rock-paper-scissor in Javascript */

/*Make a variable that contains the strings "rock, paper and scissor"*/

var hand = ["rock", "paper", "scissor"];

/*The computer returns rock, paper or scissor at random */

function getComputerChoice (hand) {
    return hand[Math.floor(Math.random()*hand.length)];
}

/*- The player's choice is stored in a variable.
  - The parameter must be case-insensitive
  - When player selects a hand the computer also selects a hand*/

const computerSelection = getComputerChoice(hand);

function checkHand (playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor") {
        checkHand = playerSelection;
        console.log(`You select ${checkHand}`);
        console.log(`The computer selects ${computerSelection}`);
        return playerSelection;
    } else {
        console.log('Please type "rock, paper or scissor"');
    }
}

const playerSelection = checkHand('paper');

/*A single round, player against computer*/

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissor"
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissor" && computerSelection == "paper")  {
        return `You win, ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection == computerSelection) {
        return "Draw! Do it again.";
    } else if (playerSelection == "rock" && computerSelection == "paper"
        || playerSelection == "paper" && computerSelection == "scissor"
        || playerSelection == "scissor" && computerSelection == "rock"){
        return `You lose, ${computerSelection} beats ${playerSelection}.`;
    } else {
       return "No game";
    }
}

console.log(playRound(playerSelection, computerSelection));

/* Scoreboard variable for player and computer
Starts at 0, for each win they'll 1 gets added*/

let playerScore = 0;
let computerScore = 0;

/* A game of five
Each time the player win, increase the player score by 1
Each time the computer win, increase the computer score by 1
The first to reach 5 wins the game */

function game(playRound) {
    for (let playerScore = 0; playerScore < 5; playerScore++) {

    }

}
