const bill = document.querySelector(".amount");
const tip = document.querySelector(".percentage");
const btn = document.querySelector(".calci");
const output = document.querySelector(".output");

function percentage() {
    if (bill.value == "" || tip.value == "") {
        alert("Please enter the value");
    }
    else {
        const p = bill.value;
        const t = tip.value;
        const calculate = (p * t) / 100;
        console.log(calculate);
        const data = parseInt(calculate) + parseInt(p);
        console.log(data);
        output.textContent = data+"₹";
    }
}

btn.addEventListener("click", percentage);