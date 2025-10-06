const inputfield = document.querySelector("#passwordinput");
const outputfield = document.querySelector(".output");

inputfield.addEventListener("input",function(){
    console.log(inputfield.value);
    let password = inputfield.value;
    let specialchar = /[!@#$%^&*(),.?":{}|<>]/;   //isko variable me store karke bhi use kar sakte hai 


    if(password.length < 8){
        outputfield.innerText = "password is too short";
        outputfield.style.color = "red";
    }else{
        if(password.search(/[a-z]/)==-1){
            outputfield.innerText = "password must contain a lowercase letter";
            outputfield.style.color = "red";
        }
        else if(password.search(/[A-Z]/)==-1){
            outputfield.innerText = "password must contain a uppercase letter";
            outputfield.style.color = "red";
        }
        else if(password.search(/[0-9]/)==-1){
            outputfield.innerText = "password must contain a numeric number";
            outputfield.style.color = "red";
        }
        else if(password.search(specialchar)==-1){
            outputfield.innerText = "password must contain a special character";
            outputfield.style.color = "red";
        }
        else{
            outputfield.innerText = "password is strong";
            outputfield.style.color = "green";
        }



        // specialchar = /[!@#$%^&*(),.?":{}|<>]/;  /[!\@\#\$\%\^\&\*\(\)\,\.\?\"\:\{\}\|\>]/


        
    }
})