"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookArray = exports.bookDAO = void 0;
const book_1 = require("./model/book");
class bookDAO {
    constructor(id, booktitle = " ", price = 0.00, author = " ", publisher = " ") {
        this.id = id;
        this.booktitle = booktitle;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
    }
}
exports.bookDAO = bookDAO;
function BookArray(input) {
    const newBook = new book_1.Book(input.id, input.booktitle, input.price, input.author, input.publisher);
    return newBook;
}
exports.BookArray = BookArray;
