"use strict";
// let markWeight = 78;
// let markHeight = 1.7;
// let johnWeight = 92;
// let johnHeight = 1.95;
// let markBMI = markWeight / markHeight **2;
// let johnBMI = johnWeight / johnHeight **2;
// let compare = markBMI > johnBMI;
// console.log(compare);

// let dolphins = (89 + 96 + 108) / 3;
// let koalas = (88 + 91 + 110) / 3;
// if (koalas > dolphins && koalas === 100) {
//   console.log("Koalas win");
// } else {
//   console.log("Dolphins win");
// }

// const salary = 2000;
// switch (salary) {
//   case 1000:
//     document.write("Have some money bitch");
//     break;
//   case 2000:
//     document.write("Have a lot of money bitch");
//     break;
// }

// let person = "roman";

// switch (person) {
//   case "roman":
//     document.write("dude you are perfect");
//     break;
//   case "andrew":
//     document.write("dude you are also normal mother fucker");
//     break;
//   default:
//     document.write("bitch magnets");
// }

//destructing arrays

// const arr = [ 'fuck', 2, 3];
// let [one, two,three] = arr;
// console.log(one,two,three);

// [one, two] = [two, one];
// console.log(one,two);

// const nested = [2, 4, [5,6]];
// const [i, , [j,k]] = nested;
// console.log(i,j,k);

// const [ y, h, c=1] = [1, 2];
// console.log(y,h,c);

// // destructing object
// const human = {
//   age : 30,
//   height : 1.88,
//   weight : 88,
//   skills : ['reading','coding','driving']
// };

// const {
//   age: vik,
//   height: rist,
//   skills : naviki
// } = human;
// console.log(vik,rist,naviki);
// const {work =[], age : vikk = 40} = human
// console.log(work,vikk);

// let a = 100;
// let b = 200;
// const obj = {a: 50, b : 50, c : 70};
// ({a,b} = obj);
// console.log(a,b);

// //spread operator
// const array = [1, 2, 3];
// const newarr = [11, 12, ... array];
// const meregarr = [...newarr, 100,200] //adding new values to arr
// console.log(...meregarr, ...array); //join 2 arrays

// let arr = ["dillon", "chase", "eugene", 40, "roma"];

// for (const [i,el] of arr.entries()){
//   console.log(`${i + 1}  : ${el}`);
// }

// const obj = {
//   age: "30",
//   gender: "male",
//   skill: "code",
//   learn: function () {
//     console.log("Ce passa");
//   },
// };
// console.log(obj?.skill);
// const proper = Object.keys(obj);
// console.log(proper.length);

// //nullish coalesing operator
// let name = null;
// let imia = name ?? 40;
// console.log(imia);

// let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const data = obj.age && obj.skill;
// console.log(data);

// obj.learn && obj.learn("dada");

// //coding challenge
// for (const [i, player] of game.scored.entries())
//  console.log(`Goal ${i + 1}: ${player}`);

//  const odds = Object.values(game.odds);
//  let average = 0;
//  for( const odd of odds) average += odd;
//  average /= odds.length;
//  console.log(average);

//  for(const [team, odd] of Object.entries(game.odds)){
//    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//    console.log(`Odd of ${teamStr} ${odd}`);
//  }

// new Set unique values
// const orderSet = new Set([
//   'rissoto',
//   'rissoto',
//   'pizza',
//   'pizza',
//   'pizza',
//   'pasta'
// ]);
// console.log(orderSet.has('pizza'));

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenza, Italy');
// console.log(rest.set(2,'Lisbon Portugal'));

// rest
// .set('categories',['Italian','Pizzeria','Organic'])
// .set('open', 11)
// .set('closed', 23)
// .set(true, 'We are open')
// .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));
// const arr = [1, 2];
// rest.set(arr, 'Fuck it');
// console.log(rest.size);
// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'What best programming language'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try again'],
// ]);
// console.log(question);

// console.log(question.get('question'));
// for(const [key, value] of question){
//   if(typeof key === 'number')
//   console.log(`Answer ${key}: ${value}`);
// }

/////////coding challenge
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// const str = 'dIlLoN';
// const cor = str.toLocaleLowerCase();
// const corre = cor[0].toLocaleUpperCase() + cor.slice(1);
// console.log(corre);

// const edit = function(word){
// const cor = word.toLocaleLowerCase();
// const corec = cor[0].toLocaleUpperCase() + cor.slice(1);
// return corec;
// };
// const res = edit('dILLON');
// console.log(res);

// const capitalized = function(name){
//   const names = name.split(' ');
//   const nameUpper = [];
//   for( const n of names){
//     nameUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(nameUpper.join(' '));
// };
// capitalized('jack richard')

//  const marskCredit = function(card){
//   const str = card + '';
//   const cardDigits = str.slice(-4);
//   return cardDigits.padStart(str.length, '*');
//  };
//  console.log(marskCredit(414718889));

