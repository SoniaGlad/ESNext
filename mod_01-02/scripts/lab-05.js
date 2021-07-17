console.clear();

// Lab 5 

// Сортировка со стрелосной функцией

let names = [{
        name: "Яна",
        age: 23
    },
    {
        name: "Коля",
        age: 29
    },
    {
        name: "Аня",
        age: 25
    },
]

let sortArr = (arr) => arr.sort((a, b) => (a.name < b.name) ? -1 : (a.name == b.name) ? 0 : 1);
console.log(sortArr(names));

// сортировка с замыканием
let sortArrClosure = prop => (a, b) => a[prop] < b[prop] ? -1 : a[prop] == b[prop] ? 0 : 1;
console.log(names.sort(sortArrClosure('age'))); // сортировка по возрасту
console.log(names.sort(sortArrClosure('name'))); // сортировка по имени


// Задания: http://htmllab.ru/zadachi-po-javascript-function/ с новыми фичами языка

// ЗАДАНИЕ 1

// Вариант 1 - функция ВОЗВРАЩАЕТ строку

let hello11 = () => 'Привет, JavaScript!';
console.log(hello11()); // вывод результата работы функции, console.log показывает вызов 

console.log('-------');

// ЗАДАНИЕ 2

let hello2 = (name = 'гость.') => `Привет, ${name}`; // функция ВОЗВРАЩАЕТ строку
console.log(hello2('Василий!')); // вывод результата работы функции c аргументом Василий.
console.log(hello2()); // вывод результата работы функции c дефолтным аргументом

console.log('-------');

// ЗАДАНИЕ 3

let mul = (n, m) => n * m;
console.log(mul(13, 3));

if (typeof mul(13, 3) === 'number') {
    console.log('Возвращается правильный тип данных (число / number).');
}

if (mul(13, 3) === 39) {
    console.log('Возвращается правильное значение расчетов функции mul().');
}

console.log('-------');


// ЗАДАНИЕ 4 

let repeatString2 = (str = '', n = 2) => str.repeat(n);
console.log(repeatString2('JS Rules! ', 5));

console.log('-------');


// ЗАДАНИЕ 5

let rgb = (red, green, blue) => `rgb(${red}, ${green}, ${blue})`;
console.log(rgb(235, 22, 119));

console.log('-------');


// ЗАДАНИЕ 6

let avg2 = (...args) => {
    let sum = 0;

    // доступ к индексу не нужен, нужен только доступ к значениям каждого индекса, поэтому цикл for of здесь подходит
    for (let arg of args) {
        sum += arg;
    }

    return sum / args.length;
}
console.log(avg2(9, 15, 3, 17));

console.log('-------');


// ЗАДАНИЕ 7 

let mult = (f, g) => f * g; // умножение

let m = (x, y) => mult(x, y); // функция m возвращает результат работы функции mult
console.log(m(7, 3))

console.log('-------');


// ЗАДАНИЕ 8 

// функция multiplication - это аргумент, который будет подставлен в параметр 'о' функции operation
let multiplication = (j, k) => j * k;

let operation = (m, n, o) => o(m, n);
// результатом работы функции operation является вызов функции в виде параметра 'о' с параметрами m и n

console.log(operation(17, 2, multiplication)); // здесь multiplication - это аргумент параметра 'о' функции operation; этот аргумент - это функция callback

console.log('-------');


// ЗАДАНИЕ 9

// Вариант 1 - Function declaration

let addN2 = n => m => n + m;
let closure2 = addN2(100);
console.log(closure2(37));

console.log('-------');


// ЗАДАНИЕ 10

// с рандомными числами в дефолтном значении
let words = (n = Math.round(Math.random() * 1000)) => {
    let wordEnding = 'товаров';

    if (n % 100 < 5 || n % 100 > 20) {
        if (n % 10 == 1) {
            wordEnding = 'товар';
        }
        if (n % 10 > 1 && n % 10 < 5) {
            wordEnding = 'товара';
        }
    }

    return `${n} ${wordEnding}`;
}
console.log(words()); // вызов без аргументов запускает дефолтное значение (рандомное число)
console.log(words());
console.log(words());