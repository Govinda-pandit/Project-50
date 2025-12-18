const qrinput = document.getElementById("text-input");
const button = document.getElementById("qr-button");
const qrimg = document.getElementById("img");

// console.log(qrinput,button,qrimg);

button.addEventListener('click', () =>{
    const inputvalue = qrinput.value;
    console.log(inputvalue)

    if(inputvalue == ""){
        alert("please enter a valid URL or text");
        return;
    }else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        qrimg.alt = `QR code for ${inputvalue}`;
    }
})

