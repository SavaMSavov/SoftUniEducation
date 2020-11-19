function solve(a, b, c){
    function sum(a,b){
        return a + b;
    }
    function subtract(a,b){
        return a - b;
    }
    let sumRes = sum(a,b);
    let finalResult = subtract(sumRes, c);
    console.log(finalResult);
}

solve(23, 6, 10)