function multiplyTable(input){

    let num = +input.shift();
    let fisrtsDigit = num % 10;
    let secondDigit = (num / 10) % 10;
    let thirdDigit = (num / 100) % 10;

    for(let a = 1; a <= fisrtsDigit; a++){
        for (let b = 1; b <= secondDigit; b++){
            for(let c = 1; c <= thirdDigit; c++){
                let result = a * b * c;
                console.log(`${a} * ${b} * ${c} = ${result};`);
            }
        }
    }
}

multiplyTable([`234`])