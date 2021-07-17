console.clear();

let d = [45, 78, 10, 3];
d[7] = 100;

// В стрелочных функциях arguments НЕ определен
/* let arrSum = (arr) => {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (arr[i]) {
            sum += arr[i];
        }
    }

    return sum;
}
console.log(arrSum(...d)); // ошибка - arguments НЕ определен */

// добавили spred, тогда все работает
let arrSum = (...arguments) => {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            sum += arguments[i];
        }
    }

    return sum;
}
console.log(arrSum(...d)); // ошибка - arguments НЕ определен