function solve(arrOne = [], arrTwo = []){

    let resultArr = [];

    for(let i = 0; i < arrOne.length; i++){
        let element = arrOne[i];

        if(i % 2 === 0){
            element = +(element);
            resultArr.push(element + Number(arrTwo[i]));
        }   
        else{
            resultArr.push(element + arrTwo[i]);
        }
    }
    console.log(resultArr.join(` - `));
}

solve(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)