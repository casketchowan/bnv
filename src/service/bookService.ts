import * as bookRepository from '../dao/bookRepository'
import { Book } from '../dao/model/book';

//Business logic for book functions

export async function findAllBooks():Promise<Book[]>{
    return bookRepository.findAllBooks();
}

export async function saveOneBook(input:Book):Promise<Book>{
    return bookRepository.saveOneBook(input);
}

export async function updateBook(input:Book):Promise<Book>{
	return bookRepository.updateBook(input);
}