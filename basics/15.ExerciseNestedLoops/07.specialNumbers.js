function specialN(input) {
    let n = Number(input.shift());
    let special = ``;
    for (let num1 = 1; num1 <= 9; num1++) {
        for (let num2 = 1; num2 <= 9; num2++) {
            for (let num3 = 1; num3 <= 9; num3++) {
                for (let num4 = 1; num4 <= 9; num4++) {
                    if(n % num1 === 0 && n % num2 === 0 && n % num3 === 0 && n % num4 === 0){
                        special += (`${num1}${num2}${num3}${num4} `);
                        
                    }
                }
            }
        }
    }
    console.log(special);
}
specialN([`16`])