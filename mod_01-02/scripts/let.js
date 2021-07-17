console.log(test); // undefined с babel, или ошибка без babel
let test = 123;
console.log(test);

test = 'Привет!'; // ок
// let test = 'Привет!'; // нельзя переопределять переменную - ошибка
// const test = 'Привет!'; // нельзя переопределять переменную - ошибка
// var test = 'Привет!'; // нельзя переопределять переменную - ошибка
console.log(test);

for (var i = 0; i < 10; i++) {
    console.log(i); // 1 - 9
}
console.log(i); // 10 - переменная объявленная с помощью var доступна ВНЕ цикла

for (let j = 0; j < 10; j++) {
    console.log(j); // 1 - 9
}
// console.log(j); // ошибка - переменная объявленная с помощью let НЕ доступна ВНЕ цикла 


// setTimeout - разница между let и var

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i); // число 10 выведется 10 раз (цикл от 0 - 10)
    }, 1000);
}

for (let j = 0; j < 10; j++) {
    setTimeout(function () {
        console.log(j); // выведется 0 - 9 (!)
    }, 1000);
}


// Константы с примитивами

const PI = 3.1415;
// PI = 1313; // ошибка - у констаты нельзя сменить значение
console.log(PI); // 3.141

// Константы с объектами

const USER = {
    name: 'Sonia',
    age: 44
};
USER.age++; // меняем 1 СВОЙСТВО объекта, НЕ сам объект ->
console.log(USER.age); // 45 - age изменился

// USER = {}; // сам объект изменить нельзя! ошибка ->
// console.log(USER); // ошибка