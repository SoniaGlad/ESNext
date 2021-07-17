console.clear();

// Итераторы

// Lab 2 

// с функцией-итератором пробегающей по свойству ОБЪЕКТА в заданном диапазоне СЛОВ

let wordRange = {
    value: 'Ехал Грека через реку.',
}

// for..of сначала вызовет эту безымянную функцию ->
wordRange[Symbol.iterator] = function () {

    // -> которая возвращает объект, соответствующий нашему интерируемому объекту, т.е. возвращает объект итератора, после чего (!) for..of работает только с этим итератором, запрашивая у него новые значения

    return {
        // свойства объекта
        words: this.value.split(' '),
        current: 0,

        // метод next() вызывается на каждой итерации цикла for..of и возвращает значение в виде объекта {done:.., value :...} ->
        next() {
            // -> при условии, что текущее значение меньше последнего значения (диапазон), здесь последнее значение - это индекс последнего элемента массива words, отсюда число < words.length (длина = 4, последний индекс = 3)
            return (this.current < this.words.length) ? {
                value: this.words[this.current++],
                done: false
            } : {
                done: true
            };
        }
    };
};

for (let word of wordRange) {
    console.log(word);
}

console.log('-------');

// Lab 3

// Итератор промежуточных цветов в 10 шагов

let colorIterator = {
    from: '#ff8c8c',
    to: '#5758fb',
    step: 10
};

colorIterator[Symbol.iterator] = function () {

    return {
        redFrom: parseInt(this.from.slice(1, 3), 16), // получаем у строки #ff8c8c методом slice красный цвет ff и переводим его в 10-ю систему parseInt(str, 16) указв, что сейчас мы находимся в 16-тиричной
        redTo: parseInt(this.to.slice(1, 3), 16), // т.с. для позиции to

        greenFrom: parseInt(this.from.slice(3, 5), 16), // получаем зеленый from
        greenTo: parseInt(this.to.slice(3, 5), 16), // зеленый to

        // режем от 5-ти и до конца
        blueFrom: parseInt(this.from.slice(5), 16), // получаем голубой from
        blueTo: parseInt(this.to.slice(5), 16), // голубой to

        i: this.step, // кол-во шагов всего
        j: 0, // 1 шаг

        // rgb - это вариант с rgb как свойства
        /* r: 0,
        g: 0,
        b: 0, */

        next(r, g, b) { // это вариант с параметрами метода next()
            this.r = r;
            this.g = g;
            this.b = b;

            // rgb - это вариант с rgb как свойства
            /* this.r = Math.round(this.redFrom + this.j * (this.redTo - this.redFrom) / this.i);
            this.g = Math.round(this.greenFrom + this.j * (this.greenTo - this.greenFrom) / this.i);
            this.b = Math.round(this.blueFrom + this.j * (this.blueTo - this.blueFrom) / this.i); */

            // считаем по формуле чему равен цвет на текущем шаге
            r = Math.round(this.redFrom + this.j * (this.redTo - this.redFrom) / this.i);
            g = Math.round(this.greenFrom + this.j * (this.greenTo - this.greenFrom) / this.i);
            b = Math.round(this.blueFrom + this.j * (this.blueTo - this.blueFrom) / this.i);

            this.j++; // увеличиваем кол-во шагов при каждом запуске next()

            return (this.j <= this.i) ? {
                value: `rgb(${r}, ${g}, ${b})`,
                done: false
            } : {
                done: true
            };
        }
    }
};

for (let color of colorIterator) {
    console.log(color);

    let div = document.createElement('div');
    div.innerHTML = `<div>${color}</div>`;
    div.classList.add('color');
    div.style.backgroundColor = `${color}`;
    document.body.appendChild(div);
}