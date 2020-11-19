function solve(n, k){

    let seq = [1];

    for(let current = 1; current < n; current++){

        let currSum = 0;

        for(let i = 1; i <= k; i++){

            if(seq[current - i] !== undefined){
                currSum += seq[current - i];
            }
        }
        seq.push(currSum);
    }
    console.log(seq.join(` `));
}

solve(6, 3)