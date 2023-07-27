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

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert(`You Won! ${playerSelection} beats ${computerSelection}`); 
        playerScore++
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert(`You Won! ${playerSelection} beats ${computerSelection}`);
        playerScore++
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        alert(`You Won! ${playerSelection} beats ${computerSelection}`);
        playerScore++
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++
    }
    else if (playerSelection === computerSelection) {
        alert(`OOPS! IT'S DRAW`);
    }
    else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
        alert(`You misspelled or a value is missing! Try again`);
    }
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

// game();
