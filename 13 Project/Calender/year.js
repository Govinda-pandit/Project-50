const month = document.querySelector(".monthtex");
// console.log(month);
const day = document.querySelector(".daytex");
const date = document.querySelector(".datetex");
const year = document.querySelector(".yeartex");

// month = console.log()
const data = new Date();
// console.log(data.getFullYear());
const option = {month: 'long'};
const option1 = data.toLocaleDateString('en-US', option);
month.textContent = option1;
const dayoption = {weekday:'long'};
const dayoption1 = data.toLocaleDateString('en-US', dayoption);
day.textContent = dayoption1;
date.textContent = data.getDate();
year.textContent = data.getFullYear();

// console.log(String(data.getMonth()+1))