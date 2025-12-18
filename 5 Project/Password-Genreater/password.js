const password = document.querySelector("#password");
const lengthp = document.querySelector("#lenght-check");
const upper = document.querySelector("#uppercase");
const lower = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const symbol = document.querySelector("#symbol");

const genreator = document.querySelector("#pass-gen");
const copy = document.querySelector("#copy");

console.log(password);

const uppercasestr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercasestr = "abcdefghijklmnopqrstuvwxyz";
const numberstr = "0123456789";
const symbolstr = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

genreator.addEventListener("click", () => {
    let str = " ";

    
    if(upper.checked){
        console.log("checked");
        str += uppercasestr;
    }
    if(lower.checked){
        console.log("hello");
        str += lowercasestr;
    }
    if(number.checked){
        str += numberstr;

    }
    if(symbol.checked){
        str += symbolstr;

    }

    // console.log(str);
    let storage = "";
    for(let i = 0; i<lengthp.value; i++){
        console.log(str.length);
        let store = Math.floor(Math.random()*str.length);
        // console.log(store);
        // password += store;
        // console.log(str[store]);
        storage += str[store];

    }
    // console.log(storage)
    password.value = storage;
    console.log(password);
    
})

// const textToCopy = password.value;
copy.addEventListener('click', () =>{
    const textToCopy = password.value;
    if(password.value === ""){
        alert("Please create password");
    }else{
        // password.select();
        // // console.log( password.select());
        // document.execCommand('copy');
        // alert("passsjdf ksdjf"); ye kaam nhi kar raha hai 

        navigator.clipboard.writeText(textToCopy).then(() =>{
            password.select();
            // alert("copy your data");
            
        })
        .catch(err =>{
            console.error("copy karne me problem ", err);
            alert("somthing error");
        })
    }
})
  