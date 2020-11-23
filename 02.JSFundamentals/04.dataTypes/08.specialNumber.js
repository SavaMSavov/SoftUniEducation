function solve(number){

    for(let i = 1; i <= number; i++){
        let sum = 0;
        let current = i.toString();

        for(let j = 0; j < current.length; j++){
            sum += Number(current[j]);
        }
        console.log((sum === 5 || sum === 7 || sum === 11) ? `${i} -> True` : `${i} -> False`);
    }   
}

solve(15)