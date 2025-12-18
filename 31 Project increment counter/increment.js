const counter = document.querySelectorAll(".counter");
console.log(counter);
counter.forEach(e => {
    e.innerText = '0';
    let target = +e.getAttribute("data-target");
    console.log(target);
    let count = 0;

    function increement(){
        if(count<target){
            count++;
            e.innerText = count;
            setInterval(increement,1);
        }
        else{
            count = target;
            e.innerText = count;
        }
    }
    increement();

});