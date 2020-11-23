function solve(arrOne = [], arrTwo = []){

    for(let i = 0; i < arrOne.length -1; i++ ){

        let element = arrOne[i];

        for(let j = 0; j < arrTwo.length - 1; j++){

            let secondElement = arrTwo[j];


            if(element === secondElement){
                console.log(element);
            }
        }
    }
}

solve(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)