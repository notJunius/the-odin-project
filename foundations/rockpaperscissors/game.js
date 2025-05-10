function getComputerChoice() {
  move = ['rock', 'paper', 'scissors'];
  return move[Math.floor(Math.random() * 3)];
}
// this works baby

let playerScore = 0;
let computerScore = 0;

function playRound() {
  let playerMove = prompt("rock, paper, or scissors?" );
  let computerMove = getComputerChoice();
  if (playerMove == "rock") {
    if (computerMove == "rock") {
      console.log("you tied, computer picked rock.");
      console.log(playerScore);
      console.log(computerScore);
    }
    if (computerMove == "paper") {
      console.log("you lose. computer picked paper.");
      computerScore += 1;
      console.log(playerScore);
      console.log(computerScore);
    }
    if (computerMove == "scissors") {
      console.log("you win. computer picked scissors.");
      playerScore += 1;
      console.log(playerScore);
      console.log(computerScore);
    }
  }
  if (playerMove == "paper") {
    if (computerMove == "rock") {
      console.log("you win, computer picked rock.");
      playerScore += 1;
      console.log(playerScore);
      console.log(computerScore);
    }
    if (computerMove == "paper") {
      console.log("you tied. computer picked paper.");
      console.log(playerScore);
      console.log(computerScore);
    }
    if (computerMove == "scissors") {
      console.log("you lose. computer picked scissors.");
      computerScore += 1;
      console.log(playerScore);
      console.log(computerScore);
    }
  }
  if (playerMove == "scissors") {
    if (computerMove == "rock") {
      console.log("you lose, computer picked rock.");
      computerScore += 1;
      console.log(playerScore);
      console.log(computerScore);
    }
    if (computerMove == "paper") {
      console.log("you win. computer picked paper.");
      playerScore += 1;
      console.log(playerScore);
      console.log(computerScore);
    }
    if (computerMove == "scissors") {
      console.log("you tied. computer picked scissors.");
      console.log(playerScore);
      console.log(computerScore);
    }
  }
}

i = 0;

while (i < 5) {
  playRound();
  i++;
}
if (playerScore > computerScore) {
  console.log("You beat the computer!")
} else {
  console.log("Better luck next time!")
}

