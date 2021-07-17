"use strict";

console.clear();

// Итераторы объектных типов

// Цикл for of для перебора значений массива. Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению.

let titles = ['PHP', 'JS', 'CSS', 'HTML'];

// item в цикле - это значение каждого элемента массива titles
for (let item of titles) {
    console.log(item); // выведет каждый элемент массива (доступа к индексу нет)
}

// ИТЕРАТОРЫ - Перебираемые объекты.

// с функцией-итератором пробегающей по СТРОКЕ в заданном диапазоне СИМВОЛОВ

let strRange = {
    value: 'Ехал Грека через реку.',
    from: 10,
    to: 15
}

// for..of сначала вызовет эту безымянную функцию ->
strRange[Symbol.iterator] = function () {

    // -> которая возвращает объект, соответствующий нашему интерируемому объекту, т.е. возвращает объект итератора, после чего (!) for..of работает только с этим итератором, запрашивая у него новые значения

    return {
        // свойства объекта
        str: this.value,
        current: this.from,
        last: this.to,

        // метод next() вызывается на каждой итерации цикла for..of и возвращает значение в виде объекта {done:.., value :...} ->
        next() {
            // -> при условии, что текущее значение меньше последнего значения (диапазон)
            /* if (this.current <= this.last) {
                return {
                    value: this.str[this.current++],
                    done: false
                };
            } else {
                return {
                    done: true
                };
            } */
            // вариант условия с тернарным оператором: 
            return (this.current <= this.last) ? {
                value: this.str[this.current++],
                done: false
            } : {
                done: true
            };
        }
    };
};

for (let char of strRange) {
    console.log(char);
}

console.log('-');