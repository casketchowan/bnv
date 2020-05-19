import { Book } from "./model/book";

export class bookDAO{

    id:number
    booktitle:string;
    price:number;
    author:string;
    publisher:string;
    constructor(id:number,booktitle:string = " ", price:number = 0.00, author:string = " ", publisher:string = " ") {
        this.id = id;
        this.booktitle = booktitle;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
    }
}

export function BookArray(input:bookDAO):Book{
    const newBook = new Book(input.id,input.booktitle,input.price,input.author,input.publisher);
    return newBook;
}
