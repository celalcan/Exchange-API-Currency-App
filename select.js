

 console.log("iki");

 

const selected = document.querySelector(".selected");
const selected2 = document.querySelector(".selected-2");
const h1= document.querySelector(".h1");
const h12= document.querySelector(".h1-2");
const h123= document.querySelector(".h1-3");

const cardsag = document.querySelector(".card-sag");
const cardsol = document.querySelector(".card-sol");
const img = document.getElementById("myImg");
const img2 = document.getElementById("myImg-2");
let tt=0;
setTimeout(function() {
  optionsList.forEach(o => {
    
    o.addEventListener("click", () => {
      tt+=1;
      if(tt===1)
  {
    h1.innerHTML = o.querySelector("label").innerHTML;
    h123.innerHTML = h1.textContent +"-"+h12.textContent;
    optionsContainer.classList.remove("active");
    img.style.transform = "rotate(0deg)";
    img.style.transition = "transform 0.4s";
    
    currency.exchange();
   return;
        }
       
        console.log(firstSelect.textContent);
  });
 
 
  });
}, 100);
   

setTimeout(function() {
  optionsList2.forEach(o => {
    
    o.addEventListener("click", () => {
      tt+=1;
      if(tt===1)
  {
    h123.innerHTML=h1.textContent+"-";
    h12.innerHTML = o.querySelector("label").innerHTML;
    h123.innerHTML = h123.innerHTML + o.querySelector("label").textContent;
    optionsContainer2.classList.remove("active");
    img2.style.transform = "rotate(0deg)";
    img2.style.transition = "transform 0.4s";
   
    currency.exchange();
   return;
        }
       
    
  });
 
 
  });
}, 100);

 
 










selected.addEventListener("click", () => {
  tt=0;
  
    optionsContainer.classList.toggle("active");
    if( img.style.transform === "rotate(180deg)")
    {
      img.style.transform = "rotate(0deg)";
    }
    else{
      img.style.transform = "rotate(180deg)";
    }
    
   
    img.style.transition = "transform 0.4s";
    
});
selected2.addEventListener("click", () => {
  tt=0;
    optionsContainer2.classList.toggle("active");
    if( img2.style.transform === "rotate(180deg)")
    {
      img2.style.transform = "rotate(0deg)";
    }
    else{
      img2.style.transform = "rotate(180deg)";
    }
    img2.style.transition = "transform 0.4s";
    
});














document.addEventListener("click", function(event) {
  if(!selected.contains(event.target)){
    optionsContainer.classList.remove("active");
    img.style.transform = "rotate(0deg)";
    img.style.transition = "transform 0.4s";
  }
});




