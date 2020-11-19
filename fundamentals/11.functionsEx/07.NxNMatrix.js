function solve(number){

    let symbol = number.toString();

    for(let row = 0; row < number; row++){
        console.log((symbol + ` `).repeat(number))
    }
}

solve(3);
