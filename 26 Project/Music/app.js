const applose = document.querySelector(".applause");
const boo = document.querySelector(".boo");
const Gasp = document.querySelector(".Gasp");
const Victory = document.querySelector(".Victory");
const Tada = document.querySelector(".Tada");
const Wrong = document.querySelector(".Wrong");

const audio1 = document.querySelector('.applause-s')
const audio2 = document.querySelector('.boo-s')
const audio3 = document.querySelector('.Gasp-s')
const audio4 = document.querySelector('.Victory-s')
const audio5 = document.querySelector('.Tada-s')
const audio6 = document.querySelector('.Wrong-s')

applose.addEventListener("click", () => {
    stop();
    audio1.play();
})
boo.addEventListener("click", () => {
    stop();
    audio2.play();
})
Gasp.addEventListener("click", () => {
    stop();
    audio3.play();
})
Victory.addEventListener("click", () => {
    stop();
    audio4.play();
})
Tada.addEventListener("click", () => {
    stop();
    audio5.play();
})
Wrong.addEventListener("click", () => {
    stop();
    audio6.play();
})


function stop() {
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
}