//  const planeLine = function(n){
//   console.log(`there are ${n} plane in line alos ${'🐱‍🏍'.repeat(n)}`);
//  };
//  planeLine(5)

// document.body.append(document.createElement('button'));
// document.body.append(document.createElement('textarea'));
// document.querySelector('button').addEventListener('click',function() {
// const text = document.querySelector('textarea').value;
// const rows = text.split('\n');

// for(const [i,row] of rows.entries()){
//   const [first, second] = row.toLowerCase().trim().split('_');
//   console.log(i,row);
//   const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//   console.log(`${output.padEnd(20)}${'🐱‍🏍'.repeat(i + 1)}`);
// }
// });

// let rom = 'dillonpower';
// // console.log(rom.padEnd(25,'_'));
// console.log(rom.slice(2,5));
// console.log(2 * 3**3);
// console.log(typeof NaN);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const [i, val] of movements.entries()) {
//   if(val > 0 ) {
//     console.log(`Movement ${i + 1} You passed: ${val} `);
//   }else {
//     console.log(`Movement ${i + 1}: You withdrew ${val}`);
//   }
// }

// const array = ['billy','bobby','brown'];
// array.forEach(function (element,i,arr) {
//   console.log(arr);
// });

// const currencies = new Set([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key){
//   console.log(`${value} ${key}`);
// });

////coding challenge

// const JuliaData = [3, 5, 2, 12, 7];
// const KateData = [4, 1, 15, 8, 3];
// const juliaNew = JuliaData.slice().slice(1, -2);
// // const juliaNew = [...JuliaData].slice(1, -2);

// const checkDogs = function(arr, arr2) {
//  const dogs = KateData.concat(juliaNew);
//  dogs.forEach(function(dog,i) {
//   if(dog >= 3 ){
//     console.log(`Dog number ${i + 1} is aduld ${dog}`);
//   } else {
//     console.log(`${i + 1} is a puppy`);
//   }
//  });
// };

// checkDogs(juliaNew,KateData);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;
// const moveUsd = movements.map(function(mov){
//   return mov * euroToUsd;
// });
// console.log(movements);
// console.log(moveUsd);

// const name = 'Steven Thomas Williams';
// const updatedName = name.toLowerCase().split(' ').map(word => word[0]).join('');
// console.log(updatedName);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const move = movements.filter(value => value < 0
// );
// console.log(move);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const safe = (mask) => {
//   const card = mask + '';
//   const newCard = card.slice(-4);
//   const final = newCard.padStart(card.length, '*');
//   return final;
// }
// console.log(safe(7583275982));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce(function(acc,item,i ,arr){
//   console.log(`iteration ${i}: ${acc}`);
//   return acc + item;
// }, 0);
// console.log(balance);

// const JuliaData = [5,2,4,1,15,8,3];
// const KateData = [16,6,10,5,6,1,4];

// const calcAerageHumanAge = function(ages) {
//   const humanAge = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4);
//   const filtred = humanAge.filter(age => age >= 18);
//   console.log(filtred);
//   const average = filtred.reduce((acc,age) => acc + age, 0) / filtred.length;
//   return average;
// };
// const avg = calcAerageHumanAge(JuliaData);
// const avg2 = calcAerageHumanAge(KateData);
// console.log(avg,avg2);

// const arr = [141,634 ,525 ,246, 252];
// const newArr = arr.reduce((acc,item) => acc += item, arr[0]);
// console.log(newArr);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const human = {
//   legs: '2',
//   skill: 'read',
//   work: 'programmer'
// };
// for( const [value, key] of Object.entries(human)) {
//   console.log(`${value}: ${key}`);
// };

