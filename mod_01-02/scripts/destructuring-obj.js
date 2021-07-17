console.clear();

// объект user
let user = {
    name: 'Sonia',
    age: 44,
};

let user2 = {
    name: 'Riannah',
    age: 30,
};

let {
    name,
    age
} = user; // деструктурировали объект; ВАЖНО! переменные в деструктуризации должны по названию соответствовать ключам(свойствам) объекта
console.log(name, age);

let {
    name: firstName,
    age: someAge,
    salary = 1e6 // дефолтное значение для свойства, которого НЕТ в изначальном объекте (создали переменную и присвоили дефолтное значение)
} = user2; // если мы хотим поменять название переменых, то мы указываем свойство + псевдоним, который и будет новой переменной
console.log(firstName, someAge, salary); // вывели с новой переменной salary


let newName, newAge; // нельзя сначала объявить переменные для деструктуризации, а потом деструкторировать
// {name: newName, age: newAge} = user; // ошибка
({
    name: newName,
    age: newAge
} = user); // но, если мы заключим выражение в безымянную функцию, то код отработает; ВНИМАНИЕ! это плохая практика
console.log(newName, newAge);

// деструктуризация объекта с объектными свойствами ("вложенные" объекты)
let prog = {
    name: 'Вася',
    age: 31,
    machine: {
        power: 1200
    }
};

let {
    name: progName,
    age: progAge,
    machine: {
        power
    }
} = prog;
console.log(progName, progAge, power);