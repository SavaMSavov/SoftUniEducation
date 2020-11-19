function solve(data = []){

    let resultArray = [];
    let originalSum = 0;
    let resultSum = 0;

    data.map((number, index) => {
        number % 2 === 0 ? number += index : number -= index;
        resultArray.push(number);
    });

    console.log(resultArray);
    console.log(originalSum = data.reduce((a, b) => a + b, 0));
    console.log(resultSum = resultArray.reduce((a, b) => a + b, 0));

}

solve([5, 15, 23, 56, 35])