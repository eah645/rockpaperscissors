//complete game function
//Game variable = function = what the function is
//const game = () => {
//let playerScore = 0;
//let computerScore = 0;

//function to grab user input and run function to evaluate choices
//const playGame = () => {
//Scans entire html document to find the first element it finds with the matching class (or anything in parenthesis)
//const rockBtn = document.querySelector('.rock');
//const paperBtn = document.querySelector('.paper');
//const scissorBtn = document.querySelector('.scissor');

let playerScoreboard = document.querySelector(".p-count");
let computerScoreboard = document.querySelector(".c-count");
let roundResult = document.querySelector(".result");

let playerScore = 0;
let computerScore = 0;
let compChoice;
let playerChoice;

let resultScreen = document.getElementById("result-screen");

function computerChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}

function throwRock() {
  playerChoice = "rock";
  computerChoice();
  playGame();
}

function throwPaper() {
  playerChoice = "paper";
  computerChoice();
  playGame();
}

function throwScissor() {
  playerChoice = "scissor";
  computerChoice();
  playGame();
}

function compWins() {
  resultScreen.innerHTML = "Computer wins!";
  computerScore++;
  computerScoreboard.innerHTML = computerScore;
}

function playerWins() {
  resultScreen.innerHTML = "Player wins!";
  playerScore++;
  playerScoreboard.innerHTML = playerScore;
}

//hides buttons when someone reaches 10 points
function hideButtons() {
  document.getElementById("rock").style.display = "none";
  document.getElementById("paper").style.display = "none";
  document.getElementById("scissor").style.display = "none";
}

function showButtons() {
  document.getElementById("rock").style.display = "block";
  document.getElementById("paper").style.display = "block";
  document.getElementById("scissor").style.display = "block";
}

//this is a bit of a test idk what else playGame would be
function playGame() {
  //If a tie
  if (playerChoice === compChoice) {
    resultScreen.innerHTML = "Tie";
    //tie
  } else if (playerChoice === "rock" && compChoice === "paper") {
    //computer wins, show loss and add point to pc
    compWins();
  } else if (playerChoice === "paper" && compChoice === "scissor") {
    //computer wins, show loss and add point to pc
    compWins();
  } else if (playerChoice === "scissor" && compChoice === "rock") {
    //computer wins, show loss and add point to pc
    compWins();
  } else {
    //player wins
    playerWins();
  }
  //idk where else to put this to make sure it runs
  if (playerScore >= 10) {
    resultScreen.innerHTML = "Game over!";
    //ok so I can't hide it yet uh-
    hideButtons();
    document.querySelector(".reset").style.display = "block";
  } else if (computerScore >= 10) {
    resultScreen.innerHTML = "Game over!";
    hideButtons();
    document.querySelector(".reset").style.display = "block";
    document.querySelector(".move").style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  computerScoreboard.innerHTML = computerScore;
  playerScoreboard.innerHTML = playerScore;
  showButtons();
  document.querySelector(".reset").style.display = "none";
  resultScreen.innerHTML = "Who will win?";
}
