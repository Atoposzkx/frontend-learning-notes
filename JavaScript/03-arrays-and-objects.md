# 03 Arrays and Objects

## 1.数组

```javascript
// Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
```

### 1.1数组常用的方法

```javascript
// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); //弹出的元素
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
```

## 2.对象

### 2.1对象基本介绍(常见用法)

`obj.name`：`name` 是**属性名**

`obj[name]`：`name` 是**变量**

`obj["name"]`：`"name"` 才是**字符串属性名**

```javascript
//Object
const jonas = {
  firstName: "Jonas",
  lastName: "zkx",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["wy", "zc", "zl"],
};

console.log(jonas);
//两种表达属性
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//解释为什么要用方括号，一般是属性未确定

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName,lastName,age,job,and friends",
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
```

## 3.对象实例代码（deep copy vs shallow copy）

```js
//Object Referrnces in Practice (Shallow vs Deep Copies)

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before:", jessica);
console.log("After:", marriedJessica);

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
// Object.assign() 是浅拷贝：
// 它只复制第一层属性。
// 如果属性值是引用类型（如对象、数组），复制的是引用地址，不是新的独立内容。
const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");

jessicaCopy.family.push("John");
//两者的family是一样的
console.log("Before marriage", jessica2);
console.log("After marriage", jessicaCopy);
```

## 4.对象增强

```js
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//属性可以变为参数
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals,外面可以单独写一个对象再放进
  openingHours,
	//可以忽略function,直接定义
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
```

## 5.optional chaining (?.)

### 5.1定义

`?.` 叫：

> **可选链运算符（Optional Chaining）**

它的作用是：

> **当左边是 `null` 或 `undefined` 时，停止继续取属性，并直接返回 `undefined`，而不是报错。**

```js
/Optional Chaining 实际就是判断该属性值是否存在
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//WITH optional chaining ,简化这一写法

console.log(restaurant.openingHours.mon1?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day},we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

```

### 5.2详细解释

```js
console.log(restaurant.openingHours?.mon?.open);
```

意思是：

- `openingHours` 存在才继续
- `mon` 存在才继续
- 否则返回 `undefined`

------

**配合 `??` 使用**

```
const open = restaurant.openingHours[day]?.open ?? 'closed';
```

意思是：

- 如果这一天存在，并且有 `open`，就取营业时间
- 如果不存在，返回 `'closed'`

------

**为什么不用 `||`**

因为：

```
sat: { open: 0 }
```

`0` 是有效值，但 `||` 会把它当成假值。

所以这里要用：

```
??
```

而不是：

```
||
```

------

### 5.3falsy values（假值）

包括：

- `0`
- `''`
- `false`
- `NaN`
- `null`
- `undefined`

这些主要影响：

- `if`
- `||`
- `&&`
- `Boolean()`

------

### 5.4nullish values（空值）

只有两个：

- `null`
- `undefined`

这些主要影响

- `??`
- `?.`

## 6.遍历对象的三个属性值

### 6.1示例代码

```js
//Looping Objects:Object Keys,Values,and Entries,都将对象属性转化为数组

// Property NAMES
const properties = Object.keys(restaurant.openingHours);
//[ 'thu', 'fri', 'sat' ]
console.log(properties);

let openStr = `We are open on ${properties.length} days`;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

//Entire object
// [
//   [ 'thu', { open: 12, close: 22 } ],
//   [ 'fri', { open: 11, close: 23 } ],
//   [ 'sat', { open: 0, close: 24 } ]
// ]
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// [key,value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
```

### 6.2与数组应用的区分

这里与数组作为一个区分

**数组也能用 `Object.entries()`、`Object.keys()`、`Object.values()`**。

只是要分清：

- 数组有自己的一套：`arr.entries()` / `arr.keys()` / `arr.values()`
- 对象也有一套通用的：`Object.entries(arr)` / `Object.keys(arr)` / `Object.values(arr)`

所以数组**不是不能用**，而是**两种都能用，但返回形式和定位略有不同**。

------

#### 1. 数组的 `entries()`

```js
const arr = ['a', 'b', 'c'];

for (const [index, value] of arr.entries()) {
  console.log(index, value);
}
```

输出：

```js
0 'a'
1 'b'
2 'c'
```

这个返回的是一个 **iterator（迭代器）**。

------

#### 2. 数组也能用`Object.entries()`

```js
const arr = ['a', 'b', 'c'];

console.log(Object.entries(arr));
```

输出：

```js
[ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]
```

注意这里的 key 是字符串：

- `'0'`
- `'1'`
- `'2'`

因为对象的键本质上会转成字符串。

------

#### 3. 它们的区别

`arr.entries()`

返回**迭代器**，结果是：

```js
[index, value]
```

其中 index 是数字语义。

------

`Object.entries(arr)`

返回真正的数组，结果是：

```js
[['0', value1], ['1', value2]]
```

其中 key 是字符串。

------

#### 4. 对比一下最清楚

```js
const arr = ['x', 'y'];

console.log(arr.entries());
console.log([...arr.entries()]);
console.log(Object.entries(arr));
```

输出大致是：

```js
Array Iterator {}
[[0, 'x'], [1, 'y']]
[['0', 'x'], ['1', 'y']]
```

#### 5.数组推荐这样用

```js
arr.entries()
arr.keys()
arr.values()
```

因为这是数组原生迭代方法。

------

数组也可以这样用

```js
Object.entries(arr)
Object.keys(arr)
Object.values(arr)
```

只是它更像是“把数组当对象看”。

------

#### 6. 比如 `Object.keys(arr)`

```js
const arr = ['a', 'b', 'c'];

console.log(Object.keys(arr));
```

输出：

```js
['0', '1', '2']
```

------

#### 7. 比如 `Object.values(arr)`

```js
const arr = ['a', 'b', 'c'];

console.log(Object.values(arr));
```

输出：

```js
['a', 'b', 'c']
```

------

#### 8. 总结

> **数组不是不能用 `Object.entries()`，而是数组既能用自己的 `entries()`，也能用 `Object.entries()`。**

只是：

- `arr.entries()` 更像数组自己的遍历工具
- `Object.entries(arr)` 更像把数组按对象键值对形式取出来

------

推荐做一个综合练习

