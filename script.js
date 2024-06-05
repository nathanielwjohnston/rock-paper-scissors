function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber === 0) {
        return getComputerChoice();
    } else if (randomNumber >= 1 || randomNumber <= 33) {
        return "rock";
    } else if (randomNumber >= 34 || randomNumber <= 66) {
        return "paper";
    } else if (randomNumber >= 67 || randomNumber <= 99) {
        return "scissors";
    }
}

console.log(getComputerChoice());