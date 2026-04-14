'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked');
  //classList是可以列出这个里面有多少类，所以在后面的操作中就不用再加.,只需要写类名就可以了。
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // 把 openModal 函数“交给”点击事件；不加()是为了点击时再执行，而不是现在立刻执行
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

// 监听整个页面的键盘按下事件
document.addEventListener('keydown', function (e) {
  //e是反返回的是一个对象
  // e.key 表示当前按下的按键（例如 "Escape"、"Enter"）
  console.log(e.key);

  // 只有在“按下 Esc 且弹窗当前是打开状态”时，才执行关闭
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
