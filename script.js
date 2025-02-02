/*var over = document.querySelector(".overley")

var pop= document.querySelector(".popup")

add.addEventListener("click",function()

{over.style.display="block"

    pop.style.display="block"

})



box5.addEventListener("click",function(event)

{event.preventDefault()

    over.style.display="none"

    pop.style.display="none"

})





var con = document.querySelector(".container")

box4.addEventListener("click",function(event){

    event.preventDefault()

    var div = document.createElement("div")

    div.setAttribute("class","bookcontainer")

    div.innerHTML=`<h2>${box1.value}</h2>

    <h5>${box2.value}</h5>

    <P>${box3.value}</P>

    <button onclick="erase(event)">Delete</button>`

    con.append(div)

    over.style.display="none"

    pop.style.display="none"

})



function erase(event)

{event.target.parentElement.remove()}*/

// Overlay & Popup Box Elements
var over = document.querySelector(".overley");
var pop = document.querySelector(".popup");
var add = document.getElementById("add");
var box5 = document.getElementById("box5");
var box4 = document.getElementById("box4");

// Container to Hold Books
var con = document.querySelector(".container");

// Page Load ஆனதும் Local Storage Data Load செய்ய
window.onload = function () {
    displaySavedBooks();
};

// Add Button Click - Popup Show
add.addEventListener("click", function () {
    over.style.display = "block";
    pop.style.display = "block";
});

// Cancel Button Click - Popup Hide
box5.addEventListener("click", function (event) {
    event.preventDefault();
    over.style.display = "none";
    pop.style.display = "none";
});

// Add Book & Save to Local Storage
box4.addEventListener("click", function (event) {
    event.preventDefault();

    var author = document.getElementById("box1").value;
    var title = document.getElementById("box2").value;
    var content = document.getElementById("box3").value;

    if (author.trim() === "" || title.trim() === "" || content.trim() === "") {
        alert("Please fill all fields before adding!");
        return;
    }

    var newBook = {
        author: author,
        title: title,
        content: content
    };

    // Retrieve Books from Local Storage or Initialize Empty Array
    var books = JSON.parse(localStorage.getItem("books")) || [];

    // Add New Book to Array
    books.push(newBook);

    // Save Updated Books Array to Local Storage
    localStorage.setItem("books", JSON.stringify(books));

    // Display Updated Books List
    displaySavedBooks();

    // Hide Popup
    over.style.display = "none";
    pop.style.display = "none";
});

// Function to Display Saved Books from Local Storage
function displaySavedBooks() {
    con.innerHTML = ""; // Clear Existing Books

    var books = JSON.parse(localStorage.getItem("books")) || [];

    books.forEach((book, index) => {
        var div = document.createElement("div");
        div.setAttribute("class", "bookcontainer");

        div.innerHTML = `
            <h2>${book.author}</h2>
            <h5>${book.title}</h5>
            <p>${book.content}</p>
            <button onclick="deleteBook(${index})">Delete</button>
        `;

        con.appendChild(div);
    });
}

// Function to Delete a Book from Local Storage
function deleteBook(index) {
    var books = JSON.parse(localStorage.getItem("books")) || [];

   books.splice(index, 1); // Remove Selected Book

    localStorage.setItem("books", JSON.stringify(books)); // Update Storage

    displaySavedBooks(); // Refresh Display
            }

// When page loads, display books from Local Storage
