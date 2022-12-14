const optionsContainer = document.querySelector(".options-container");
const optionsContainer2 = document.querySelector(".options-container-2");
let  optionsList = document.querySelectorAll(".option");
let  optionsList2 = document.querySelectorAll(".option-2");
let bekle=0;
getData();

async function getData() {
  
  const response = await fetch("doviz.json");
  const data = await response.json();
  data.forEach(function(data) {   

    optionsContainer.innerHTML +=`
    <div class="option">
    <input type="radio" class="radio" id="film" name="category" />
    <label  for="film">${data.USD}</label>
    </div>
    `
    optionsContainer2.innerHTML +=`
    <div class="option-2">
    <input type="radio" class="radio" id="film" name="category" />
    <label  for="film">${data.USD}</label>
    </div>
    `
    optionsList =document.querySelectorAll(".option");
    optionsList2 =document.querySelectorAll(".option-2");
  });
}
console.log("bir");




