'use strict';
// Comment

// Selecting Elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('#score--1'); // an alternative way, faster than querySelctor
const diceEL = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

rollDice.addEventListener('click', function () {
  const randomNumber = Math.trunc(Math.random() * 6);
});
