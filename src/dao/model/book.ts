export class Book{
    id: number;
    booktitle:string;
    price:number;
    author:string;
    publisher:string;
    constructor(id:number=0,booktitle:string = " ", price:number = 0.00, author:string = " ", publisher:string = " ") {
        this.id = id;
        this.booktitle = booktitle;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
    }
    
}