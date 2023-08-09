const start = document.querySelector('.start')
const play = document.querySelector('.play')
const roundQty = document.querySelector('#roundQty')
const playedQty = document.querySelector('#playedQty')
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const selectionButtons = document.querySelectorAll('[data-selection]')

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

selectionButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const selectedButton = button.dataset.madeChoice
        const madeChoice = CHOICES.find(choice => choice.name === selectedButton)

    })
})

function computerPlay() {
    let computerSelection = []
    for (let el of selectionButtons.values()) {
        computerSelection.push(el.value);
    }
    return computerSelection[(Math.floor(Math.random() * selectionButtons.length))]
}


function playerPlay() {
    
}

playerPlay()

const playRound = (madeChoice, randomSelection) => {
    return madeChoice.beats === randomSelection.beats
}

function winnerDeclare(winner) {
    const computerChoice = computerPlay();
    const playerChoice = playerPlay();
    const playerWins = playRound(playerChoice, computerChoice)
    const computerWins = playRound(computerChoice, playerChoice)
    console.log(playerWins, computerWins);
}

winnerDeclare()






// let round = 0

// function roundQuality() {
//     let maxLength = 10;
//     roundQty.addEventListener('change', function (e) {
//         if (e.target.value <= maxLength) {
//             round = e.target.value
//             console.log(round);
//         }
//         else {
//             alert('Maximum quantity of rounds is 10. Please enter a valid quantity')
//             e.target.value = ''
//         }
//         return round
//     })
// }

// playRound()

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

// function game() {
//     start.addEventListener('click', function () {
//         let playerSelection = playerPlay()
//         let computerSelection = computerPlay()
//         if (round !== 0 && roundQty.value !== '') {
//             roundQty.value = ''
//             playRound(playerSelection, computerSelection)
//             console.log(playerSelection, computerSelection);
//         }
//         else {

//             alert('Please enter a valid quantity of rounds')
//             // for (let i = 0; i < round; i++) {
//             //     if (playerScore + computerScore !== round) {
//             //         i = playerScore + computerScore
//             //         playedQty.value = playerScore + computerScore
//             //     }
//             // }

//         }
//         // console.log(`You ${playerScore}`);
//         // console.log(`Computer ${computerScore}`);
//         // scoreCheck()
//     })
// }

// game();
