# 03 Arrays and Objects

## 1.数组

```javascript
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
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
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); //弹出的元素
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
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

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica1;
marriedJessica.lastName = 'Davis';

console.log('Before:', jessica);
console.log('After:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
// Object.assign() 是浅拷贝：
// 它只复制第一层属性。
// 如果属性值是引用类型（如对象、数组），复制的是引用地址，不是新的独立内容。
const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');

jessicaCopy.family.push('John');
//两者的family是一样的
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
```

