// ! Normal level

// * Task 1

console.log('### Task 1 ###');

let variable1 = 'true';
let variable2 = false;
let variable3 = 17;
let variable4 = undefined;
let variable5 = null;

console.log(typeof variable1, typeof variable2, typeof variable3, typeof variable4, typeof variable5);

// * Task 2

console.log('### Task 2 ###');

let height = 15;
let width = 20;

// console.log(height > width ? height : width);

if (height > width) {
	console.log(height);
} else {
	console.log(width);
};

// * Task 3

console.log('### Task 3 ###');

let num = 1;

while (num <= 20) {
	if (num % 3 === 0) {
		console.log(num);
	}
	num++;
};

// * Task 4

console.log('### Task 4 ###');

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

if (key && documents && pen && (apple || orange)) {
	const shouldGoToWork = 'Ничего не забыл, можно идти на работу';
	console.log(shouldGoToWork);
};

// * Task 5

console.log('### Task 5 ###');

let enterNum = prompt('Введите число:');
enterNum = parseInt(enterNum);

while (isNaN(enterNum)) {
	alert('Введенные данные не являются числом.');
	enterNum = prompt('Введите число:');
	enterNum = parseInt(enterNum);
};

if (enterNum % 3 === 0 && enterNum % 5 === 0) {
	console.log('FizBuz');
} else if (enterNum % 5 === 0) {
	console.log('Fiz');
} else if (enterNum % 3 === 0) {
	console.log('Buz');
} else {
	console.log('Введенное число не делится без остатка на 3 и 5');
};

// * Task 6

console.log('### Task 6 ###');

let userAge = prompt('Введите свой возраст:');
userAge = parseInt(userAge);

while (isNaN(userAge)) {
	alert('Возраст введен некоректно');
	userAge = prompt('Введите свой возраст:');
	userAge = parseInt(userAge);
};

if (userAge >= 16 && userAge < 18) {
	alert('Пей колу.');
	alert('Можешь выкурить сигаретку, только маме не говори.');
} else if (userAge >= 18) {
	alert('Попей пивка.');
} else {
	alert('Пей колу.');
};

// * Task 7

console.log('### Task 7 ###');

let cardPoints = prompt('Напишите, в какую сторону света вы бы хотели отправиться (юг, запад, север или восток):');
cardPoints = (cardPoints.toLowerCase());

switch (cardPoints) {
	case 'юг':
		console.log('На юг пойдешь - счастье найдешь.');
		break;
	case 'запад':
		console.log('На запад пойдешь - верного друга найдешь.');
		break;
	case 'север':
		console.log('На север пойдешь - много денег найдешь.');
		break;
	case 'восток':
		console.log('На восток пойдешь - разработчиком станешь.');
		break;
	default:
		console.log('Направление введено некоректно. Попробуйте еще раз.');
		break;
};


// ! Advanced level

// * Task 1

let userName = 'пОлИнА нАбЕрЕжНаЯ';
userName = (userName.toLowerCase().split(' '));

let nameWords = userName.map(word => word.charAt(0).toUpperCase() + word.slice(1));
let fixUserName = nameWords.join(' ');

alert(`Привет, ${fixUserName}!`);

// * Task 2

let reqNum = prompt('Введите число:');
let minusNum = prompt('Сколько отнять?');
let plusNum = prompt('Сколько прибавить?');
let multNum = prompt('На сколько умножить?');
let divNum = prompt('На сколько делить?');

let result = ((((reqNum - minusNum) + plusNum) * multNum)/divNum);

let outputResult = (`(${reqNum} - ${minusNum} + ${plusNum}) * ${multNum} / ${divNum} = ${result}`);

alert(outputResult);