const myscore = document.querySelector(".mscore");
const comscore = document.querySelector(".cscore");
const output = document.querySelector(".choose");
const buttons = document.querySelectorAll("button");
const winlose = document.querySelector(".win-lose");
let mychoice = "";
let compchoice = "";
// console.log(rock)

buttons.forEach((e)=>{
    console.log(e);
    e.addEventListener("click",()=>{
        mychoice = e.innerText;
        compchoice = comchoice();
        console.log(mychoice)
        console.log(compchoice);
        winresult();
        console.log(winresult());
        let store = winresult();
        console.log(store);
        output.textContent = `Your choose ${mychoice}, Computer choose ${compchoice}.`
        if(store == "its tie"){
            myscore.textContent = parseInt(myscore.textContent)+1;
            comscore.textContent = parseInt(comscore.textContent)+1;
            winlose.textContent = "It's a Draw! 🤝 "
        }
        else if( store == "its win"){
            myscore.textContent = parseInt(myscore.textContent)+1;
            winlose.textContent = "You win 🎉"
        }
        else if(store == 'you lose 😭'){
            comscore.textContent = parseInt(comscore.textContent)+1;
            winlose.textContent = "You Lose! 😭"
        }
    })
})

function winresult(){
    let result = "";
    if(mychoice == compchoice){
        result = "its tie"
    }else if(mychoice == '✊' && compchoice == "✌️"){
        result = "its win";
    }else if(mychoice == "🖐️" && compchoice == "✊"){
        result = "its win";

    }else if (mychoice == "✌️" && compchoice == "🖐️"){
        result = "its win";
    }else{
        result = 'you lose 😭';
    }
    return result;
}
winresult();
console.log(winresult())

function comchoice(){
    let choice = ["✊","🖐️","✌️"];
    let compscore = choice[Math.floor(Math.random()*choice.length)];
    return compscore;
}
comchoice()
console.log(comchoice());

