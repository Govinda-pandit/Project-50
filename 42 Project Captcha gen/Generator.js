const captcha = document.querySelector(".captcha");
const input = document.querySelector(".fill");
const submit = document.querySelector(".submit");
const refresh = document.querySelector(".refresh");
console.log(captcha,input,submit,refresh);
let data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";



console.log(rand());


// let captchaval = captcha.textContent;


    // let captchaval = captcha.textContent;
// console.log(captchaval)
captcha.textContent = rand();
submit.addEventListener("click", ()=>{
    let inputval = input.value;
    console.log(inputval)
    
    let captchaval = captcha.textContent.trim();
    
    if(captchaval == inputval){
        alert("match captcha");
    }
    else{
        alert("captch is not match");
    }
    

})

refresh.addEventListener("click", ()=>{
    captcha.textContent = rand();
    input.value = "";
})


function rand() {
    let captchagen = "";
    for (let i = 0; i < 6; i++) {
        captchagen += data[Math.floor(Math.random() * data.length)];


    }
    return captchagen;
}