// const me = {
//   speak: 'fuck off'
// };
// console.log(me.speak?.toUpperCase() ?? 'wrong answer');

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(`Sarah's dog is eating  too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

// const ownersEatTooMuch = dogs
// .filter(dog => dog.curFood > dog.recFood)
// .flatMap(dog => dog.owners);

// const ownersEatTooLittle = dogs
// .filter(dog => dog.curFood < dog.recFood)
// .flatMap(dog => dog.owners);

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);
// console.log(dogs.some(dog => dog.curFood === dog.recFood));
// console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1));

// setInterval(() => {
//   const date = new Date();
//   console.log(date);
// }, 1000);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function(){
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// }
// Car.prototype.break = function(){
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);

// }

// const bmw = new Car("bmw", 120);
// const audi = new Car("audi", 100);

// bmw.accelerate();
// bmw.accelerate(100);
// bmw.accelerate();
// bmw.break()

// class Personcl {
//   constructor(firstName, birthYear){
//    this.firstName = firstName;
//    this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2040 - this.birthYear);
//   }
//   get thingOne() {
//     return console.log(`some text`)
//   }
//   set thingTwo(item) {
//     console.log(`some text and ${item}`)
//   }
// }

// const jessica = new Personcl('Jessica',1996)
// jessica.calcAge()
// jessica.thingTwo = 50;

//   const mov = movements.forEach((item, index) => console.log(`Index ${index +1} and Number  ${item}`))

// const Room = function(tv, chair) {
//   this.tv = tv;
//   this.chair = chair;
// }

// Room.prototype.remont = function() {
//   console.log(`fuck it`)
// }

// const apart = new Room('trys', 77)
// console.log(apart)
// apart.remont()

///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }
// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

/////////////////////// XMLHttpREQUEST

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `'https://restcountries.eu/v2/name/${country}'`);
//   request.send();
//   request.addEventListener("load", function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData(portugal)

////////////////////////     Net Ninja   //////////////////////////////////////////////////////////

// const bill = function (products, tax) {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };
// console.log(bill([10, 15, 30], 0.2));

// const ul = document.querySelector('.people');

// let html = ``;
// const people = ['mario', 'luigi', 'ruy', 'shaun'];
// people.forEach(person => {
//   html += `<li style ="color: purple">${person}</li>`
// })
// ul.innerHTML = html;

// const blogs = [
//   {title: 'some random text', likes: 30},
//   {title: 'some random text2', likes: 40}
// ]
// blogs.forEach(val => console.log(`hi there ${val.title}`))

// const paras = document.querySelectorAll('p');
// paras.forEach(val => {
//   val.innerText += ' new text'
//   console.log(val.innerText);
// })

// const head = document.querySelector('#main-heading')
// people.forEach(person => {
//   head.innerHTML += `<p>${person}</p>`
// })
// head.style.margin = '30px';
// head.classList.add('another')

const parag = document.querySelectorAll("p");
parag.forEach((val) => {
  if (val.textContent.includes("error")) {
    val.classList.add("error");
  }
  if (val.textContent.includes("success")) {
    val.classList.add("success");
  }
});


const items = document.querySelectorAll("li");
const ul = document.querySelector("ul");


const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  // btn.classList.toggle("success");
  // ul.innerHTML += '<li>something new</li>
  const li = document.createElement("li");
  li.textContent = "something to do";
  ul.prepend(li);
});


// items.forEach(item => {
//   item.addEventListener('click', e => {
//     // e.target.style.textDecoration = "line-through"
//     console.log('event in LI');
//     e.stopPropagation()
//     e.target.remove()
//   })
// })

//// can just add to parent element
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.remove();
});

const copy = document.querySelector(".copy-me");
copy.addEventListener("copy", () => {
  console.log("my content !!!");
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  box.textContent = `x pos - ${e.offsetX}  y pos -${e.offsetY}`;
});

// POPUP

const button = document.querySelector(".btn-hit");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

const capitalize = (value) => {
  return value
    .toLowerCase()
    .split(" ")
    .map((value) => value[0].toUpperCase() + value.slice(1))
    .join(" ");
};
console.log(capitalize("prystupa roman bogdanovich"));

const cover = (card) => {
  const data = card + "";
  const digits = data.slice(-4);
  const final = digits.padStart(data.length, "*");
  return final;
};
console.log(cover(26578265782882));

const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// const username = document.querySelector('#username')
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  if (usernamePattern.test(username)) {
    feedback.textContent = "That username is valid";
  } else {
    feedback.textContent = "That username not passing requirements";
  }
});

////REGEX
const username = "dillon";
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username);

form.username.addEventListener("keyup", (e) => {
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success-input");
  } else {
    form.username.setAttribute("class", "error-input");
  }
});

// let fi = 10
// let score = 0
// const timer = setInterval(() => {
//   console.log('fuck off')
//   if(score === fi) {
//     clearInterval(timer)
//   } else score++
// },1000)


const products = [
  {name: 'gold star', price:20},
  {name: 'mushroom', price:40},
  {name: 'green shells', price:30},
  {name: 'banana skin', price:10},
  {name: 'red shells', price:50}
]

const saleProducts = products.map(product => {
  if(product.price > 30) {
    return {name: product.name, price: product.price / 2}
  } else {
    return product
  }
})
  console.log(saleProducts);

const scores = [10, 20, 60, 40, 70, 90, 30]
scores.sort((a,b) => b - a)
console.log(scores);

const finalScores = scores.reduce((acc, curr) => {
  if(curr > 50) {
    acc++
  }
  return acc
},0)
console.log(finalScores);


const clock = document.querySelector('.clock')

const tick = () => {
  const now = new Date()
  const h = now.getHours()
  const m = now.getMinutes()
  const s = now.getSeconds()
  const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
  `
  clock.innerHTML = html
}

setInterval(tick, 1000)

// const getTodos = (callback) => {
// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', () => {
//   if(request.readyState === 4 && request.status === 200) {
//     const data = JSON.parse(request.responseText)
//     callback(undefined, data)
//   } else if(request.readyState === 4){
//     callback('coud not fetch data', undefined)
//   } 
// })
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// request.send()
// }

// getTodos((err, data) => {
//   console.log('callback fired')
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// })


