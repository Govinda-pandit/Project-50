const scrollbar = document.querySelector(".scrollbar");

window.addEventListener("scroll", () => {
    let persentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight))*100;
    console.log(persentage);
    scrollbar.style.width = persentage + '%';
})