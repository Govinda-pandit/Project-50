const calculate = document.querySelector(".calculate");
const height = document.querySelector(".height")
const weight = document.querySelector(".weight");
const result = document.querySelector(".result");

calculate.addEventListener("click", ()=>{
    console.log(weight);
    let newweight = weight.value;
    let newheight = height.value;
    let neww = ((newheight)/100)**2;
    
    console.log(neww);
    let bmi = newweight/neww;
    console.log(bmi);
    let category = "";
    if(newheight == "" || newheight == ""){
        console.log("hello")
        let result1 = "Please fill the detail";
        result.textContent = result1;
        result.style.color = "red";
    }
    else if(bmi<= 18.5){
        category = "Under Weight";
        result.textContent = `Your Bmi is ${(bmi).toFixed(2)} and you are ${category}`;
    }
    else if(bmi>= 18.5 && bmi <= 24.9){
        category = "Normal Weight";
        result.textContent = `Your Bmi is ${(bmi).toFixed(2)} and you are ${category}`;
    }
    else if(bmi>=25.0 && bmi <= 29.9){
        category = "Over Weight";
        result.textContent = `Your Bmi is ${(bmi).toFixed(2)} and you are ${category}`;
    }
    else{
        category = "Obesity";
        result.textContent = `Your Bmi is ${(bmi).toFixed(2)} and you are ${category}`;
    }
    // result.textContent = `Your Bmi is ${bmi} and you are ${category}`;

})