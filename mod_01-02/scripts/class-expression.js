'use strict';

console.clear();

// Запись в виже функционального выражения: let User = class {} (по аналогии с функциями)

let User = class {
    // конструктор с 2-мя параметрами userName и userAge
    constructor({
        userName,
        userAge
    }) {
        this.userName = userName; // 1-му свойству userName (т.е. this.userName) присваивается значение параметра конструктора userName
        this.userAge = userAge; // 2-му свойству userAge (т.е. this.userAge) присваивается значение параметра конструктора userAge (имена одинаковые для удобства)
    }

    // метод, выводящий все свойства будущего объекта в консоль
    showProps() {
        for (let prop in this) {
            console.log(`Значение свойства ${prop} = ${this[prop]}`);
        }
    }
}

let user_1 = new User({
    userName: 'Sonia',
    userAge: 44
}); // создание нового объекта user_1 со свойствами userName: 'Sonia' и userAge: 44

console.log(user_1.userName); // вывожу имя нового объекта

user_1.showProps(); // вызываю метод класса showProps() -> на него указывает this на строках 19 и 20