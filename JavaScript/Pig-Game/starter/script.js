'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
//另一种选择id的方法
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
//start condotins
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const score = [0, 0];
let activePlayer = 0;
let currentScore = 0;
//为了当胜利后，再次点击按钮没有响应
let playing = true;

const init = function () {
  score[0] = 0;
  score[1] = 0;
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  //不用判断那个是胜利者
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

//切换active状态

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // 切换玩家 0 的 active 状态：有则移除、无则添加
  player0El.classList.toggle('player--active');
  // 切换玩家 1 的 active 状态：与玩家 0 相反，实现回合切换
  player1El.classList.toggle('player--active');
};

//ROlling dice functionality
buttonRoll.addEventListener('click', function () {
  if (playing) {
    //1.创建随机数字
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);
    //2.显示🎲
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3.check for rolled 1
    if (dice != 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switc to next player
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    //1.Add current score to active player's score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    //2.Check if player's score is >= 20
    if (score[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

//自己写的
// buttonNew.addEventListener('click', function () {
//   playing = true;
//   if (score[0] > score[1]) {
//     player0El.classList.remove('player--winner');
//     player0El.classList.add('player--active');
//     let activePlayer = 0;
//   } else {
//     player1El.classList.remove('player--winner');
//     player1El.classList.add('player--active');
//     activePlayer = 1;
//   }
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   currentScore = 0;
//   score[0] = 0;
//   score[1] = 0;
// });
