const container = document.querySelectorAll("span");

// console.log(conatainer);

container.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
})