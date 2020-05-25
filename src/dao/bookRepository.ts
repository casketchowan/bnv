import { Book } from "./model/book";
import {pool} from './index'
import { BookArray } from "./bookDAO";

//data for functions

export async function findAllBooks():Promise<Book[]>{
    let client;
    try{
        client = await pool.connect();
        const results = await client.query("select * from books");
        let output = results.rows.map(BookArray);
        return output;
    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return [];
}
export async function saveOneBook(input:Book):Promise<Book>{
    let client;
    let newBook = new Book(0,"",0,"","");
    try{
        client = await pool.connect();
        const result = await client.query("INSERT INTO books(booktitle, price, author, publisher) VALUES($1,$2,$3,$4) RETURNING id;",
        [input.booktitle,input.price,input.author,input.publisher]);
        let bookId = result.rows[0].id; // try console.log-ing result.rows to see why we access the id this way
        newBook = input;
        newBook.id = bookId;
        return newBook;
    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return newBook;
}

export async function updateBooks():Promise<Book[]>{
    let client;
    try{
        client = await pool.connect();
        const results = client.query("UPDATE books SET price = price / 2 WHERE id > 1;");
        const results2 = await client.query("select * from books");
        let output = results2.rows.map(BookArray);
        return output;
    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return [];
}

export async function deleteBooks():Promise<Book[]>{
    let client;
    try{
        client = await pool.connect();
        const results = client.query("DELETE FROM books WHERE id NOT IN (1,2);");
        const results2 = await client.query("select * from books");
        let output = results2.rows.map(BookArray);
        return output;
    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return [];
}