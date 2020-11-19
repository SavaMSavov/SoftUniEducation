function solve(numOne, numTwo){

    function factorial(num){
        let res = 1;

        for(let i = 1; i <= num; i++){
            res *= i;
        }
        return res;
    }

    let factorialOne = factorial(numOne);
    let factorialTwo = factorial(numTwo);

    let result = factorialOne / factorialTwo;
    console.log(result.toFixed(2));
}

solve(5, 2)