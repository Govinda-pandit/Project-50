const btn = document.querySelector(".btn");

btn.addEventListener("click", (event)=>{
    console.log(event.clientX,event.clientY);
    const react = btn.getBoundingClientRect();
    console.log(react);
    const circle = document.createElement("span");
    circle.className = "circle";
    circle.style.height = circle.style.width = `${react.width}px` 
    circle.style.left = `${event.clientX - react.left - react.width/2}px`;
    circle.style.top = `${event.clientY - react.top - react.width/2}px`;
    btn.appendChild(circle);
})