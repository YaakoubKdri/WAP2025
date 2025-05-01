"use strict";
let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
    ];
function addBook(title, author, ID){
    const exists = libraryBooks.some(book => book.title === title && book.author === author && book.ID === ID);
    if(! exists){
        const newBook = {title, author, ID};
        libraryBooks.push(newBook);
        return newBook;
    }
    return null;
}

function getTitles(){
    return libraryBooks.map(book => book.title).sort((a, b)=>a.localeCompare(b));
}

function findBooks(keyword){
    return libraryBooks.filter(book => book.title.toLowerCase().includes(keyword.toLowerCase())).sort((a, b)=>a.ID - b.ID);
}
 /** test */
 console.log(addBook("Les misérables", "Victor Hugo", 1234));
 console.log(addBook("The Road Ahead", "Bill Gates", 4268 ));
 console.log(getTitles());
 console.log(findBooks("road"));