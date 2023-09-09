'use script';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// Initial values
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', () => {
  // Generate a random number between 1-6
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./images/dice-${dice}.png`;

  // Check for 1
  if (dice !== 1) {
    currentScore += dice;
    console.log(currentScore, activePlayer);
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');

    currentScore = 0;
    activePlayer = 1 - activePlayer;
  }
});
