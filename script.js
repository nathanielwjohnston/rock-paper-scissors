function getComputerChoice() {
    let randomNumber = Math.round(Math.random() * 100);
    if (randomNumber === 0) {
        return getComputerChoice();
    } else if (randomNumber <= 33) {
        return "rock";
    } else if (randomNumber >= 34 && randomNumber <= 66) {
        return "paper";
    } else if (randomNumber >= 67) {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Choose rock, paper, or scissors");
    userChoice = userChoice.toLowerCase();
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        return getHumanChoice();
    } else {
        return userChoice;
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (
            humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock"
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            return "human";
        } else if (
            humanChoice === computerChoice
        ) {
            console.log("It was a draw!")
            return;
        } else {
            console.log(`You lose. ${computerChoice} beats ${humanChoice}.`)
            return "computer";
        }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let result = playRound();
    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++;
    }

    if (humanScore > computerScore) {
        console.log(`You won this game: ${humanScore} to ${computerScore}`)
    } else if (humanScore === computerScore) {
        console.log(`You drew this game: ${humanScore} to ${computerScore}`)
    } else {
        console.log(`You lost this game: ${humanScore} to ${computerScore}`)
    }
}

playGame();
