import * as bookRepository from '../dao/bookRepository'
import { Book } from '../dao/model/book';

//Typically, you would put business logic inside of your service layer
// if you wanted to implement filtering or some complex functionality, this could be
// a place to do it
// services call on repositories
// controllers/routers call on services
export async function findAllBooks():Promise<Book[]>{
    return bookRepository.findAllBooks();
}

export async function saveOneBook(input:Book):Promise<Book>{
    return bookRepository.saveOneBook(input);
}
