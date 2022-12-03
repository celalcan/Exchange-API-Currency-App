//Elementleri Seçme

const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
console.log(1111);
const currency = new Currency("USD","TRY");
eventListeners();

function eventListeners(){
    amountElement.addEventListener("input", exchangeCurrency);
    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);

    };
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
    };
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange();
}