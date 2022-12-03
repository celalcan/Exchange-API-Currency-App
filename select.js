const selected = document.querySelector(".selected");
const h1= document.querySelector(".h1");
const optionsContainer = document.querySelector(".options-container");
const cardsag = document.querySelector(".card-sag");
const cardsol = document.querySelector(".card-sol");
const optionsList = document.querySelectorAll(".option");
const img = document.getElementById("myImg")

let a=0;

selected.addEventListener("click", () => {
  
  
  

  if (a === 1){
   console.log(selected.clickCount);
   optionsContainer.classList.remove("active");
    img.style.transform = "rotate(0deg)";
    img.style.transition = "transform 0.4s";
    a = 0;
  }
  else{
    a=a+1;
    console.log(selected.clickCount);
    optionsContainer.classList.toggle("active");
    img.style.transform = "rotate(180deg)";
    img.style.transition = "transform 0.4s";
    
  }

  
});

document.addEventListener("click", function(event) {
  if(!selected.contains(event.target)){
    optionsContainer.classList.remove("active");
    img.style.transform = "rotate(0deg)";
    img.style.transition = "transform 0.4s";
  }

  
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    console.log(selected.innerHTML);
    h1.innerHTML = o.querySelector("label").innerHTML;

    optionsContainer.classList.remove("active");
    img.style.transform = "rotate(0deg)";
    img.style.transition = "transform 0.4s";
  });
});

