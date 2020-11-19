function solve(arrOne = [], arrTwo = []){

    arrOne.map((element) => {
        if(arrTwo.includes(element)){
            console.log(element)
        }
    });
}
solve(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)