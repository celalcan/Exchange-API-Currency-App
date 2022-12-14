const h1234= document.querySelector(".h1-4");

class  Currency{
   
    constructor(firstCurrency,secondCurrency){
        
        console.log("11");
       const myHeaders = new Headers();
        myHeaders.append("apikey", "yMktItS4GtWWbYakcb5av0UuVAAzThrL");
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
          };
          
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url ="https://api.apilayer.com/currency_data/convert?to=";
        this.requestOptions = requestOptions;
        this.amount = null;
    }

    exchange(){
        console.log("calisiyor");

        console.log("ikinci select");
            console.log(this.secondCurrency.textContent);
            console.log(this.firstCurrency.textContent);
      
        
        fetch(this.url + this.secondCurrency.textContent + "&from=" + this.firstCurrency.textContent + "&amount=" + this.amount, this.requestOptions)
        .then(response => response.text())
        .then(result => {
            const sonuc = JSON.parse(result);
            console.log(sonuc.result);
            h1234.style.fontWeight = "600";
            h1234.style.color = "#0E74E8";
            h1234.textContent =sonuc.result.toFixed(2);
        }
            
            

         )
        .catch(error => console.log('error', error));
        
    }
    changeAmount(amount) {
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}