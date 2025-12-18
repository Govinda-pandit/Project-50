const container = document.querySelector(".container");

let color = ["#196127","#219A3A","white","#C6E48B","#7BC96F"]

function randm(color){
    return color[Math.floor(Math.random()*color.length)];
}

// randm(color);
// console.log(randm());

function setcolor(element){
    element.style.backgroundColor = randm(color);
}

for(let i=0; i<365; i++){
    let sqaure = document.createElement("div");
    sqaure.classList.add("sqaure");
    setcolor(sqaure);
    container.appendChild(sqaure);
}