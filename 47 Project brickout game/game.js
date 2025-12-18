const canvas = document.querySelector("#breakout");
const ctx = canvas.getContext("2d");
console.log(ctx)
//draw line
// ctx.beginPath();
// ctx.moveTo(150, 200);
// ctx.lineTo(200,100);
// ctx.stroke();
// ctx.closePath();

// draw circle
// ctx.beginPath();
// ctx.arc(200,200,100,0,Math.PI*2);
// ctx.fillStyle = "skyblue";
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(404,304,200,100)
// ctx.stroke()
// ctx.closePath()

//draw ball
let ballx = canvas.width / 2;
let bally = canvas.height / 2;
let ballradius = 10;
let ballspeedx = 3;
let ballspeedy = 3;
function drawball() {
    ctx.beginPath();
    ctx.arc(ballx, bally, ballradius, 0, Math.PI * 2);
    ctx.fillStyle = "#0395DD";
    ctx.fill();
    ctx.strokeStyle = "#0395DD";
    ctx.stroke();
    ctx.closePath();
}

let score = 0;

// draw paddle
let paddleheight = 20;
let paddlewidth = 120;
let paddlex = canvas.width / 2 - paddlewidth / 2;
let paddley = canvas.height - paddleheight - 10;
let paddlespeed = 38;

function drawpaddle() {
    ctx.beginPath();
    ctx.rect(paddlex, paddley, paddlewidth, paddleheight);
    ctx.fillStyle = "#0395DD"
    ctx.fill();
    ctx.strokeStyle = "#0395DD"
    ctx.stroke();
    ctx.closePath();
}



//draw brick
let brickrow = 6;
let brickcoloum = 10;
let brickwidth = 100;
let brickheight = 20;
let bricktopmargin = 40;
let brickleftmargin = 30;
let brickpadding = 30;
let brick = [];


for (let c = 0; c < brickcoloum; c++) {
    brick[c] = [];
    for (let r = 0; r < brickrow; r++) {
        brick[c][r] = { x: 0, y: 0, alive: 1 };
    }
}

console.log(brick);
// drawbrick();
function drawbrick() {
    for (let c = 0; c < brickcoloum; c++) {
        for (let r = 0; r < brickrow; r++) {
            if (brick[c][r].alive === 1) {
                let brickx = (c * (brickwidth + brickpadding)) + brickleftmargin;
                let bricky = (r * (brickheight + brickpadding)) + bricktopmargin;
                brick[c][r].x = brickx;
                brick[c][r].y = bricky;
                ctx.beginPath();
                ctx.rect(brickx, bricky, brickwidth, brickheight);
                ctx.fillStyle = "#0395DD"
                ctx.fill();
                ctx.strokeStyle = "#0395DD"
                ctx.stroke();
            }
            // ctx.closepath();
        }
    }
}

// function of score update and collision of brick 

function detectcollision() {
    for (let c = 0; c < brickcoloum; c++) {
        for (let r = 0; r < brickrow; r++) {
            let b = brick[c][r];
            if (b.alive === 1) {
                if (ballx > b.x && bally > b.y && ballx < b.x + paddlewidth && bally < b.y + brickheight) {
                    brick[c][r].alive = 0;
                    ballspeedy = -ballspeedy;
                    score++;
                }
            }
        }
    }
}


//drawscore;
function drawscore() {

    ctx.fillStyle = "#0395DD";
    ctx.fill()
    ctx.fillText("Score: 0" + score, 1260, 20);
}


console.log(drawscore)


//movement of paddle

document.addEventListener("keydown", handlekey);
document.addEventListener("keyup", handlekey)

function handlekey(e) {
    console.log(e)
    // console.log(e.key)

    if (e.key === "ArrowLeft" && paddlex > 0) {
        paddlex -= paddlespeed;
        // console.log(paddlex)
    } else if (e.key === "ArrowRight" && paddlex + paddlewidth < canvas.width) {
        paddlex += paddlespeed;
    }
}

// handlekey()

// all function call

function gamestart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawball();
    drawpaddle();
    drawbrick();
    drawscore();
    detectcollision();
    ballx += ballspeedx
    bally += ballspeedy
    if (bally + ballradius < 0) {
        ballspeedy = -ballspeedy
    }
    if (bally + ballradius > canvas.height) {
        document.location.reload();
    }
    if (ballx + ballradius > canvas.width || ballx + ballradius < 0) {
        ballspeedx = -ballspeedx
    }
    if (ballx + ballradius > paddlex && bally + ballradius > paddley && ballx + ballradius < paddlex + paddlewidth) {
        ballspeedy = -ballspeedy
    }
    requestAnimationFrame(gamestart)

}

gamestart()

