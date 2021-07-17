console.clear();

// Getter | Setter

class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    show() {
        for (let prop in this) {
            console.log(`${p}: ${this[prop]}`);
        }
    }

    // метод setter служит для последующей установки новой/любой цены книги
    set setPrice(newPrice) {
        this.price = newPrice;
    }

    // метод getter служит для получения цены книги
    get getPrice() {
        return this.price;
    }
}

// созадли новую книгу с агрументами 'JS'(для параметра title) и 1200(для параметра price)
let book = new Book('JS', 1200);

book.setPrice = 1000; // присваиваем новое значение цены сеттеру (без вызова! как свойству!)
console.log(book.price); // получили значение цены 1000, установленное методом сеттер выше

console.log(book.getPrice);