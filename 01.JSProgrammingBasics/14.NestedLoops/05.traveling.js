function travelling (input) {

    let destination = input.shift();
    
    while (destination != "End"){
    
        let price = +input.shift();
        let savedMoney = 0;
    
        while (savedMoney < price){
        savedMoney += +input.shift();
        }

        console.log(`Going to ${destination}!`);
        destination = input.shift();
    } 
}
travelling([`Greece`, `1000`, `200`, `200`, `300`, `100`, `150`, `240`, `Spain`, `1200`, `300`, `500`, `193`, `423`, `End`])