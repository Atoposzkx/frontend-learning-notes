# 07 Destructuring Spread Rest

# 1.解构及其两个运算符

```js
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
  //传函数参数，spread operate
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
  },
};
//直接对传入参数解构，函数参数里的对象解构
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  startIndex: 2,
});

//数组的解构
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables

//和python一样,a,b=b,a
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, main1] = restaurant.order(2, 0);
console.log(starter, main1);

//Default values,可以设置默认值
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

///////////////////

//Object Destrucing Arrays

//最好在后面重构名,用:

//普通对象解构，解构时的重命名，同时

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log('name:', restaurantName);
console.log('openingHours:', hours);
console.log('categories:', tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//S 会把最外层 {} 当成“代码块”，不是对象。
({ a, b } = obj);
console.log(a, b);

// Nested objects
//嵌套解构
const {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);
```

## 1.1 spread operator

```js
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    startIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
  //传函数参数，spread operate
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
  },
};
/* ... spread operate,作用是把数组或对象展开
把一个可迭代对象 / 对象“展开”开来。
最常见有两类：
展开数组
展开对象
*/
//复制数组，合并数组,插入元素
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables:arrays,string,maps,sets,but not objects
const str = 'jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

//传递函数参数
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Objects,复制对象（shallow copy），合并对象，覆盖属性
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
```

## 1.2rest operator

```js
// rest arguments
//右边展开是 spread，左边收集是 rest。

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objcets
const { sat: Say, ...weekdays } = restaurant.openingHours;
console.log(Say, weekdays);

//Functions,定义函数收集参数
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
//这里与箭头函数与普通函数那里的伪数组arguments做过笔记
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);
```

## 
