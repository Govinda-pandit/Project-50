const container = document.querySelectorAll(".box");
// console.log(container);

function backer(){
    container.forEach(e =>{
        e.classList.remove("active");
    })
}

container.forEach(e => {
    console.log(e);
    e.addEventListener("click", ()=>{
        backer();
        e.classList.add("active");
    })
    
});