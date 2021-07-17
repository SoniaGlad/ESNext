console.clear();

// короткая запись и вычисляемые свойства объектов

let name = 'Riana';
let age = 29;

let user = {
    name, // значение берется из внешней переменной userName
    age, // значение берется из внешней переменной userAge
    ['last' + 'Name']: 'J' // вычисляемые свойства: получится св-во lastName
}

console.log(user);