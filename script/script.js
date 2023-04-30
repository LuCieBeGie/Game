let playerScore = 0
let computerScore = 0

function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors']
    return computerChoice[(Math.floor(Math.random() * computerChoice.length))]
}

function playerPlay() {
    let round = playerScore + computerScore
    let playerSelection
    do {
        let player = prompt(`Round N${round + 1} Please enter your choise: rock, paper, scissors`)
        if (player === null) continue
        playerSelection = player.toLowerCase().trim()
    } while (!playerSelection === '' || null)
    return playerSelection
}

const playRound = (playerSelection, computerSelection) => {

    let player = playerSelection.toUpperCase()
    let computer = computerSelection.toUpperCase()

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert(`You Won! ${player} beats ${computer}`);
        playerScore++
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert(`You Won! ${player} beats ${computer}`);
        playerScore++
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        alert(`You Won! ${player} beats ${computer}`);
        playerScore++
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        alert(`You Lose! ${computer} beats ${player}`);
        computerScore++
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        alert(`You Lose! ${computer} beats ${player}`);
        computerScore++
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        alert(`You Lose! ${computer} beats ${player}`);
        computerScore++
    }
    else if (playerSelection === computerSelection) {
        alert(`OOPS! IT'S DRAW`);
    }
    else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
        alert(`You misspelled or a value is missing! Try again`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay()
        let computerSelection = computerPlay()
        if (playerScore + computerScore !== 5) {
            i = playerScore + computerScore
        }
        playRound(playerSelection, computerSelection)
    }
    console.log(`You ${playerScore}`);
    console.log(`Computer ${computerScore}`);
    scoreCheck()
}

function scoreCheck() {
    if (playerScore > computerScore) {
        alert(`Game Over!!!! Congratulation!!! YOU WON!!!!!!!!
        You ${playerScore} 
        Computer ${computerScore}`)
        console.log(`Game Over!!!! Congratulation!!! YOU WON!!!!!!!!
        You ${playerScore}
        Computer ${computerScore}`);
    } else {
        alert(`Game Over!!!! OOPS!!! YOU LOST !!! 
        You ${playerScore}
        Computer ${computerScore}`)
        console.log(`Game Over!!!! OOPS!!! YOU LOST !!! 
        You ${playerScore}
        Computer ${computerScore}`);
    }
    return playerScore, computerScore
}

game();
