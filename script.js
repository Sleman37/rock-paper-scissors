let humanScore = 0;
let computerScore = 0;

const button = document.querySelectorAll("button")

button.forEach((btn) => {
    btn.addEventListener("click", e => {
        console.log(e.target.value)
    })
})

function getComputerChoice() {
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

function getHumanChoice() {
    let playerInput = prompt("Choose: Rock/Paper/Scissors").toLocaleLowerCase()

    if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors") {
        return playerInput
    }
    else {
        return "This is not an option in the game"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a tie!")
        }
        else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock")
            computerScore++
        }
        else {
            console.log("You win! Rock beats Scissors")
            humanScore++
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock")
            humanScore++
        }
        else if (computerChoice === "paper") {
            console.log("It's a tie!")
        }
        else {
            console.log("You lose! Scissors beat Paper")
            computerScore++
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You Lose! Rock beats Scissors")
            computerScore++
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beat Paper")
            humanScore++
        }
        else {
            console.log("It's a tie!")
        }
    }
    else {
        console.log("Inavlid option, please choose rock, paper or scissors")
    }
}

function playGame() {
    // let humanSelection = getHumanChoice();
    // let computerSelection = getComputerChoice();
    // for (let i = 0; i < 5; i++) {
    //     playRound(humanSelection, computerSelection);
    //     if (i < 4) {
    //         humanSelection = getHumanChoice();
    //         computerSelection = getComputerChoice();
    //     }
    // }
}



// playGame()
// console.log("Human: " + humanScore + "\nComputer: " + computerScore)