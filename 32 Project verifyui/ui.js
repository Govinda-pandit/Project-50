const input = document.querySelectorAll(".code");
console.log(input);

input[0].focus();

input.forEach((data, idx) => {
    data.addEventListener( "keydown", (s)=>{
        console.log(s);
        if(s.key >= 0 && s.key <= 9){
            // input = " ";
            input[idx].value = "";
            setTimeout(()=>(input[idx+1].focus(),10));
        }else if(s.key === "Backspace"){
            setTimeout(()=>(input[idx-1].focus(),10));
        }
    })    
});