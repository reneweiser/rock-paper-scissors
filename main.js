const options = [ 'rock', 'paper', 'scissors' ];
const outcomes = [ 'Player wins!', 'Computer wins!', 'Draw' ];

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
        if (computerSelection === 'rock') return { result: 2, message: `${outcomes[2]}. Rock vs Rock.` };
        if (computerSelection === 'paper') return { result: 1, message: `${outcomes[1]}. Rock loses to Paper.` };
        if (computerSelection === 'scissors') return { result: 0, message: `${outcomes[0]}. Rock beats Scissors.` };
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') return { result: 0, message: `${outcomes[0]}. Paper beats Rock.` };
        if (computerSelection === 'paper') return { result: 2, message: `${outcomes[2]}. Paper vs Paper.` };
        if (computerSelection === 'scissors') return { result: 1, message: `${outcomes[1]}. Paper loses to Scissors.` };
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') return { result: 1, message: `${outcomes[1]}. Scissors lose to Rock.` };
        if (computerSelection === 'paper') return { result: 0, message: `${outcomes[0]}. Scissors beats Paper.` };
        if (computerSelection === 'scissors') return { result: 2, message: `${outcomes[2]}. Scissors vs Scissors.` };
    }
}

function playRound() {
    console.log(getOutcome('rock', computerPlay()));
}

function game() {
    let score = {
        player: 0,
        computer: 0
    };

    for (let i = 0; i < 5; i++) {
        let playerInput = window.prompt('Type one (rock, paper or scissors)').toLowerCase();
        let outcome = getOutcome(playerInput, computerPlay());
        if (outcome.result === 0) score.player++;
        if (outcome.result === 1) score.computer++;
        console.log(outcome.message);
    }

    console.log(`Final score: ${score.player}:${score.computer}`);
}

// playRound();
// game();