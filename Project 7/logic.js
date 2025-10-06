const celsius = document.querySelector("#input");
const kelvin = document.querySelector("#output1");
const farenheit = document.querySelector("#output2");

celsius.addEventListener("input", () => {
    let val = celsius.value ;
    console.log(val);
    // let k = 273.15;
    let out1 = parseFloat(val)+273.15;
    kelvin.value = out1.toFixed(2);
    let out2 = parseFloat((val)*1.8)+32;
    farenheit.value = out2.toFixed(2);
})

kelvin.addEventListener("input", () => {
    let val = kelvin.value ;
    console.log(val);
    let out1 = parseFloat(val)-273.15;
    celsius.value = out1.toFixed(2);
    let out2 = parseFloat((out1)*1.8)+32;
    farenheit.value = out2.toFixed(2);
})

farenheit.addEventListener("input", () => {
    let val = farenheit.value ;
    console.log(val);
    let out1 = parseFloat((val)-32)/1.8;
    celsius.value = out1.toFixed(2);
    let out2 = parseFloat(out1)+273.15;
    kelvin.value = out2.toFixed(2);
})