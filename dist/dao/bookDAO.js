"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookArray = exports.bookDAO = void 0;
const book_1 = require("./model/book");
class bookDAO {
    constructor(id, booktitle = " ", price = 0.00, author = " ", publisher = " ", year = 0, genre = " ", pages = 0, copies = 0, hardback = false) {
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
exports.bookDAO = bookDAO;
function BookArray(input) {
    const newBook = new book_1.Book(input.id, input.booktitle, input.price, input.author, input.publisher, input.year, input.genre, input.pages, input.copies, input.hardback);
    return newBook;
}
exports.BookArray = BookArray;
