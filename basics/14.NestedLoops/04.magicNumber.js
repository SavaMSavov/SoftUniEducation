function magic(input){

    let a = +input.shift();
    let b = +input.shift();
    let magicNumber = +input.shift();
    let combination = 0;
    let isFound = false;

    for(let i = a; i <= b; i++){
        for(let j = a; j <= b; j++){
            combination++;

            if(i + j === magicNumber){
                console.log(`Combination N:${combination} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if(isFound){
            break;
        }
    }
    if(isFound == false){
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }   
}
magic([`1`,`10`,`5`])



