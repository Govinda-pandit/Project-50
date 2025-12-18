const box = document.querySelectorAll(".box");
const img = document.querySelector(".img");

img.addEventListener('dragstart', ()=>{
    dragstart()
})
img.addEventListener("dragend", ()=>{
    dragend()
})

for(let boxes of box){
    boxes.addEventListener("dragenter",dragenter)
    boxes.addEventListener("dragover", dragover)
    boxes.addEventListener("dragleave",dragleave)
    boxes.addEventListener("drop", dragdrop)
    

}
function dragstart(){
    console.log("dragstart");
}

function dragend(){
    console.log("dragend");
}

//dragleave
function dragleave(){
    console.log("dragleave");
    
    this.classList.remove("hold")
}
//dragenter
function dragenter(e){
    console.log("dragenter")
    this.classList.add("hold");
    e.preventDefault()
}
//dragover
function dragover(e){
    console.log("dragover")
    e.preventDefault()
    // this.classList.add = ("hold");
}
//dragdrop
function dragdrop(){
    console.log("dragdrop")
    this.classList.remove("hold")
    this.appendChild(img)
}