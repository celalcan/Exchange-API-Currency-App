//Elementleri Seçme

const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
 const secondSelect = document.querySelector("#secondCurrency");
console.log(1111);

const currency = new Currency(firstCurrency,secondCurrency);
eventListeners();

function eventListeners(){
    console.log("ilk select");
    amountElement.addEventListener("input", exchangeCurrency);
   
}

function exchangeCurrency(){
   currency.changeAmount(amountElement.value);
    currency.exchange();
    
}