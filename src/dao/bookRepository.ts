import { Book } from "./model/book";
import {pool} from './index'
import { BookArray } from "./bookDAO";

export async function findAllBooks():Promise<Book[]>{
    let client;
    try{
        client = await pool.connect();
        const results = await client.query("select * from books");
        // console.table(results.rows);
        // console.log(results.rows);
        let output = results.rows.map(BookArray);
        // console.log(output);
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
        //insert paper into table and retrieve the generated id (optional)
        const result = await client.query("INSERT INTO books(booktitle, price, author, publisher) VALUES($1,$2,$3,$4) RETURNING id;",
        [input.booktitle,input.price,input.author,input.publisher]);
        let bookId = result.rows[0].id; // try console.log-ing result.rows to see why we access the id this way
        // console.table(result.rows);
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