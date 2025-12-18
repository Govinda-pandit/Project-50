// const { createElement } = require("react");

const container = document.querySelector(".container");

let no_of_square = 598;
let colors = ["red", "orange", "green", "yellow", "blue", "skyblue","white"];

function randomc(colors){
    return  colors[Math.floor(Math.random()*colors.length)];
}

function setcolor(element){
    element.style.backgroundColor = randomc(colors);
}

function setremove(element){
    element.style.backgroundColor = "rgb(85, 83, 83)";
}

for(let i = 0; i<no_of_square; i++){
    let square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", ()=>{
        setcolor(square);
    })
    square.addEventListener("mouseout", ()=>{
        setremove(square);
    })
    container.appendChild(square);
}