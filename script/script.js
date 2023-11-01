const start = document.querySelector('.start')
const play = document.querySelector('.play')
const roundQty = document.querySelector('#roundQty')
const playedQty = document.querySelector('#playedQty')
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const selectionButtons = document.querySelectorAll('[data-selection]')
const end = document.querySelector('[data-end]')
const selection = document.querySelectorAll('.selection')


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

function startGame() {
    start.addEventListener('click', e => {
        chooseChoice()
    })
}

function chooseChoice() {
    selectionButtons.forEach(button => {
        button.addEventListener('click', e => {
            const selectionName = button.dataset.selection
            const madeChoice = CHOICES.find(choice => choice.name === selectionName)
            playerPlay(madeChoice)
            computerPlay()
        })
    })
}


function playerPlay(selection) {
    const computerSelection = computerPlay()
    const playerWins = playRound(selection, computerSelection)
    const computerWins = playRound(computerSelection, selection)
    addResult(computerSelection, computerWins)
    addResult(selection, playerWins)
    if (playerWins) {
        playerScore.value++
        playedQty.value++
    }
    if (computerWins) {
        computerScore.value++
        playedQty.value++
    }
    if (playedQty.value == roundQty.value) {
        scoreCheck()
    }

}

function clearAll() {
    playerScore.value = 0
    computerScore.value = 0
    playedQty.value = 0
    roundQty.value = ''
    removeResult()
}

function addResult(selection, winner) {
    const img = document.createElement('img')
    img.src = selection.image
    img.classList.add('selection')
    end.after(img)
    if (winner) img.classList.add('winner')
}

function removeResult() {
    const img = document.querySelectorAll('.selection')
    img.forEach(el => el.remove())
}

function computerPlay() {
    let computerChoice
    return computerChoice = CHOICES[(Math.floor(Math.random() * CHOICES.length))]
}

const playRound = (playerChoice, randomSelection) => {
    return playerChoice.beats === randomSelection.name
}


function scoreCheck() {
    if (playerScore.value > computerScore.value) {
        Swal.fire(`Game Over!!!! Congratulation!!! YOU WON!!!!!!!!
        You ${playerScore.value}
        Computer ${computerScore.value}`).then(function () {
            clearAll()
        });
    }
    else if (playerScore.value == computerScore.value) {
        Swal.fire(`Game Over!!!! IT'S A DRAW !!!
        You ${playerScore.value}
        Computer ${computerScore.value}`).then(function () {
            clearAll()
        });
    }
    else {
        Swal.fire(`Game Over!!!! OOPS!!! YOU LOST !!!
        You ${playerScore.value}
        Computer ${computerScore.value}`).then(function () {
            clearAll()
        });
    }
}

startGame()
