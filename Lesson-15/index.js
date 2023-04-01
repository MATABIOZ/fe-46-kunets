//* Normal level

// Task 1

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// Task 2

const secondsInMinutes = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365.2425;

let myAge = 28;
let myAgeInSeconds = (myAge * daysInYear * hoursInDay * minutesInHour * secondsInMinutes);

console.log('Мой возраст в секундах:', myAgeInSeconds);

// Task 3

let count = 42;
let userName = '42';

let countString = `${count}`;
let userNameNumber = +userName;

console.log(countString, userNameNumber, String(count), parseInt(userName));

// Task 4

let a = 1;
let b = 2;
let c = 'белых медведей';

console.log(`${a}` + `${b}`, c);

// Task 5

let d = 'доступ';
let m = 'морпех';
let n = 'наледь';
let p = 'попрек';
let r = 'рубило';

let lengthWords = (d + m + n + p + r).length;

console.log('Длинна всех слов: ' + lengthWords);

// Task 6

setTimeout(() => {
	let promptUserName = prompt('Введите ваше имя:');
	console.log('Имя:', promptUserName);
	setTimeout(() => {
		let promptUserAge = prompt('Введите ваш возраст:');
		console.log('Возраст:', +promptUserAge);
	}, 600);
}, 800);


//* Advanced 

// Task 1

let e = 4.5;
let f = 3.1;

console.log('e =', e, 'f =', f);

//!почему-то не точные способы для дробных:

// e = e + f;
// f = e - f;
// e = e - f;

// e = f + (f = e) - e;

//!точные способы для дробных:

// e = f + (f = e, 0);

[e, f] = [f, e];

console.log('e =', e, 'f =', f);

// Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);

console.log('Шифр:', cipher);