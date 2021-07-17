'use strict';

console.clear();

// Lab 4

let date = new Date(); // текущее время

// у генератора 3 параметра: млс, интервал в мин., шаги
function* genTimeIntervals(date, interval, steps) {
    let timestamp = date.getTime(); // получили млс от 1970 до наст.вр.

    // циклом пробегаем от текущего момента помиллисекундно 10 шагов 
    for (let i = 0; i < steps; i++) {
        // возвращаем на каждой итерации новую дату от текущей(timestamp) с учетом интервала в минутах(interval * 60 * 1000 * i) - интервал перевели в минуты(interval * 60 * 1000) и умножили на кол-во i
        yield(new Date(timestamp + interval * 60 * 1000 * i)).toLocaleTimeString();
    }
}

let interatorTimeIntervals = genTimeIntervals(date, 30, 10);

for (let timeStep of interatorTimeIntervals) {
    console.log(timeStep);
}

console.log('-');

// Lab 4

// чуть иной формат задачи - start в генераторе увеичивается на step и каждый новый проход запускается с этого числа + 1 - я так поняла условие задачи))
function sequence(start, step) {

    return function* () {

        while (start) {
            yield start;
            start += step;
            start++;
        }

    }
}

let gen = sequence(12, 3);
let iterator = gen();

for (let j = 0; j < 5; j++) {
    console.log(iterator.next());
}