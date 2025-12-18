const time = document.querySelector(".time")



let data = new Date()
let h = data.getHours();
console.log(h);
let m = data.getMinutes();
let s = data.getSeconds();
time.textContent = `${h}:${m}:${s}`;

function currenttime() {
    let data = new Date()
    let h = data.getHours();
    console.log(h);
    let m = data.getMinutes();
    let s = data.getSeconds();
    s = s<10 ? "0"+ s : s;
    m = m<10 ? "0"+ m : m;
    h = h<10 ? "0"+ h : h;
    time.textContent = `${h}:${m}:${s}`;
}

setInterval(currenttime,1000);