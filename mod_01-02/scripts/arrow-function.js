console.clear();

// обычный формат
function bmi(weight = 53, height = 1.71) {
    return weight / Math.pow(height, 2);
}
console.log(bmi());

// стрелочный формат той же функции
let bmiArrow = (weight, height) => weight / Math.pow(height, 2);
console.log(bmi(53, 1.71));

// ВНИМАНИЕ! Если есть {}, тогда return обязателен
let mortgage = (S, p, n) => {
    p /= 1200 // % ставка по кредиту в месяц (кол-во лет / 12 мес. / 100%)
    n *= 12; // кол-во месяцев кредитного срока

    let A = S * p / (1 - Math.pow((1 + p), (-n))); // платеж в месяц (аннуитет)

    return Math.round(A);

};
console.log(mortgage(3e6, 10, 7));


// 

let names = [{
        name: "Яна",
        age: 23
    },
    {
        name: "Коля",
        age: 29
    },
    {
        name: "Аня",
        age: 25
    },
]

// стрелочная функция в одну строчку в callback
names.sort((a, b) => (a.name < b.name) ? -1 : (a.name == b.name) ? 0 : 1);
console.log(names);

// стрелочная функция без аргументов требует скобок ()

let foo = () => names[0].name; // Аня
console.log(foo());

// стрелочная функция с 1-м аргументом НЕ требует скобок (), но их иногда ставят для лучшей читабельности

let newFoo = n => n + 4; // Аня
console.log(newFoo(3));