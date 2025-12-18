const quotes = document.querySelector('.quotes');
const author = document.querySelector(".name");
const btn = document.querySelector(".btn");
console.log(btn);

async function quotesfun(){
    const data = await fetch("https://dummyjson.com/quotes/random");
    const data1 = await data.json();
    console.log(data1);
    // console.log(data);
    quotes.textContent = data1.quote;
    author.textContent = "- " + data1.author;
}
btn.addEventListener("click", quotesfun);

