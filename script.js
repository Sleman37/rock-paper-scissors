let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let value = Math.floor(Math.random() * 3)
    if (value === 0) {
        return "rock"
    }
    else if (value === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

let getHumanChoice = () => {
    let playerInput = prompt("Choose: Rock/Paper/Scissors").toLocaleLowerCase()

    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return playerInput
    }
    else {
        return "This is not an option in the game"
    }
}

console.log(getHumanChoice())