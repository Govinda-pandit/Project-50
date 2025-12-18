const search = document.querySelector("#search");
const btn = document.querySelector("button");
const imagecontainer = document.querySelector("#imagecontainer");

btn.addEventListener("click", async () => {
    const searchvalue = search.value;
    console.log(searchvalue);
    if (searchvalue === "") {
        alert("Please enter a search name");
    } else {
        const key = "5A1fZobRjXH6p76MYWxdGItAKU7A4JJQtMZbLHwXEeU"
        const response = await fetch(`https://api.unsplash.com/photos?page=1&query=${searchvalue}&client_id=${key}`)
        const data = await response.json();
        console.log(data);
        display(data);

    }
})

function display(data){
    imagecontainer.innerHTML = "";
    data.forEach(element => {
        
        console.log(element.urls.regular);
        const img = document.createElement("img");
        img.src = element.urls.regular;
        imagecontainer.appendChild(img);
    });
}