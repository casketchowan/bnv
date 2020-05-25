"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id = 0, booktitle = " ", price = 0.00, author = " ", publisher = " ", year = 0, genre = " ", pages = 0, copies = 0, hardback = false) {
        this.id = id;
        this.booktitle = booktitle;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
        this.pages = pages;
        this.copies = copies;
        this.hardback = hardback;
    }
}
exports.Book = Book;
