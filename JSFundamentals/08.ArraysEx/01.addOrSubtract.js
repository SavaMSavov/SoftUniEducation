function solve(data = []){

    let resultArray = [];
    let originalSum = 0;
    let resultSum = 0;

    for(let i = 0; i < data.length; i++){
        
        let currentNumber = data[i];
        originalSum += currentNumber;

        if(currentNumber % 2 === 0){

            currentNumber += i;
            resultSum += currentNumber;

            resultArray.push(currentNumber);
        }
        else{
            currentNumber -= i;
            resultSum += currentNumber;
            resultArray.push(currentNumber);
        }
    }
    console.log(resultArray);
    console.log(originalSum);
    console.log(resultSum);
}

solve([5, 15, 23, 56, 35])