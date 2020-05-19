import {Router} from 'express';
import * as bookService from '../service/bookService'
import { Book } from '../dao/model/book';


export const bookRouter = Router();


bookRouter.get('/', async (req,res)=>{
    try{
        res.json(await bookService.findAllBooks());
    }catch(e){
        // if something goes wrong, send back a 500 error and the error message
        res.status(500).send(e.message)
    }
})



bookRouter.post('/book', async (req,res)=>{
    // the line below is getting information from the body of the request via destructuring
    let {booktitle,price,author,publisher}:{booktitle:string,price:number,author:string,publisher:string} = req.body //try outputting req.body to the console to see what it looks like
    try{        
        let book: Book = await bookService.saveOneBook(new Book(0,booktitle,price,author,publisher))
        // upon successful creation, send back a 201 (created)
        res.status(201).json(book);
    }catch(e){
        res.status(500).send(e.message)
    }
})
