'use strict';

console.clear();


// Наследование

// Создали класс дерево
class Tree {
    constructor(age) {
        this.age = age
    }
    // создали метод, возвращающий возраст дерева
    show() {
        console.log(`Дерево. Возраст: ${this.age}`);
    }
};

// создали класс ель, который наследует от класса дерево
class Spruce extends Tree {
    show() {
        console.log("Сосна");
        super.show(); // обратились к методу show() "основного" объекта
    }
};

let tree = new Tree(34); // новый объект дерево
tree.show(); // Дерево. Возраст: 34

let spruce = new Spruce(14); // новый объект ель
spruce.show(); // Дерево. Возраст: 14