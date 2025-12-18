const year = document.querySelector(".yeartext");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");


let data = new Date().getFullYear();
let newyear = data + 1;

console.log(data);
console.log(newyear);

setInterval(() =>{
    const currentdate = new Date();
    const newyeardate = new Date(`January 01 ${newyear} 00:00:00`);
    const totalsecond = (newyeardate - currentdate)/1000;
    console.log(totalsecond);


    year.textContent = data;
    const dayleft = Math.floor(totalsecond/3600/24);
    const hourleft = Math.floor(totalsecond/3600)%24;
    const minuteleft = Math.floor(totalsecond/60)%24;
    const secondleft = Math.floor(totalsecond)%60;

    day.textContent = dayleft;
    hour.textContent = hourleft;
    minute.textContent = minuteleft;
    second.textContent = secondleft;
})

