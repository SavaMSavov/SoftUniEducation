function solve(a,b){

    let sum = 0;
    let result = ``

    for(let i = a; i <= b; i++){
        sum += i;
        result += i + ` `;
        
    }
    console.log(result);
    console.log(`Sum: ${sum}`)
}

solve(5, 10)