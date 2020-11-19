function birthdayCake(input){
    let a =  +input.shift();
    let b = +input.shift()

    let cakeArea = a * b;

    let data = input.shift();

    while(data != `STOP`){
        let pieces = +data;
        cakeArea = cakeArea - pieces;
        
        if(cakeArea < 0){
            let neededPieces = Math.abs(cakeArea);
            console.log(`No more cake left! You need ${neededPieces} pieces more.`)
            break;
        } 
        data = input.shift();
    }
    if(cakeArea >= 0){
        console.log(`${cakeArea} pieces are left.`);
    }
}
birthdayCake([`10`, `2`, `2`, `4`, `6`, `STOP`])