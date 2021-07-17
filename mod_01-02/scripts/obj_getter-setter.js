console.clear();

// Свойства-аксессоры (accessor properties). По своей сути это функции, которые используются для присвоения и получения значения, но во внешнем коде они выглядят как обычные свойства объекта.

// Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – для записи.

// Геттер срабатывает, когда obj.propName читается, сеттер – когда значение присваивается.

let user = {
    userName: 'Loki',
    userStatus: 'God of Mischief',

    set setPropName(n) {
        this.userName = n;
    },
    get getPropName() {
        return this.userName;
    }
}

user.setPropName = 'Loki of Asgard'; // в метод set записали новое значение свойства userName

console.log(user); // объект получил новое, установленное сеттером, значением свойства userName
console.log(user.getPropName); // получаем значение свойства userName посредством метода геттер