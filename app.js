const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".button");
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "it's a draw";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You Won";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You Lost";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You Won";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "You Lost";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You won";
  } else {
    result = "You Lost";
  }
  resultDisplay.innerHTML = result;
}
