const time = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
// const timeid = document.querySelector("#timeid");
// console.log(timeid);
let minute = 25;
let second = 0;
let timeid;
start.addEventListener('click', () => {
    start.disabled = true;
     
    timeid = setInterval(() => {
        if(second == 0){
            second = 59;
            if(minute !== 0){
                minute--;
            }
        }else{
            second--;
        }

    time.textContent = `${minute}:${second}`;
    }, 1000);
})

stop.addEventListener("click", () => {
    clearInterval(timeid);
})

reset.addEventListener("click", ()=>{
    second = 0;
    minute = 25;
    time.textContent = `${minute}:0${second}`

})