const text = document.querySelector(".text");

let newtext = "wake up to reality, my comeback in the world check";
let count = 0;
function slowmotion(){
    text.textContent= newtext.substring(0,count);
    count++;
    if(count >newtext.length){
        count = 0;
        console.log(count);
        
        
    }
    setTimeout(slowmotion,50);
    

}

slowmotion()