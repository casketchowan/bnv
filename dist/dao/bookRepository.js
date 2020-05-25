"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooks = exports.updateBooks = exports.saveOneBook = exports.findAllBooks = void 0;
const book_1 = require("./model/book");
const index_1 = require("./index");
const bookDAO_1 = require("./bookDAO");
//data for functions
function findAllBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield index_1.pool.connect();
            const results = yield client.query("select * from books");
            let output = results.rows.map(bookDAO_1.BookArray);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.findAllBooks = findAllBooks;
function saveOneBook(input) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        let newBook = new book_1.Book(0, "", 0, "", "");
        try {
            client = yield index_1.pool.connect();
            const result = yield client.query("INSERT INTO books(booktitle, price, author, publisher) VALUES($1,$2,$3,$4) RETURNING id;", [input.booktitle, input.price, input.author, input.publisher]);
            let bookId = result.rows[0].id; // try console.log-ing result.rows to see why we access the id this way
            newBook = input;
            newBook.id = bookId;
            return newBook;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return newBook;
    });
}
exports.saveOneBook = saveOneBook;
function updateBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield index_1.pool.connect();
            const results = client.query("UPDATE books SET price = price / 2 WHERE id > 1;");
            const results2 = yield client.query("select * from books");
            let output = results2.rows.map(bookDAO_1.BookArray);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.updateBooks = updateBooks;
function deleteBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        try {
            client = yield index_1.pool.connect();
            const results = client.query("DELETE FROM books WHERE id NOT IN (1,2);");
            const results2 = yield client.query("select * from books");
            let output = results2.rows.map(bookDAO_1.BookArray);
            return output;
        }
        catch (err) {
            console.log(err);
        }
        finally {
            client && client.release();
        }
        return [];
    });
}
exports.deleteBooks = deleteBooks;
