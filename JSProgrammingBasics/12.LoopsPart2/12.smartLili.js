function lili(input){
    let age = +input.shift();
    let priceOfWashingMachine = +input.shift();
    let priceToy = +input.shift();

    let toys = 0;
    let money = 10;
    let sum = 0; 

    for(let i = 1; i <= age; i++){
        if(i % 2 != 0){
            toys++;
        } else{
            sum += money;
            money += 10;
            sum--;
        }
    }
    sum += toys * priceToy;

    if(sum >= priceOfWashingMachine){
        console.log(`Yes! ${(sum - priceOfWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceOfWashingMachine - sum).toFixed(2)}`);
    }
}
lili([`10`, `170.00`, `6`])