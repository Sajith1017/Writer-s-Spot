var over = document.querySelector(".overley")
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
    localStorage.setItem(div);
})

function erase(event)
{event.target.parentElement.remove()}

