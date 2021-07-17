'use strict';

console.clear();

// Статические свойства классов

class Student {
    static fullName = 'Sofya Gladkikh';
}

console.log(Student.fullName); // Sofya Gladkikh


// Статические методы классов

class MyPythagoras {
    // устанавливаем статический метод нахождения гипотенузы
    static hypotenuse(a, b) {
        return Math.pow(a * a + b * b, 1 / 2); // результат работы метода
    }
}

console.log(MyPythagoras.hypotenuse(3, 4)); // вызываю статический метод с аргументами


// "Прослойка" между классом и созданием нового объекта в виде статического метода

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class UserStatic {
    static createUser() {
        return new User('S', 'G'); // статический метод возвращает создание нового объекта с уже предустановленными аргументами ("константный" вариант)
    }

    static createAnotherUser(firstName, lastName) {
        return new User(firstName, lastName); // статический метод возвращает создание еще одного нового объекта с параметрами
    }
}
let sg = UserStatic.createUser(); // присвоили переменной sg результат работы статического метода createUser()
console.log(sg.firstName, sg.lastName);

let aa = UserStatic.createAnotherUser('A', 'A'); // присвоили переменной aa результат работы статического метода createAnotherUser() с аргументами здесь в вызове
console.log(aa.firstName, aa.lastName);

console.log(sg); // сам объект sg
console.log(aa); // сам объект aa


// Еще пример

class User_2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static createSomeUser() {
        return new User('A', 'A'); // статический метод возвращает создание еще одного нового объекта с аргументами
    }

    static region(whereabouts) {
        return whereabouts;
    }
}

let from = User_2.region('New-York');
console.log(from);