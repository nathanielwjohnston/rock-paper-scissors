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

function playRound(userChoice) {
    let computerChoice = getComputerChoice();

    if (
            userChoice === "rock" && computerChoice === "scissors" || 
            userChoice === "scissors" && computerChoice === "paper" ||
            userChoice === "paper" && computerChoice === "rock"
        ) {
            document.querySelector("#results").textContent = 
                `You win! ${userChoice} beats ${computerChoice}.`
            return "user";
        } else if (
            userChoice === computerChoice
        ) {
            document.querySelector("#results").textContent =
                "It was a draw!"
            return;
        } else {
            document.querySelector("#results").textContent =
                `You lose. ${computerChoice} beats ${userChoice}.`
            return "computer";
        }
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const userChoice = e.target.id;
            let result = playRound(userChoice);

            if (result === "user") {
                userScore++;
            } else if (result === "computer") {
                computerScore++;
            }

            if (userScore > computerScore) {
                document.querySelector("#results").textContent = 
                    `You won this game: ${userScore} to ${computerScore}`
            } else if (userScore === computerScore) {
                document.querySelector("#results").textContent =
                    `You drew this game: ${userScore} to ${computerScore}`
            } else {
                document.querySelector("#results").textContent =
                    `You lost this game: ${userScore} to ${computerScore}`
            }
        })
    })




}

playGame();
