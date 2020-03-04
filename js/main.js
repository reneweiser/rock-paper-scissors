const options = [ 'rock', 'paper', 'scissors' ];
const outcomes = [ 'Player wins!', 'Computer wins!', 'Draw' ];
let score = {
    player: 0,
    computer: 0
};

const scoreBoard = document.querySelector('#score-board');
const currentResult = document.querySelector('#current-result');
const rockButton = document.querySelector('#play-rock');
const paperButton = document.querySelector('#play-paper');
const scissorsButton = document.querySelector('#play-scissors');
const resetButton = document.querySelector('#reset');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
resetButton.addEventListener('click', resetScore);

// From: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay() {
    return options[getRandomInt(0,3)];
}

function getOutcome(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') return { result: 2, message: `${outcomes[2]} Rock vs Rock.` };
        if (computerSelection === 'paper') return { result: 1, message: `${outcomes[1]} Rock loses to Paper.` };
        if (computerSelection === 'scissors') return { result: 0, message: `${outcomes[0]} Rock beats Scissors.` };
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') return { result: 0, message: `${outcomes[0]} Paper beats Rock.` };
        if (computerSelection === 'paper') return { result: 2, message: `${outcomes[2]} Paper vs Paper.` };
        if (computerSelection === 'scissors') return { result: 1, message: `${outcomes[1]} Paper loses to Scissors.` };
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') return { result: 1, message: `${outcomes[1]} Scissors lose to Rock.` };
        if (computerSelection === 'paper') return { result: 0, message: `${outcomes[0]} Scissors beats Paper.` };
        if (computerSelection === 'scissors') return { result: 2, message: `${outcomes[2]} Scissors vs Scissors.` };
    }
}

function playRound(playerInput) {
    let outcome = getOutcome(playerInput, computerPlay());
    if (outcome.result === 0) score.player++;
    if (outcome.result === 1) score.computer++;
    updateCurrentOutcome(outcome);
    updateScore();

    if (score.player === 5 || score.computer === 5) {
        gameOver();
    }
}

function updateCurrentOutcome(result) {
    currentResult.innerText = result.message;
}

function updateScore() {
    scoreBoard.innerText = `${score.player}:${score.computer}`;
}

function gameOver() {
    if (score.player > score.computer) {
        currentResult.innerText = 'You win!';
    } else {
        currentResult.innerText = 'Computer wins!';
    }
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function resetScore() {
    score = {
        player: 0,
        computer: 0
    };
    currentResult.innerText = '';
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    updateScore();
}

updateScore();
