'use strict';

console.log(document.querySelector('.message').textContent);

// 生成 1~20 的随机整数：random 得到 0~1 小数，*20 后 trunc 去小数，最后 +1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
//监听事件addEventListener 给（'click'）这个事件添加一个监听

document.querySelector('.check').addEventListener('click', function () {
  // 1) 取输入框中的值，Number(...)把字符串转成数字
  const guess = Number(document.querySelector('.guess').value);

  // 2) 根据输入情况给出反馈
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct NUmber!';

    document.querySelector('.number').textContent = secretNumber;

    //更改css样式用style,而且等于的必须是字符串
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.hightscore').textContent = highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
});
