const amount = document.querySelector(".loan");
const interest = document.querySelector(".rate");
const pay = document.querySelector(".pay");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

console.log(amount, interest, pay);

function emi(){
   if(amount.value == "" || interest.value == "" || pay.value == ""){
    alert("Please enter the value");
   }
   else{
    const p = amount.value;
    const r = interest.value/1200;
    const n = pay.value;
    const emivalue = (p*r*(1+r)**n)/((1+r)**n-1);
    output.textContent = emivalue.toFixed(2);
   }
}

btn.addEventListener("click", emi);