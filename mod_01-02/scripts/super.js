console.clear();

// ВНИМАНИЕ! super НЕ работает со стрелочными функциями

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

let prog = {
    __proto__: user, // __proto__ ссылается на объект user (!!! устаревшее свойство !!!)
    getPropNameProg() {
        return super.getPropName; // возвращаем супер-объект, т.е. передаем метод геттер из объекта user в объект prog
    }
}

console.log(user); // объект user

console.log(prog); // объект prog с методом getPropNameProg(), который возвращает геттер объекта user

console.log(prog.getPropNameProg()); // метод getPropNameProg() объекта prog получает значение свойства userName объекта user