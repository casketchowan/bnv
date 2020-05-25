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
            client = yield index_1.pool2.connect();
            const results = yield client.query("SELECT * FROM books2 JOIN tags2 USING(id)");
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
        let newBook = new book_1.Book(0, "", 0, "", "", 0, "", 0, 0, false);
        try {
            client = yield index_1.pool2.connect();
            const result = yield client.query("INSERT INTO books2(booktitle, price, author, publisher, year, genre, pages, copies, hardback) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id;", [input.booktitle, input.price, input.author, input.publisher, input.year, input.genre, input.pages, input.copies, input.hardback]);
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
            client = yield index_1.pool2.connect();
            const results = client.query("UPDATE books2 SET price = price / 2 WHERE id > 1;");
            const results2 = yield client.query("SELECT * FROM books2 JOIN tags2 USING(id)");
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
            client = yield index_1.pool2.connect();
            const results = client.query("DELETE FROM books WHERE id NOT IN (1,2);");
            const results2 = yield client.query("SELECT * FROM books2 JOIN tags2 USING(id)");
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
