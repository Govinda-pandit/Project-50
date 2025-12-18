const output = document.querySelector(".output");
const buttons = document.querySelectorAll("button");

console.log(output, buttons);

let str = "";

buttons.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        console.log(btn.textContent);
        // console.log(e.target.textContent);
        // str += btn.textContent;
        // output.value = str;
        // console.log(str);
        if(btn.textContent.trim() == "AC"){
            str = "";
            output.value = str;
        }
        else if (btn.textContent.trim() == "="){
            str = eval(str);
            output.value = str;
        }
        else if (btn.textContent.trim() == "DEL"){
            // console.log(str);
            str = str.substring(0, str.length -1);
            output.value = str;
        }
        else{
            str += btn.textContent.trim();
            output.value = str;
        }
    })
})