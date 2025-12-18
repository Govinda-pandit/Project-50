const search = document.querySelector(".Toggle-Search");
const box = document.querySelector(".search");
const input = document.querySelector("input");

console.log(box.classList);
console.log(input)

search.addEventListener("click", () =>{
    if(box.classList.contains("active") ){
        box.classList.remove("active");
    }
    else{
        box.classList.add("active");
    }

    // search.classList.toggle("active");
    // input.focus();
})