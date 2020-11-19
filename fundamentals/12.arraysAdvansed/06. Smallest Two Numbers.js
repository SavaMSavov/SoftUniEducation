function solve(numbers = []){

    let sorted = numbers.sort((a, b) => a - b).slice(0, 2);

    console.log(sorted.join(` `));
}

solve([30, 15, 50, 5])