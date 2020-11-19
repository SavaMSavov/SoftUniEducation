function solve(arr = [], rotation){

    for(let i = 0; i < rotation; i++){
        let element = arr.shift();
        arr.push(element);
    }

    console.log(arr.join(` `));
}

solve([51, 47, 32, 61, 21], 2)