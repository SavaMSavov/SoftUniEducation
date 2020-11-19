function solve(arrOne = [], arrTwo = []){

    let resultArr = [];

    arrOne.map((element, i) => {
        i % 2 === 0 ? resultArr.push(Number(element) + Number(arrTwo[i])) : resultArr.push(element + arrTwo[i]);
    });

    console.log(resultArr.join(` - `));
}

solve(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)