const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgbox = document.querySelector(".img");
console.log(prev, next);

let count = 0;
let width = 900;

next.addEventListener("click", ()=>{
    if(count < 12){
       
        count++;
        imgbox.style.transform = `translateX(-${width*count}px)`;
    }
})

prev.addEventListener("click", ()=>{
    if(count > 0){
        count--;
        imgbox.style.transform = `translateX(-${width*count}px)`;
    }
})


