function solve(product, count){

    let coffeePrice = 1.5;
    let waterPrice = 1.0;
    let cokePrice = 1.4;
    let snacksPrice = 2;
    
    let totalSum = 0;

    switch(product){

        case `coffee`: totalSum = coffeePrice * count; break;
        case `water`: totalSum = waterPrice * count; break;
        case `coke`: totalSum = cokePrice * count; break;
        case `snacks`: totalSum = snacksPrice * count; break;
    }

    console.log(totalSum.toFixed(2))
}

solve(`water`, 5)