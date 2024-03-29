'use script';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let scores, currentScore, activePlayer;

const intializeValues = () => {
  // Initial values
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;

  diceEl.classList.add('hidden');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');

  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');

  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');

  document.querySelector(`.winner--0`).classList.add('hidden');
  document.querySelector(`.winner--1`).classList.add('hidden');
};

intializeValues();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');

  currentScore = 0;
  activePlayer = 1 - activePlayer;
}

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    switchPlayer();
  }
});

btnHold.addEventListener('click', () => {
  // Add current score to active player score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // Check if player score is >= 100
  if (scores[activePlayer] >= 100) {
    diceEl.classList.add('hidden');
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    document
      .querySelector(`.winner--${activePlayer}`)
      .classList.remove('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
  } else {
    // Switch Player
    switchPlayer();
  }
});

btnNew.addEventListener('click', intializeValues);
