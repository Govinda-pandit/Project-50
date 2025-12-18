const input = document.querySelector("#input");
const totalnum = document.querySelector("#total-num");
const remainingnum = document.querySelector("#remaining-num");

// console.log(totalnum)
input.addEventListener("input", () =>{
    let total = input.value.length;
    // console.log(total)
    totalnum.innerText = total;
    remainingnum.innerText = 150 - total;
    if(total === 150){
        input.disabled = true;
    }
    else{
        input.disabled = false;
    }
})