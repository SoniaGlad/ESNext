'use strict';

console.clear();

// Класс сам по себе может быть дефолтным значением в параметре функции

// Параметру className функции getObjByClass присвоено дефолтное значение в виде класса (Class Expression -> className = class {})
function getObjByClass(className = class {
    // конструктор с параметром name
    constructor(name) {
        this.name = name;
    }
    // метод класса, возвращающий значение свойства name 
    getName() {
        return this.name;
    }
}) {

    // сама же функция getObjByClass возвращает создание нового объекта className с аргументом 'So'; новый класс присвоен переменной myName
    let myName = new className('So');
    return myName;
}

console.log(getObjByClass().getName());