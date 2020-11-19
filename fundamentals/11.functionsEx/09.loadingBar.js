function solve(num){

    let digit = Math.floor(num / 10);
    let symbol = `%`;
    let fill = `.`;

    if(num < 100){

        console.log(`${num}% [${symbol.repeat(digit)}${fill.repeat(10 - digit)}]`);
        console.log(`Still loading...`);
    }
    else{
        console.log(`${num}% [${symbol.repeat(digit)}${fill.repeat(10 - digit)}]`);
        console.log(`Complete!`)
    }
}

solve(100)