function journey(input){
    let budget = Number(input.shift());
    let season = input.shift();
    let spending = 0;
    let type;
    let destination;

    if(budget <= 100){
        if(season === `summer`){
            spending = budget * 0.3;
            type = `Camp`;
            destination = `Bulgaria`;
        }
        else if(season === `winter`){
            spending = budget * 0.7;
            type = `Hotel`;
            destination = `Bulgaria`;
        }
        else{
            console.log(`wrong input`);
        }
    }
    else if(budget <= 1000){
        if(season === `summer`){
            spending = budget * 0.4;
            type = `Camp`;
            destination = `Balkans`;
        }
        else if(season === `winter`){
            spending = budget * 0.8;
            type = `Hotel`;
            destination = `Balkans`;
        }
        else{
            console.log(`wrong input`);
        }
    }
    else if(budget > 1000){
        if(season === `summer` || season === `winter`){
            spending = budget * 0.9;
            type = `Hotel`;
            destination = `Europe`;
        }
        else{
            console.log(`wrong input`);
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${spending.toFixed(2)}`)
}
journey([`50`, `summer`])