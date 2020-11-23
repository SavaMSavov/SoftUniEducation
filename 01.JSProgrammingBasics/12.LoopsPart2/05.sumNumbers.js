function sumnumbers(input){
    let n = +input.shift();
    let sum = 0;

    for(let i = 0; i < n; i++){
        let currentNumber = +input.shift();
        sum += currentNumber;
    }
    console.log(sum);
}
sumnumbers([`2`, `10`, `20`])