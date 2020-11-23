function movie(input) {
    let budget = Number(input.shift());
    let actors = Number(input.shift());
    let dressPrice = Number(input.shift());

    let decore = budget * 0.1;
    
    if(actors > 150){
        dressPrice = dressPrice * 0.9;
    }

    let expences = actors * dressPrice + decore;

    if(expences > budget){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(expences - budget).toFixed(2)} leva more.`)
    } else{
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - expences).toFixed(2)} leva left.`)
    }
}
movie([`20000`, `120`, `55.5`])