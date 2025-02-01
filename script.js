// பக்கத்தை ஏற்றும் போது (onload), Local Storage-ல் உள்ள பதிவுகளை (content) காட்டும்
window.onload = function() {
    displayContent();
};

// பதிவுகளை (content) Local Storage-ல் சேமிக்கும்
function saveContent() {
    const content = document.getElementById('userContent').value;
    if (content.trim() !== "") {
        localStorage.setItem('userContent', content);
        alert('Your content has been saved!');
    } else {
        alert('Please write something before saving.');
    }
}

// Local Storage-ல் உள்ள பதிவுகளை (content) காட்டும்
function displayContent() {
    const savedContent = localStorage.getItem('userContent');
    if (savedContent) {
        document.getElementById('userContent').value = savedContent;
    }
}

// பதிவுகளை (content) அழிக்கும்
function clearContent() {
    const confirmation = confirm('Are you sure you want to delete your content?');
    if (confirmation) {
        localStorage.removeItem('userContent');
        document.getElementById('userContent').value = '';
        alert('Your content has been deleted.');
    }
}var over = document.querySelector(".overley")
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
{event.target.parentElement.remove()}


// பக்கத்தை ஏற்றும் போது (onload), Local Storage-ல் உள்ள பதிவுகளை (content) காட்டும்
window.onload = function() {
    displayContent();
};

// பதிவுகளை (content) Local Storage-ல் சேமிக்கும்
function saveContent() {
    const content = document.getElementById('div').value;
    if (content.trim() !== "") {
        localStorage.setItem('userContent', div);
        alert('Your content has been saved!');
    } else {
        alert('Please write something before saving.');
    }
}

// Local Storage-ல் உள்ள பதிவுகளை (content) காட்டும்
function displayContent() {
    const savedContent = localStorage.getItem('userContent');
    if (savedContent) {
        document.getElementById('div').value = savedContent;
    }
}

// பதிவுகளை (content) அழிக்கும்
function clearContent() {
    const confirmation = confirm('Are you sure you want to delete your content?');
    if (confirmation) {
        localStorage.removeItem('userContent');
        document.getElementById('userContent').value = '';
        alert('Your content has been deleted.');
    }
}

