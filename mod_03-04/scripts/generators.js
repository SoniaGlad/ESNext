'use strict';

console.clear();

// Генератор - это функция, возвращающая итератор

// с Babel НЕ работает!

function* myGenerator() {
    yield 37;
    yield 13;
    yield 1;
    yield 123;
}

let itNum = myGenerator();
console.log(itNum);

for (let num of itNum) {
    console.log(num);
}


console.log('-');


function* myGenerator_2() {
    let i = 10; // стартовое значение

    while (i) { // пока стартовое значение true ->
        yield i++; // -> увеличиваем на каждой итерации i на единицу
    }
}

let itNum_2 = myGenerator_2();

// проходим 5 раз
for (let j = 0; j < 5; j++) {
    console.log(itNum_2.next()); // выводим НЕ значения как в примере выше, а результат работы функции next(), т.е. объект со свойствами - посчитанными нами value и done 
}


console.log('-');

// массив объектов дней недели
let dayNames = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

// функция-генератор
function* nextDay(arr, start) {
    // цикл пробегает по всем элементам массива и ->
    for (let i = start; i < arr.length; i++) {
        yield arr[i]; // -> возвращает значение каждого элемента
    }
}

let iteratorDays = nextDay(dayNames, 3);

// выводим результат работы функции next(), т.е. объекты
for (let i = 0; i < dayNames.length; i++) {
    console.log(iteratorDays.next());
}

// цикл для вывода только дней недели
/* for (let i of iteratorDays) {
    console.log(i);
} */