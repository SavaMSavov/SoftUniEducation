function market(input){
    let whiskeyPrice = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let rakiqLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());

    let rakiqPrice = whiskeyPrice / 2;  
    let winePrice = rakiqPrice * 0.6;
    let beerPrice = rakiqPrice * 0.2;

    let totalSum = whiskeyPrice * whiskeyLiters + beerLiters * beerPrice + wineLiters * winePrice + rakiqLiters * rakiqPrice;
    
    console.log(totalSum.toFixed(2));    
}
market([50,10,3.5,6.5,1])