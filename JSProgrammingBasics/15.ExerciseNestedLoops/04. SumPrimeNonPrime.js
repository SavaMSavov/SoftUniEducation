function solve(input){

    let command = input.shift();

    let primeSum = 0;
    let nonPrimeSum = 0;

    while(command != `stop`){
        let num = +command;

        if(num < 0){
            console.log(`Number is negative.`);
            command = input.shift();
            continue;
        }
        let isPrime = true;

        if(num == 1){
            isPrime = false;
        }
        else if(num == 2){
            isPrime = true;
        }
        else{
            for(let i = num; i >= 2; i--){
                if(num % i == 0 && num != i){
                    isPrime = false;
                    break;
                }
            }
        }

        if(isPrime){
            primeSum += num;
        }
        else{
            nonPrimeSum += num;
        }
        command = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}
solve([`3`,`9`,`0`,`7`,`19`,`4`,`stop`])