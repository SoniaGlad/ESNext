console.clear();

// Lab 1

// создаем класс наследуемый класс Solid (небесные тела)
class Solid {
    // конструктор класса принимает 4 параметра: координату х, координату у, площадь и ресурсы
    constructor(x, y, square, resources = 0) {
        this.x = x;
        this.y = y;
        this.square = square;
        this.resources = resources;
    }

    // создаем метод для увеличения ресурсов небесных тел
    updateResources(delta) {
        this.resources += delta;
    }

    // создаем геттер для получения ресурсов объектов
    get getResources() {
        return this.resources;
    }
}

// создаем класс Asteroid, который наследует от класса Solid
class Asteroid extends Solid {
    updateResources() {
        // здесь пусто, т.к. мы в классе Asteroid не будем увеличивать ресурсы
    }
}

// создаем класс Planet, который наследует от класса Solid
class Planet extends Solid {
    // ВНИМАНИЕ! У класса Planet есть конструктор, который принимает 5 параметров: 4 как в классе-родителе + свой 5-й формы жизни в виде массива
    constructor(x, y, square, resources = 0, lifeForms = []) {
        super(x, y, square, resources); // вызываю супер для доступа к 4-м параметрам родительского класса ->

        // -> и только после super устанавливаю "местный" this
        this.lifeForms = lifeForms;
    }

    updateResources() {
        this.resources += 10; // увеличиваем ресурсы на 10
    }
}

// создаем класс Star, который наследует от класса Solid
class Star extends Solid {
    updateResources() {
        this.resources += 50; // увеличиваем ресурсы на 50
    }
}

// Создание класса "Фабрики небесных тел"
class SolidFactory {

    // создаем статический метод с 4-мя параметрами: тип небесного тела, коор. х, коор у, площадь, ресурсы, результатом работы которого будет создание нового небесного тела
    static get(type, x, y, square, resources) {
        // switch создает условия для создания типов небесных тел
        switch (type) {
            case 'Asteroid':
                return new Asteroid(x, y, square, resources);
            case 'Planet':
                return new Planet(x, y, square, resources, 'humans'); // + форма жизни
            case 'Star':
                return new Star(x, y, square, resources);
        }

    }
}

// создаем пустой массив для последующего заполнения его объектами небесных тел
let solids = [];
// создаем переменную rand, чтобы НЕ прописывать в ручную значения для 4-х параметров, а получать их рандомно в диапазоне чисел от 0 до 100
let rand = (n = 0, m = 100) => Math.round(Math.random() * (m - n) + n);

// заполняем массив объектами из Астероидов
for (let i = 0; i < 10; i++) {
    solids.push(SolidFactory.get('Asteroid', rand(), rand(), rand(), rand()));
}

// заполняем массив объектами из Планет
for (let i = 0; i < 5; i++) {
    solids.push(SolidFactory.get('Planet', rand(), rand(), rand(), rand()));
}

// заполняем массив объектами из Звезд
for (let i = 0; i < 2; i++) {
    solids.push(SolidFactory.get('Star', rand(), rand(), rand(), rand()));
} // ->

let planet = SolidFactory.get('Planet', 1, 3, 10, 20);
console.log(planet);
console.log(planet.x);
console.log(planet.resources);

// -> вывели массив объектов небесных тел
console.log(solids);

// считаем ресурсы объектов: метод reduce пробегается по массиву и подсчитывает нужные нам значения свойств объектов item.resources или (использовать метод геттер для нахождения ресурсов) item.getResources (т.к. это геттер, то вызываем без скобок)
console.log(solids.reduce((sum, item) => sum + item.resources, 0));

// увеличиваем ресурсы 
solids.forEach((item) => {
    item.updateResources();
});

// снова считаем ресурсы, но уже после увеличения
console.log(solids.reduce((sum, item) => sum + item.resources, 0));

// опять увеличиваем ресурсы 
solids.forEach((item) => {
    item.updateResources();
});

// и еще раз считаем ресурсы, но уже после 2-го увеличения
console.log(solids.reduce((sum, item) => sum + item.resources, 0));