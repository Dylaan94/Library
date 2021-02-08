let myLibrary = []
let libDisplay = document.getElementById("libDisplay");
let formButton = document.getElementById("formButton");
let closeButton = document.getElementById("close-btn");

let bookTitle = document.getElementById("bookTitle");
let submitButton = document.getElementById("submit");

let newbook;
let title;

let displayArray = []

function Book() {
    this.title = bookTitle.value;
    //this.read = 
    // constructor function
}

function addBookToLibrary () {
    console.log("addBookToLibrary Launched")
    newBook = new Book(bookTitle.value);
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
                newDiv.innerHTML = myLibrary[i].title;                
    }
    libDisplay.appendChild(newDiv); 

    console.log(libDisplay);


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