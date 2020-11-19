function solve(number){

    if(number % 2 != 1 && number % number != 1){
        console.log(`false`);
    }
    else{
        console.log(`true`)
    }
}

solve(7)