const start = document.querySelector('.start')
const play = document.querySelector('.play')
const roundQty = document.querySelector('#roundQty')
const playedQty = document.querySelector('#playedQty')
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const selectionButtons = document.querySelectorAll('[data-selection]')
const end = document.querySelector('[data-end]')

let playedRounds = 0

const CHOICES = [
    {
        name: 'rock',
        image: './images/rock.jpg',
        beats: 'scissors'
    },
    {
        name: 'paper',
        image: './images/paper.jpg',
        beats: 'rock'
    },
    {
        name: 'scissors',
        image: './images/scissors.jpg',
        beats: 'paper'
    }
]

function playerPlay(selection) {
    const computerSelection = computerPlay()
    const playerWins = playRound(selection, computerSelection)
    const computerWins = playRound(computerSelection, selection)
    addResult(computerSelection, computerWins)
    addResult(selection, playerWins)
    if (playerWins) playerScore.value++
    if (computerWins) computerScore.value++
    playedRounds++
    playedQty.value = playedRounds
    if (playedQty.value > 10) {
        alert('Maximum quantity is reached')
        playerScore.value = 0
        computerScore.value = 0
        playedQty.value = ''
    }
}

function addResult(selection, winner) {
    const img = document.createElement('img')
    img.src = selection.image
    img.classList.add('selection')
    end.after(img)
    if (winner) img.classList.add('winner')
}

function computerPlay() {
    let computerChoice
    return computerChoice = CHOICES[(Math.floor(Math.random() * CHOICES.length))]
}

const playRound = (playerchoise, randomSelection) => {
    return playerchoise.beats === randomSelection.name
}


// function scoreCheck() {
//     if (playerScore > computerScore) {
//         alert(`Game Over!!!! Congratulation!!! YOU WON!!!!!!!!
//         You ${playerScore}
//         Computer ${computerScore}`)
//         console.log(`Game Over!!!! Congratulation!!! YOU WON!!!!!!!!
//         You ${playerScore}
//         Computer ${computerScore}`);
//     } else {
//         alert(`Game Over!!!! OOPS!!! YOU LOST !!!
//         You ${playerScore}
//         Computer ${computerScore}`)
//         console.log(`Game Over!!!! OOPS!!! YOU LOST !!!
//         You ${playerScore}
//         Computer ${computerScore}`);
//     }
//     return playerScore, computerScore
// }

function game() {
    start.addEventListener('click', function () {
        let playerSelection = playerPlay()
        let computerSelection = computerPlay()
        if (round !== 0 && roundQty.value !== '') {
            roundQty.value = ''
            playRound(playerSelection, computerSelection)
            console.log(playerSelection, computerSelection);
        }
        
        else {

            alert('Please enter a valid quantity of rounds')
            // for (let i = 0; i < round; i++) {
            //     if (playerScore + computerScore !== round) {
            //         i = playerScore + computerScore
            //         playedQty.value = playerScore + computerScore
            //     }
            // }

        }
        // console.log(`You ${playerScore}`);
        // console.log(`Computer ${computerScore}`);
        // scoreCheck()
    })
}

game();
