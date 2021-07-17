console.clear();

// Object.assign() - объединение свойств из разных объектов в один объект. Метод добавляет/объединяет/клонирует в 1-й указанный параметр все остальные указанные параметры. 

// 1. ОБЪЕДИНЕНИЕ - Объединение нескольких объектов в один с разными свойствами.

let obj_1 = {
    something: 111,
    prop: 'some property'
};

let obj_2 = {
    number: 44,
    string: `I'm a string`
};

let objUnited_1 = Object.assign(obj_1, obj_2);
console.log(objUnited_1);


// 2. ПЕРЕЗАПИСЬ - Объединение нескольких объектов в один с одинаковыми свойствами

// ВНИМАНИЕ! Если принимающий объект уже имеет свойство с таким же именем, то оно будет перезаписано.

let obj_3 = {
    number: 13,
    string: 'some string'
};

let obj_4 = {
    number: 37,
    string: 'another string'
};

let objUnited_2 = Object.assign(obj_3, obj_4);
console.log(objUnited_2);


// 3. КЛОНИРОВАНИЕ - Объединение нескольких объектов в один пустой объект

// Мы также можем использовать Object.assign для замены for..in на простое клонирование.

let user = {
    name: "Иван",
    age: 30
};

let clone = Object.assign({}, user); // принимающий объект пустой, а копируемый user, т.е. создали новый объект clone со всеми свойствами user, при этом объект user НЕ изменился
console.log(clone);


// ВАЖНО! Если поменять значение свойства исходного объекта, то значение в новом объекте, куда скопировали/объединили и т.п. тоже поменяется!


let obj_5 = {
    mood: 'positive',
};

let obj_6 = {
    humor: `100%`,
};

let objUnited_3 = Object.assign(obj_5, obj_6);

obj_5.mood = 'awesome';

console.log(objUnited_3);


// ВАЖНО! Метод работает с верхним уровнем объекта. Если внутри в свойствах объекта есть еще объекты, то даже при указанном пустом объекте, свойство вложенных объектов будет меняться.

let user_2 = {
    name: 'Wanted Man',
    // значение свойства - объект
    arms: {
        blade: 'sword',
        poison: 'belladonna'
    }
};

let clone_2 = Object.assign({}, user_2);
user_2.arms.blade = 'rapier'; // поменяли значение свойства вложенного объекта ->

console.log(clone_2); // -> измененное вложенное свойство также попало в новый объект