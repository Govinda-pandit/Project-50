// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const data = document.querySelector(".time")
// const time = new Date();
// console.log(time);
let active = false;
let [ss,mm,hh] = [0,0,0];

function ttime(){
    ss++;
    if(ss>59){
        ss = 0;
        mm++;
    }
    if(mm>59){
        mm=0;
        hh++;
    }
    console.log(ss,mm,hh);

    hh = String(hh).padStart(2,"0");
    mm = String(mm).padStart(2,"0");
    ss = String(ss).padStart(2,"0");
    data.textContent = `${hh}:${mm}:${ss}`;
    let interval;
}
// console.log(ss,mm,hh)
// ttime();
// setInterval(ttime, 100);
// console.log(ss,mm,hh)
// let data = 0;
// setInterval(ttime, 1000);
// console.log(setInterval(ttime, 1000))
start.addEventListener("click", ()=>{
    // console.log("hell")
    active = active ? false: true;
    if(active){
        start.textContent = "Stop";
        start.classList.add("active");
        start.style.background = "red";
        interval = setInterval(ttime, 100);
        
    }
    else{
        start.textContent = "Start";
        start.style.background = "blue";
        start.classList.remove("active");
        clearInterval(interval);
        
    }
    
})

reset.addEventListener("click", ()=>{
    clearInterval(interval);
    data.textContent = `00:00:00`;
})
