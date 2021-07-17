console.clear();

function foo(v1, v2, ...v3) { // параметр 1, параметра 2, параметра 3 в виде массива
    console.log(typeof v1);
    console.log(typeof v2);
    console.log(typeof v3);
    console.log(v1);
    console.log(v2);
    console.log(v3);
}
foo(23, 'Hello', 45, 'Buy'); // мы получили в 1-й параметр значение 23, во 2-й значение Hello, а в 3-й массив с 2-мя значениями 45 и Buy с соответствующими индексами [0] и [1]


// Найти максимальное число в массиве

let numbers = [13, 37, 24, 44];

console.log(Math.max(numbers)); // NaN - в функцию Math.max() передали не отдельные значения, а массив

console.log(Math.max.apply(null, numbers)); // находим максимальное числов массиве с помощью метода apply() - принимает псевдомассив

console.log(Math.max(...numbers)); // посредством оператора spread передаем функции Math.max() элементы массива в виде отдельных переменных


function somefunc() {
    for (let i = 0; i < arguments.length; i++) { // старый вариант arguments вместо оператора spread
        console.log(arguments[i]);
    }
}
somefunc(numbers); // вызываю функцию с аргументом массива numbers - отображается массив [13, 37, 24, 44]
somefunc(...numbers); // вызываю функцию с аргументом массива numbers и опертором spread - отображаются значения массива 13 37 24 44 отдельно


// Передача параметров в новом формате

let user = {
    name: 'Sonia',
    // age: 44
}

function showUser(user_param) { // параметр user_param
    console.log(user_param.name, user_param.age); // выводим имя и возраст от объекта user
}
showUser(user); // вызвали функцию и передали аргументом объект user в качестве параметра этой функции (обычный вариант)

function showUser2({name, age = 18}) { // в параметры записываем с {} свойства объекта и дефолтным значеним для свойства age
    console.log(name, age); // выводим имя и возраст без . и указания самого объекта
}
showUser2(user); // вызвали функцию и передали аргументом объект user в качестве параметра этой функции 


// Название функций

function myFunc() {
    console.log('Я - функция! И это звучит гордо.');
}
console.log(myFunc.name); // доступ к названию функции по name
