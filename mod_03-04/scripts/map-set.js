'use strict';

console.clear();

// Map - коллекция ключ/значение, где ключ может быть любого типа

// создали новую коллекцию users
let users = new Map();

// содали объект user_1
let user_1 = {
    firstName: 'Sonia',
    age: 44
};

// устанавливаю объект user_1 В ВИДЕ КЛЮЧА в объект users
users.set(user_1, 1e5); // 1-й параметр - это ключ в виде объекта user_1, а 2-й - значение этого ключа
users.set({
    firstName: 'Ava'
}, 2e5); // 1-й параметр - это ключ в виде нового объекта, а 2-й - значение этого ключа

console.log(users); // сам объект map: объект с 2-мя map-свойствами в виде объектов и их значениями в виде цифр(з/п)

console.log(users.size); // параметр size выводит кол-во map-свойств

console.log(users.get(user_1)); // метод get() возвращает значение map-свойства по нужному нам ключу

console.log(users.keys().next()); // результат работы функции next()в итераторе map по ключу (метд map.keys() возвращает итерируемый объект по ключам)

console.log(users.keys().next().value.firstName);


// Перебор Map

// for of (как для массивов - см. структуру map)
for (let keys of users) {
    console.log(keys); // выведет сами ключи map
    console.log(keys[0].firstName); // выведет значение свойства firstName в свойстве 0
    console.log(keys[0].age); // выведет значение свойства age в свойстве 0
    console.log(keys[1]); // выведет значение свойства 1 (з/п)
}

// перебор с деструктуризацией 
for (let [keys] of users) {
    console.log(keys['firstName']);
}

console.log('-');

// массив объектов cities
let cities = [{
        id: 13,
        name: 'Москва'
    },
    {
        id: 14,
        name: 'Питер'
    },
    {
        id: 15,
        name: 'Ростов'
    },
    {
        id: 16,
        name: 'Кижи'
    },
    {
        id: 17,
        name: 'Владик'
    }
];

// создаем новый map
let myCititesMap = new Map();

// пробегаем по массиву cities методом forEach по каждому элементу(item), где устанавливаем в map по ключу(свойству) элемент от id -> значение свойства имени
cities.forEach(item => {
    myCititesMap.set(item.id, item.name)
});

console.log(myCititesMap.get(17));


console.log('-------');

// Set - коллекция без ключей, где каждое значение может появляться только 1 раз

let mySet = new Set();

mySet.add(7);
mySet.add(8);
mySet.add(9);
mySet.add({
    user: 'So'
});
mySet.add({
    user: 'So'
});
mySet.add({
    user: 'So'
});
mySet.add('test string');

console.log(mySet);
console.log(mySet.size);
console.log(mySet.has(9));
console.log(mySet.has('test string'));

console.log('-');

// перебор forEach

mySet.forEach((value, valueAgain, mySet) => {
    console.log(value);
});