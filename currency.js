class  Currency{
    constructor(firstCurrency,secondCurrency){
        console.log("11");
        const myHeaders = new Headers();
        myHeaders.append("apikey", "8Ski4cKTl3mxzq5zb3oJ7OzmZZOkhUeM");
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
          };
          
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url ="https://api.apilayer.com/exchangerates_data/convert?to=";
        this.requestOptions = requestOptions;
        this.amount = null;
    }

    exchange(){
        fetch(this.url + this.secondCurrency + "&from=" + this.firstCurrency + "&amount=" + this.amount , this.requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    }
    changeAmount(amount) {
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }

    changeSecondCurrency(newSecondCurrency){
        this.firstCurrency = newSecondCurrency;
    }
}