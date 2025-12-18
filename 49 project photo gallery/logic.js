// const { createElement } = require("react");

const num = document.querySelector("#num");
const generate = document.querySelector(".generate");
const gallery = document.querySelector("#gallery");

generate.addEventListener("click", async () => {
    const count = num.value;
    console.log(count)
    if (count > 0 && count <= 10000) {
        for (let i = 0; i < count; i++) {
            let img = document.createElement("img");
            let url = `https://picsum.photos/200/300/?random/${i}`;
            img.src = url;
            // response = await response.json();
            gallery.appendChild(img);


            // console.log(response)
        }
    }
    else {
        alert("Please enter a number between 1 and 20");
    }
});