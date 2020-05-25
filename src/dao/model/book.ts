export class Book{
    id: number;
    booktitle:string;
    price:number;
    author:string;
    publisher:string;
    year: number;
    genre: string;
    pages: number;
    copies: number;
    hardback: boolean;
    constructor(id:number=0,booktitle:string = " ", price:number = 0.00, author:string = " ", publisher:string = " ", year:number = 0, genre:string = " ", pages:number = 0, copies:number = 0, hardback:boolean = false) {
        this.id = id;
        this.booktitle = booktitle;
        this.price = price;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
        this.pages = pages;
        this.copies = copies;
        this.hardback = hardback;
    }
    
}