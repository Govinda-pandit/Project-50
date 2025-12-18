const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const subbtn = document.querySelector(".submit");
const score = document.querySelector(".output");
const input  = document.querySelector(".input");
console.log(score);

let count = 0;
subbtn.addEventListener("click", () => {
    // console.log("hello")
    let val = input.value;
    // let num1 = 
    val = val.trim();
    val = Number(val);

    
    let num1v = num1.textContent;
    let num2v = num2.textContent;

    num1v = Number(num1v);
    num2v = Number(num2v);
    let mul = num1v*num2v;
    
    console.log(mul);
    if(input.value === ""){

        alert("Please enter the value");
    }
    else if (mul === val){
        console.log("hello");
        count++
        score.innerHTML = count;
        num1.textContent = Math.floor(Math.random() * 10);
        num2.textContent = Math.floor(Math.random() * 10);
        input.value = "";
        console.log(val);
    }
    else{
        num1.textContent = Math.floor(Math.random() * 10);
        num2.textContent = Math.floor(Math.random() * 10);
        input.value = "";
    }
})