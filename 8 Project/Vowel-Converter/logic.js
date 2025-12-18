const inputtext = document.querySelector("#inputtext");
const button = document.querySelector(".button");
const countt = document.querySelector(".count")


// const vowel = "a,e,i,o,u";
button.addEventListener("click", () => {
    let textt = inputtext.value;
    // console.log(green);
    // const vowel = /[a,e,i,o,u]/;
    if (textt === "") {
        countt.innerHTML = "Please enter some text "
    }
    else {
        let count = 0;
        for (let i = 0; i < textt.length; i++) {
            if (textt[i] === "a" || textt[i] === "e" || textt[i] === "i" || textt[i] === "o" || textt === "u") {
                count++;
            }
            
            if (textt[i] === "A" || textt[i] === "E" || textt[i] === "I" || textt[i] === "O" || textt === "U") {
                count++;
            }
            
        }
        countt.innerHTML = `count of vowel ${count++}`;
    }

})