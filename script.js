let myLibrary = []
let libDisplay = document.getElementById("libDisplay");
let formButton = document.getElementById("formButton");
let closeButton = document.getElementById("close-btn");


// variables for constructor
let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let pageNum = document.getElementById("pagesNumber")


let submitButton = document.getElementById("submit");

let newbook;
let title;

// constructor function
function Book() {
    this.title = bookTitle.value;
    this.author = bookAuthor.value;
    this.pageNum = pageNum.value
}

function addBookToLibrary () {
    console.log("addBookToLibrary Launched")
    newBook = new Book();
    myLibrary.push(newBook);
    createBook();
}

function createBook () {
    let newDiv;
    for (let i = 0; i < myLibrary.length; i++){
        // creates divs based off books in array
                newDiv = document.createElement("div");
                newDiv.className = "book";
                newDiv.id = "book" + (i+1)
                newDiv.innerHTML =  "<h1>" + myLibrary[i].title + "</h1>" + 
                                    "<h2>" + myLibrary[i].author + "</h2>" +
                                    "<h3>" + myLibrary[i].pageNum + "</h3>";
    }
    libDisplay.appendChild(newDiv); 

    console.log(libDisplay);
}

function styleBooks () {
    for (let i = 0; i < myLibrary.length; i++){
        
    }
}

// form toggle controls

function toggleForm() {
    document.getElementById("popupForm").classList.toggle("active");
}

formButton.addEventListener("click", function() {
    toggleForm();
})

closeButton.addEventListener("click", function () {
    toggleForm();
})

submitButton.addEventListener("click", function() {
    addBookToLibrary();
})




// things to do

// add input fields to the form so that when theyve been typed in and its closed,
// the details are added to the array