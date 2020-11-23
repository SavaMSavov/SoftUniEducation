function solve(input){
    let months = +input.shift();
    let commission = +input.shift();
    let rent = +input.shift();
    let disc = 0.2 * rent;
    let halfperiod = months / 2;

    let first = 0;
    let second = 0;

    if(months % 2 == 0){
        first = months / 2;
        second = months / 2;
    }
    else{
        first = Math.floor(halfperiod);
        second = Math.ceil(halfperiod);
    }

    let totalPrice = first * rent + second * (rent - disc);
    let finalCommision = totalPrice * (commission / 100);

    let finalPrice = totalPrice + finalCommision;

    console.log(`Total: ${finalPrice.toFixed(2)}`);
}
solve([`12`,`15`,`400`])