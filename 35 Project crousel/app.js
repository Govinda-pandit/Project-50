const nextimg = document.querySelector(".img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let count = 0;
let width = 500 ;

console.log(nextimg);

next.addEventListener("click", ()=>{
    if(count < 6){
        count++;
        nextimg.style.transform = `translateX(-${width*count}px)`;
    }
})

prev.addEventListener("click", ()=>{
    if(count > 0){
        count--;
        console.log(count);
        nextimg.style.transform = `translateX(-${width*count}px)`;
    }
})