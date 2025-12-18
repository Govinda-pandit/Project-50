const num = document.querySelector(".number");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");
const sub = document.querySelector(".sub");

let count = 0;
num.innerHTML = count;

plus.addEventListener("click", ()=>{
    // let number = num.textContent;
    let number = ++count;
    num.innerHTML = number;
    // console.log(number);

})

sub.addEventListener("click", ()=>{
    // let number = num.textContent;
    let number = --count;
    num.innerHTML = number;
    // console.log(number);

})

reset.addEventListener("click", ()=>{
    let number = count = 0;
    num.innerHTML = number;
})