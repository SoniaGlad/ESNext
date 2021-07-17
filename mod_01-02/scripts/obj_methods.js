console.clear();

let someObj = {
    firstProp: 'first',
    nextProp: 'next',
    // метод объекта можно записать сразу со скобками, без ":" и слова function
    method() {
        return 'New view of the method';
    }
};
console.log(someObj.method());

let someOtherMethod = someObj.method; // присвоили переменной метод из объекта 
console.log(someOtherMethod()); // вызвали его уже в виде новой переменной 