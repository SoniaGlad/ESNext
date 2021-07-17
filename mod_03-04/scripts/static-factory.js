console.clear();


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

class BookFactory {
    // статический метод для создания новой книги
    static getBook(title, price) {
        return new Book(title, price);
    }

}

// вызываем статический метод getBook класса BookFactory с аргументами 'CSS' и 950 для параметров title и price соответственно и присваиваем его переменной book
let book = BookFactory.getBook('CSS', 950);
console.log(book); // вывели новую книгу book

book.setPrice = 1000; // присваиваем новое значение цены сеттеру (без вызова! как свойству!)
console.log(book.price); // получили значение цены 1000, установленное методом сеттер выше

console.log(book.getPrice);