function solve(input){

    let budget = +input.shift();
    let skiPrice = +input.shift();
    let shtekiPrice = +input.shift();

    let skiShoesPrice = skiPrice * 0.4;
    let skiClothesPrice = skiPrice * 1.4;

    let total = skiPrice + shtekiPrice + skiShoesPrice + skiClothesPrice;
    if(total - shtekiPrice > 800){
        total = total - shtekiPrice;
    }

    if(budget >= total){
        console.log(`Angel's sum is ${total.toFixed(2)} lv. He has ${(budget - total).toFixed(2)} lv. left.`)
    }
    else{
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`)
    }
}
solve([`1950.50`, `525.99`, `69.99`])