const myLibrary = [];

let $titleInput = document.querySelector("#title");
let $authorInput = document.querySelector("#author");
let $pagesInput = document.querySelector("#pages");
let $isRead = document.querySelector("#isRead"); 
let addBook = document.querySelector("#addBook");

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    // do stuff here
    let title = $titleInput.value;
    let author = $authorInput.value;
    let pages = $pagesInput.value;
    let isRead = getReadValue();
    let newBook = new Book()
    myLibrary.push(newBook);
}