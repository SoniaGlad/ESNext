console.clear();

// Lab 1

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

names.sort((a, b) => {
    return (a.name < b.name) ? -1 : (a.name == b.name) ? 0 : 1;
});
console.log(names);

console.log('-------');


// Lab 2 

function strSearch(substring, string) {
    let objStr = {
        str: substring,
        num: string.split(substring).length - 1
    }

    // console.log(string.length); // длина строки string 
    // console.log(string.split(substring)); // разрезали на массив с вырезанной подстрокой substring  - 4 элемента массива (длина), значит 3 вырезанных куска(подстроки); ВНИМАНИЕ! если бы еще одно "ре" стояло бы в конце, то мы получили бы 5 элементов, из которых последнее "ре" - это пустая строка, соответственно, всего 4 "ре"
    // console.log(string.split(substring).length - 1) // уменьшаем длину на 1, чтобы получить кол-во "ре" (искомой подстроки) 

    return objStr;
}

// есть деструктурирующее присваивание объекта
let {
    str,
    num
} = strSearch("ре", "Ехал Грека через реку"); // присвоили результат работы функции strSearch, т.е. объект со свойствами подстрока и кол-во подстроки в строке

console.log(str, num);