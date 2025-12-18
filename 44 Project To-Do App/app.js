const input = document.querySelector(".input");
const addtask = document.querySelector(".addtask");
const next = document.querySelector(".next");
const newbtn = document.querySelector(".newbtn");

addtask.addEventListener("click", ()=>{
    let todo = input.value;
    if(todo == ""){
        alert("Enter the task");
    }
    else{
        let newbox = document.createElement("div");
        newbox.innerHTML = `<div class="task">
            <div class="output">
                <p class="text">${todo}</p>
                <button class="newbtn" onClick = "removetodo(this)">Remove</button>
            </div>`
        next.appendChild(newbox);
        input.value = "";
    }
})

function removetodo(element){
    element.parentNode.remove();
}

