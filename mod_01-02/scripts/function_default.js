console.clear();

// Дефолтные значения параметров

function bmi(weight, height) {
    return weight / Math.pow(height, 2);
}
console.log(bmi()); // NaN - мы не можем вызвать функцию с пустыми параметрами и получить расчеты


function bmi_2(weight = 55, height = 1.71) { // присвоили дефолтные значения прараметрам функции
    return Math.round(weight / Math.pow(height, 2));
}
console.log(bmi_2()); // вызвали функцию с пустыми параметрами и получили расчеты, взятые из дефолтных значений
console.log(bmi_2(53)); // вызвали функцию с аргументом первого параметра и пустым 2-м параметром и получили расчеты: 1. значение 53, 2. дефолтное значение


// Дефолтные значения параметров в виде сложных выражений

function showTime(timestamp = (new Date).getTime()) { // дефолтное значение в виде объекта Date
    return (new Date(timestamp)).toLocaleTimeString();
}
console.log(showTime()); // вызвали функцию с пустыми параметрами и получили дату из дефолтных значений
console.log(showTime(4769403857674976)); // вызвали функцию с параметром (миллисекунды)