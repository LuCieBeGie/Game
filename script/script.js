let playerScore = 0
let computerScore = 0

function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors']
    return computerChoice[(Math.floor(Math.random() * computerChoice.length))]
}

const playRound = (playerSelection, computerSelection) => {

    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        playerScore++
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        playerScore++
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You Won! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`);
        playerScore++
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        computerScore++
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        computerScore++
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        console.log(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
        computerScore++
    }
    else if (playerSelection === computerSelection) {
        console.log(`OOPS! IT'S DRAW`);
    }
    else {
        console.log(`You misspelled! Try again`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please enter your choise').toLowerCase()
        let computerSelection = computerPlay()
        if (playerScore + computerScore !== 5) {
            i = playerScore + computerScore
        }
        playRound(playerSelection, computerSelection)
    }
    console.log(`You ${playerScore}`);
    console.log(`Computer ${computerScore}`);
    if (playerScore > computerScore) {
        console.log('Congratulation!!! YOU WON!!!!!!!!');
        return 'Congratulation!!! YOU WON!!!!!!!!'
    } else {
        console.log('OOPS!!! YOU LOST');
    }
}

game();