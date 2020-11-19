function toyShop(input){
    let price = Number(input.shift());
    let puzzlesCount = Number(input.shift());
    let dollsCount = Number(input.shift());
    let bearsCount = Number(input.shift());
    let minionsCount = Number(input.shift());
    let trucksCount = Number(input.shift());

    let sum = puzzlesCount * 2.60 + dollsCount * 3.00 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2.00;
    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    if(toysCount >= 50){
        let discount = sum * 0.25;
        sum -= discount;
    }
    let rentDiscount = sum * 0.1;
    sum -= rentDiscount;

    if(sum >= price){
        console.log(`Yes! ${(sum - price).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(price - sum).toFixed(2)} lv needed.`)
    }
}
toyShop(["40.8","20","25","30","50","10"])