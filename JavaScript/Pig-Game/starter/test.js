'use strict';
// console.log(addArrow);
// console.log(addExpr);
// console.log(addDecl(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// console.log(this);

// const calAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   //用严格模式这里的this无法访问全局
//   console.log(this);
// };

// calAge(1997);

//正确的例子
const jonas = {
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calAge();
//jonas['calAge']();

const zkx = {
  year: 2017,
};

zkx.calAge = jonas.calAge;
zkx.calAge();
