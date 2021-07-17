console.clear();

let str = 'Ехал Грека через реку.';

console.log(str.indexOf('Грека')); // 5 - 5-ая позиция в строке

console.log(str.includes('Грека')); // true

console.log(str.startsWith(' ')); // начинается ли с пробела? false

let newStr = ' Всякая фигня)) '; // начинается и заканчивается пробелом
console.log(newStr);

if (newStr.startsWith(' ')) {
    newStr = newStr.trim(); // обрезать пробелы
}
console.log(newStr);

console.log(str.endsWith('реку.')); // заканчивается? true

console.log(newStr.repeat(3)); // повторить строку n-е кол-во раз (возвращается новая строка), при этом изначальная строка не меняется
console.log(newStr);

// пример практического применения на отрисовке html

let tableRows = '<tr></tr>';;
console.log(tableRows.repeat(4));

((d = 3) => console.log(arguments[0] - 1))(5);