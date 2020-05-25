import { Book } from "./model/book";
import {pool, pool2} from './index'
import { BookArray } from "./bookDAO";

//data for functions

export async function findAllBooks():Promise<Book[]>{
    let client;
    try{
        client = await pool2.connect();
        const results = await client.query("SELECT * FROM books2 JOIN tags2 USING(id)");
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
    let newBook = new Book(0,"",0,"","",0,"",0,0,false);
    try{
        client = await pool2.connect();
        const result = await client.query("INSERT INTO books2(booktitle, price, author, publisher, year, genre, pages, copies, hardback) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id;",
        [input.booktitle,input.price,input.author,input.publisher,input.year,input.genre,input.pages,input.copies,input.hardback]);
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
        client = await pool2.connect();
        const results = client.query("UPDATE books2 SET price = price / 2 WHERE id > 1;");
        const results2 = await client.query("SELECT * FROM books2 JOIN tags2 USING(id)");
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
        client = await pool2.connect();
        const results = client.query("DELETE FROM books WHERE id NOT IN (1,2);");
        const results2 = await client.query("SELECT * FROM books2 JOIN tags2 USING(id)");
        let output = results2.rows.map(BookArray);
        return output;
    }catch(err){
        console.log(err);
    }finally{
        client && client.release();
    }
    return [];
}