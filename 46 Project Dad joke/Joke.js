const joke = document.querySelector(".joke")
const btn = document.querySelector(".button")

btn.addEventListener("click", async()=>{
    let data = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                'Accept': 'application/json'
            }
    })
    console.log(data);
    let newdata = await data.json();
    console.log(newdata)
    joke.textContent = newdata.joke;
})