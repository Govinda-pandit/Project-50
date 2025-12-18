const input = document.querySelector("#input");
const btn = document.querySelector(".calculate");
const result = document.querySelector(".result");

console.log(input, btn, result);

btn.addEventListener("click", () => {
    console.log(input.value);
    if (input.value === "") {
        result.textContent = "Please enter the date of birth";
        return;
    }
    else {
        // let data = input.value;
        let settime = new Date(input.value);
        console.log(settime);
        let data = settime.getFullYear();
        console.log(settime);
        let realtime = new Date();
        let newdata = realtime.getFullYear();
        let age = newdata - data;
        // console.log(settime, realtime);
        let monthdeff = realtime.getMonth() - settime.getMonth();
        let daydiff = realtime.getDate() - settime.getDate();
        if(monthdeff < 0 || (monthdeff == 0 && daydiff < 0)){
            age--;
        }
        result.textContent = `Your Age is: ${age}`;
        console.log(age);
    }
})