const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".meaning");


btn.addEventListener("click", async() =>{
    const data = input.value;
    // console.log(data);
    if(data === ""){
        alert("please enter the word");
    }
    else{

        const url = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${data}`);
        const word = await url.json();
        console.log(word[0]["meanings"][0]["definitions"][0]["definition"]);
        output.textContent = word[0]["meanings"][0]["definitions"][0]["definition"];
    }
})