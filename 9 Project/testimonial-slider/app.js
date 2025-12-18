const testimonials = ["The Lorem Ipsum Company has been an integral part of our content marketing success. We have seen a notable increase in organic leads since we began using their services in 2012.", "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.", "Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again.", "Professional, responsive, and able to keep up with ever-changing demand and tight deadlines: That's how I would describe Jeramy and his team at The Lorem Ipsum Company. When it comes to content marketing, you'll definitely get the 5-star treatment from the Lorem Ipsum Company!"];
const authors = ["Roland Weedon", "Kelsi Gordon", "Seth Gewirtz", "Tasha Zuzalek"];

const authertext = document.querySelector(".para");
const subtitle = document.querySelector(".subtitle");

let count = 0;
function changeTest(){
    authertext.textContent = testimonials[count]
    subtitle.textContent = authors[count]
    console.log(authertext.textContent);
    count++;
    if(count > authors.length-1){
        count = 0;
    }
}

setInterval(changeTest, 3000);