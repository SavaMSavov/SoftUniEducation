function halfSum(input){
    let n = +input.shift();
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for(let i = 0; i < n; i++){
        let num = +input.shift();

        sum += num;

        if(num > max){
            max = num;
        }
    }
    sum -= max;
    
    if(sum == max){
        console.log(`Yes`);
        console.log(`Sum = ${sum}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(sum - max)}`);
    }
}
halfSum([`7`,`3`,`4`,`1`,`1`,`2`,`12`,`1`])