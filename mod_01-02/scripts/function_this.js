console.clear();

// У стрелочных функций нет своего this

let age = 20;

let user = {
    name: 'Jack',
    age: 27
}

/* function addYear() {
    this.age++; // this здесь работает толкьо с отключенным babel type="text/babel"
}
addYear(); // вызов функции
console.log(age, user.age); // 20, 27

addYear.call(user); // вызов функции относительно объекта user
console.log(age, user.age); // 20, 28 - посчитал age++ */


// тоже самое, но со стрелочной функцией

let addYearPlus = () => this.age++;
addYearPlus();
console.log(age, user.age); // 20, 27

addYearPlus.call(user);
console.log(age, user.age); // 20, 27 - НЕ посчитал age++, т.к. this в стрелочных функциях отсутствует