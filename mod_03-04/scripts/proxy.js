'use strict';

console.clear();

// Объект Proxy является оберткой для другого объекта и перехватывает/обрабатывает различные действия с ним

// создаем объект city
let city = {
    name: 'Астрахань',
    builtYear: 1558
};

// создаем вспомогательный объект handler
let handler = {

    get(target, prop) { // метод c 2-мя параметрами: целевой объект и свойство объекта
        return target[prop];
    },

    set(target, prop, value) { // метод c 3-мя параметрами: целевой объект, свойство объекта и знчение (метод для установки значения)
        target[prop] = value;
        return value;
    },

    has(target, prop) {
        return prop in target;
    },

    deleteProp(target, prop) {
        delete target[prop];
    }
};

// создаем proxy
let proxyCity = new Proxy(city, handler);

proxyCity.population = 1e6; // установили свойство population со значением 1млн. при помощи proxy
console.log(proxyCity.population);
console.log(city); // теперь в объекте city есть и name и population

// ВНИМАНИЕ! При работе с proxy изменения просходят в самом объекте

console.log('surface' in proxyCity);
console.log('population' in proxyCity);

delete proxyCity['builtYear'];
console.log('builtYear' in proxyCity);
console.log(city);