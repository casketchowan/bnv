"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.bookRouter = void 0;
const express_1 = require("express");
const bookService = __importStar(require("../service/bookService"));
const book_1 = require("../dao/model/book");
exports.bookRouter = express_1.Router();
exports.bookRouter.get('/book', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(yield bookService.findAllBooks());
    }
    catch (e) {
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message);
    }
}));
exports.bookRouter.post('/book', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // the line below is getting information from the body of the request via destructuring
    let { booktitle, price, author, publisher } = req.body; //try outputting req.body to the console to see what it looks like
    try {
        let book = yield bookService.saveOneBook(new book_1.Book(0, booktitle, price, author, publisher));
        // upon successful creation, send back a 201 (created)
        res.status(201).json(book);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
}));
