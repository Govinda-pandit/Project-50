const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]

const question = document.querySelector("#quize-question");
console.log(question);
console.log(question.textContent);

const option_a = document.querySelector("#text_option_a");
const option_b = document.querySelector("#text_option_b");
const option_c = document.querySelector("#text_option_c");
const option_d = document.querySelector("#text_option_d");
console.log(option_a);
console.log(option_a.textContent);

const submit = document.querySelector("#submit");
// console.log(submit);

// const answerP = document.querySelector(".answer");
// console.log(answerP)

let currentquiz = 0;
let score = 0;

console.log(quiz[currentquiz].question);
console.log(quiz[currentquiz].ans1text);

question.textContent = quiz[currentquiz].question;
option_a.textContent = quiz[currentquiz].ans1text;
option_b.textContent = quiz[currentquiz].ans2text;
option_c.textContent = quiz[currentquiz].ans3text;
option_d.textContent = quiz[currentquiz].ans4text;

submit.addEventListener("click", ()=>{
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if(checkedAns == null){
        alert("Please select these option");
    }
    else{
        if(checkedAns.nextElementSibling.textContent == quiz[currentquiz].answer){
            score++;
        }
        currentquiz++;
        if(currentquiz < quiz.length){
            question.textContent = quiz[currentquiz].question;
            option_a.textContent = quiz[currentquiz].ans1text;
            option_b.textContent = quiz[currentquiz].ans2text;
            option_c.textContent = quiz[currentquiz].ans3text;
            option_d.textContent = quiz[currentquiz].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is" + score);
            location.reload();
        }

        

        
    }
})
