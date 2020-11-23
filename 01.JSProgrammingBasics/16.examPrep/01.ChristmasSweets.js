function Sweets(input){

    let baklavaPriceKG = +input.shift();
    let muffinsPriceKG = +input.shift();
    let sholenKG = +input.shift();
    let bonbonsKG = +input.shift();
    let biscitsKG = +input.shift();
    
    let sholenPrice = baklavaPriceKG * 1.6;
    let bonbonsPrice = muffinsPriceKG * 1.8;
    let biscitsPrice = 7.5;

    let totalPrice = sholenKG * sholenPrice + bonbonsKG * bonbonsPrice + biscitsKG * biscitsPrice;

    console.log(totalPrice.toFixed(2))
}
Sweets([`6.9`,`4.2`,`1.5`,`2.5`,`1`])