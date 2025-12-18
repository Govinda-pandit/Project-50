const loadingbar = document.querySelector(".loading-bar");
const percentage = document.querySelector(".percentage");

console.log(loadingbar, percentage);

let progress = 0;
window.addEventListener("DOMContentLoaded", () => {

    setInterval(() => {
        if (progress < 100) {
            progress++;
            loadingbar.style.width = `${progress}%`
            percentage.textContent = `${progress}%`;
        }
    }, 10);

})