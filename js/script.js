
/* Rock-paper-scissor in Javascript */

/*Make a variable that contains the strings "rock, paper and scissor"*/

var hand = ["rock", "paper", "scissor"];

/*The computer returns rock, paper or scissor at random */

function getComputerChoice (hand) {
    return hand[Math.floor(Math.random()*hand.length)];
}

let computerSelection = getComputerChoice(hand);

/*- A prompt gets the input from user, and stores it in a variable.
  - The parameter must be case-insensitive
  - When user selects a hand the computer also selects a hand*/

let userSelection = prompt('Please type "rock, paper or scissor".');

if (userSelection.toLowerCase() === "rock" || userSelection.toLocaleLowerCase() === "paper" || userSelection.toLocaleLowerCase() === "scissor") {
        console.log(`You select ${userSelection}`);
        console.log(`The computer selects ${computerSelection}`);
    } else {
        console.log('Please type "rock, paper or scissor"');
    }


/* OLD CHECKHAND
function checkHand (userSelection) {
    userSelection = userSelection.toLowerCase();
    if (userSelection == "rock" || userSelection == "paper" || userSelection == "scissor") {
        checkHand = userSelection;
        console.log(`You select ${checkHand}`);
        console.log(`The computer selects ${computerSelection}`);
        return userSelection;
    } else {
        console.log('Please type "rock, paper or scissor"');
    }
}

let userSelection = checkHand('paper');
*/

/*A single round, user against computer*/

let userScore = 0;
let computerScore = 0;

function playRound (userSelection, computerSelection) {
    if (userSelection == "rock" && computerSelection == "scissor"
        || userSelection == "paper" && computerSelection == "rock"
        || userSelection == "scissor" && computerSelection == "paper")  {
        userScore++;
        return `You win, ${userSelection} beats ${computerSelection}.`;
    } else if (userSelection == computerSelection) {
        return "Draw! Do it again.";
    } else if (userSelection == "rock" && computerSelection == "paper"
        || userSelection == "paper" && computerSelection == "scissor"
        || userSelection == "scissor" && computerSelection == "rock"){
        computerScore++
        return `You lose, ${computerSelection} beats ${userSelection}.`;
    } else {
       return "No game";
    }
}

console.log(playRound(userSelection, computerSelection));

/* a game of 5
Keeps score of each round
Reports a winner or loser at the end */

function game(playRound) {
    for (playRound(userScore, computerScore); userScore < 5 || computerScore < 5;)
        if (userScore === 5) {
            return"User wins";
        } else if (computerScore === 5) {
            return"Computer wins";
        } else {
            return `Score is ${userScore} to ${computerScore}`;
        }
    }

console.log(game(playRound));