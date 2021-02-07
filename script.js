let myLibrary = ["harry potter", " lord of the rings", " 1984", ""]
let libDisplay = document.getElementById("libDisplay");
let formButton = document.getElementById("formButton");
let closeButton = document.getElementById("close-btn");

function Book() {
    // constructor function
}

function addBookToLibrary () {
    for (let i = 0; i < myLibrary.length; i++){
        // creates divs based off books in array
        let newDiv = document.createElement("div");
        newDiv.className = "book";
        newDiv.id = "book" + (i+1)
        libDisplay.appendChild(newDiv);
    }
    console.log(libDisplay);
}


addBookToLibrary();


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


// things to do

// add input fields to the form so that when theyve been typed in and its closed,
// the details are added to the array