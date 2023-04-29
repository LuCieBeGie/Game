let playerScore = 0
let computerScore = 0

function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors']
    return computerChoice[(Math.floor(Math.random() * computerChoice.length))]
}

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert(`You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        playerScore++
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert(`You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        playerScore++
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        alert(`You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        playerScore++
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        alert(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        computerScore++
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        alert(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        computerScore++
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        alert(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        computerScore++
    }
    else if (playerSelection === computerSelection) {
        alert(`OOPS! IT'S DRAW`);
    }
    else {
        alert(`You misspelled! Try again`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let round = playerScore + computerScore
        let playerSelection = window.prompt(` Round N${round + 1} Please enter your choise: rock, paper, scissors`).toLowerCase()
        let computerSelection = computerPlay()
        if (playerScore + computerScore !== 5) {
            i = playerScore + computerScore
        }
        playRound(playerSelection, computerSelection)
    }
    console.log(`You ${playerScore}`);
    console.log(`Computer ${computerScore}`);
    if (playerScore > computerScore) {
        alert('Game Over!!!! Congratulation!!! YOU WON!!!!!!!!')
        console.log('Game Over!!!! Congratulation!!! YOU WON!!!!!!!!');
    } else {
        alert('Game Over!!!! OOPS!!! YOU LOST')
        console.log('Game Over!!!! OOPS!!! YOU LOST');
    }
}

game();
