const scores = document.querySelector('.score');

const selectScore = document.querySelector('#select-option-score');

const playerOneBtn = document.querySelector('#btn-player-one');
const playerTwoBtn = document.querySelector('#btn-player-two');

const playerOneDisplay = document.querySelector('#player-one-display');
const playerTwoDisplay = document.querySelector('#player-two-display');


let winningScore = 2;
let playerOneScore = 0;
let playerTwoScore = 0;

playerOneBtn.addEventListener('click', () => {
    if (playerOneScore !== winningScore) {
        playerOneScore += 1;
        playerOneDisplay.textContent = playerOneScore;
    } else if (playerOneScore === winningScore) {
        playerOneBtn.style.backgroundColor = '#98c1d9';
        playerOneDisplay.style.color = '#80ed99'
    } else if (playerOneScore === winningScore) {
        playerOneDisplay.style.color = '#80ed99'
    }

})

playerTwoBtn.addEventListener('click', () => {
    if (playerTwoScore !== winningScore) {
        playerTwoScore += 1;
        playerTwoDisplay.textContent = playerTwoScore;
    } else if (playerTwoScore === winningScore) {
        playerTwoBtn.style.backgroundColor = '#98d9cb';
        playerTwoDisplay.style.color = '#80ed99'
    } else if (playerTwoScore === winningScore) {
        playerTwoDisplay.style.color = '#80ed99'
    }
})









