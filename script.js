const myLibrary = [new Book("Game of Thrones", "George RR. Martin", "100", true)];

const $titleInput = document.querySelector("#title");
const $authorInput = document.querySelector("#author");
const $pagesInput = document.querySelector("#pages");
const $isRead = document.querySelector("#isRead"); 
const $addBook = document.querySelector("#addBook");
const $table = document.querySelector("#bookTableBody")

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    let title = $titleInput.value;
    let author = $authorInput.value;
    let pages = $pagesInput.value;
    let isRead = $isRead.checked;
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooks();
}

function displayReadValue(isRead) {
    if (isRead == true) {
        return "Read";
    } else {
        return "Haven't Read";
    }
}

function clearTable() {
    $table.innerHTML = ""
}

function displayBooks() {
    clearTable();
    for(let i = 0; i< myLibrary.length; i++) {
        const htmlBook =`
        <tr>
            <td>${myLibrary[i].title}</td>
            <td>${myLibrary[i].author}</td>
            <td>${myLibrary[i].pages}</td>
            <td><button class="statusButton" data-index="${i}">${displayReadValue(myLibrary[i].isRead)}</button></td>
            <td><button class="deleteButton" data-index="${i}">Delete</button></td>
        </tr>`;
        $table.innerHTML += htmlBook;
    }

    addStatusButtonListeners();
    addDeleteButtonListeners();
}

function addStatusButtonListeners() {
    const statusButtons = document.querySelectorAll(".statusButton");
    for (const statusButton of statusButtons) {
        statusButton.addEventListener("click", function() {
            const index = this.getAttribute('data-index');
            toggleReadStatus(index);
            displayBooks();
        });
    }
}

function toggleReadStatus(index) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
}

function addDeleteButtonListeners() {
    const deleteButtons = document.querySelectorAll(".deleteButton");
    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", function() {
            const index = this.getAttribute('data-index');
            myLibrary.splice(index, 1);
            displayBooks();
        });
    }
}

$addBook.addEventListener("click", addBookToLibrary);
displayBooks();