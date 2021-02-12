// library
let myLibrary = []
let libDisplay = document.getElementById("libDisplay");

// buttons 
let formButton = document.getElementById("formButton");
let closeButton = document.getElementById("close-btn");
let deleteButton = [];
let submitButton = document.getElementById("submit");
let readSwitch = [];

// variables for constructor
let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let pageNum = document.getElementById("pagesNumber")
let read = document.getElementById("read");
let index = 0;

// constructor function
function Book() {
    this.title = bookTitle.value;
    this.author = bookAuthor.value;
    this.pageNum = pageNum.value
    this.index = index++;
    // change innerHTML to read status
    if (read.checked === true) {
        this.read = "read";
    } else {
        this.read = "unread";
    }        
};

function addBookToLibrary () {
    console.log("addBookToLibrary Launched")
    newBook = new Book();
    myLibrary.push(newBook);
    createBook();
    // update read slider based on value
    if (read.checked == true) {
        checkReadBox(newBook);
    }
};

function createBook () {
    let newDiv;
    let button = document.createElement("button");
    button.innerHTML = "delete"

    // create read label 
    let label = document.createElement("label");
    label.setAttribute("class", "readSwitch")
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox")
    input.id = "readSwitch";
    let span = document.createElement("span");
    span.className = ("slider") // use class name to set 

    label.appendChild(input)
    label.appendChild(span)

    for (let i = 0; i < myLibrary.length; i++){
    // creates divs based off books in array
        newDiv = document.createElement("div");
        newDiv.className = "book";
        newDiv.id = "book" + (i)
        newDiv.innerHTML =  "<h1>" + myLibrary[i].title + "</h1>" + 
                            "<h2>" + myLibrary[i].author + "</h2>" +
                            "<h3>" + myLibrary[i].pageNum + "</h3>" +
                            "<h4>" + myLibrary[i].read + "</h3>" ;
        button.className = "delete-btn";
        button.id = i; // set id as digit to act as index for splicing
        input.id = i; // same as above for read button
        newDiv.appendChild(button)
        newDiv.appendChild(label)    
    };

    deleteButton.push(button) // push to array to iterate
    readSwitch.push(input); // push to array to iterate
    libDisplay.appendChild(newDiv); 
    console.log(libDisplay);  

    deleteButtonFunc();
}

function deleteButtonFunc() {
    deleteButton.forEach(deleteButton => {
        deleteButton.onclick = function () {
            this.parentNode.remove()
            myLibrary[this.id] = ""
            // myLibrary.splice(this.id, 1); // removes deleted div from the array (only works on first try)
        }
    })
}

function readSwitchFunc () {
    // sets listener to each slider
    readSwitch.forEach(readSwitch => { 
        readSwitch.addEventListener("change", changeFunc)
    })
    // func to change library properties
    function changeFunc () {
        console.log("clicked")
            console.log(this.id)
            if (myLibrary[this.id].read === "unread") {
                myLibrary[this.id].read = "read"; 
            } else if (myLibrary[this.id].read === "read" ) {
                myLibrary[this.id].read = "unread";    
            }     
    }
    // function to remove prior event listeners
    function removeClick() {
        readSwitch.forEach(readSwitch => { 
            readSwitch.removeEventListener("change", changeFunc);  
        })
    }
    // launch remove click
    closeButton.addEventListener("click", function () {
        removeClick();
    })
}

function checkReadBox () {

    console.log("checkreadbox");

    // need to add index to objects to iterate through

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read === "read") {
            readSwitch[i].checked = true;
        }
    }

    // check mylibrary 

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
    readSwitchFunc(); // all for read switch functionality on closing form
})

submitButton.addEventListener("click", function() {
    addBookToLibrary();
})



// need to add function that automaticaly sets the toggle button 
// depending on whether or not its been read

