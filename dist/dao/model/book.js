"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id = 0, booktitle = " ", price = 0.00, author = " ", publisher = " ") {
        this.id = id;
        this.booktitle = booktitle;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
    }
}
exports.Book = Book;
