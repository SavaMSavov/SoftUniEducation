function oddEvenPos(input){

    let n = +input.shift();

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;

    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    
    for(let i = 1; i <= n; i++){

        let num = +input.shift();

        if( i % 2 === 0){
            evenSum += num;
            if(num >= evenMax){
                evenMax = num;
            } 
            if(num <= evenMin){
                evenMin = num
            }
        } else {
            oddSum += num;
            if(num >= oddMax){
                oddMax = num
            }
            if(num <= oddMin){
                oddMin = num;
            }
        }
    }

    if (oddMin == Number.MAX_SAFE_INTEGER) {
        oddMin = "No";
    } else {
        oddMin = oddMin.toFixed(2);
    }
    if (evenMin == Number.MAX_SAFE_INTEGER) {
        evenMin = "No";
    } else {
        evenMin = evenMin.toFixed(2);
    }
    if (oddMax == Number.MIN_SAFE_INTEGER) {
        oddMax = "No";
    } else {
        oddMax = oddMax.toFixed(2);
    }
    if (evenMax == Number.MIN_SAFE_INTEGER) {
        evenMax = "No";
    } else {
        evenMax = evenMax.toFixed(2);
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);
}
oddEvenPos([`6`,`2`,`3`,`5`,`4`,`2`,`1`])