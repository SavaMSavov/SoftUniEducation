function oddOrEvenSum(input){
    let n = +input.shift();

    let oddSum = 0;
    let evenSum = 0;
    
    for(let i = 0; i < n; i++){
        let number = +input.shift();

        if(i % 2 === 0){
            evenSum += number;
        } 
        else {
            oddSum += number;
        }
    }

    if(evenSum == oddSum){
        console.log(`Yes`);
        console.log(`Sum = ${evenSum}`);
    } 
    else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
    }
}
oddOrEvenSum([`4`,`10`,`50`,`60`,`20`])