let humanScore = 0;
let computerScore = 0;

const button = document.querySelectorAll("button")
const score = document.querySelector("#score")
const lineBreak = document.createElement("br")

button.forEach((btn, index) => {
    btn.addEventListener("click", e => {
        if (humanScore < 5 && computerScore < 5) {
            let humanSelection = e.target.value
            let computerSelection = getComputerChoice();
            let currentGame = playRound(humanSelection, computerSelection)
            score.innerHTML = currentGame + "<br>" + "Human: " + humanScore + " Computer: " + computerScore
        }
        if (humanScore === 5) {
            score.append(lineBreak, "Computer got to 5 first! YOU LOSE")
            for (let i = 0; i < button.length; i++) {
                button[i].disabled = true
            }
        }
        else if (computerScore === 5) {
            score.append(lineBreak, "Computer got to 5 first! YOU LOSE")
            for (let i = 0; i < button.length; i++) {
                button[i].disabled = true
            }
        }

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            return "It's a tie!"
        }
        else if (computerChoice === "paper") {
            computerScore++
            return "You lose! Paper beats Rock"
        }
        else {
            humanScore++
            return "You win! Rock beats Scissors"
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++
            return "You win! Paper beats Rock"
        }
        else if (computerChoice === "paper") {
            return "It's a tie!"
        }
        else {
            computerScore++
            return "You lose! Scissors beat Paper"
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++
            return "You Lose! Rock beats Scissors"
        }
        else if (computerChoice === "paper") {
            humanScore++
            return "You win! Scissors beat Paper"
        }
        else {
            return "It's a tie!"
        }
    }
    else {
        console.log("Inavlid option, please choose rock, paper or scissors")
    }
}
