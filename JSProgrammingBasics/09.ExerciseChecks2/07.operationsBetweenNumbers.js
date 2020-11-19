function operationBetweenNumbers(input){
    let N1 = Number(input.shift());
    let N2 = Number(input.shift());
    let sign = input.shift();
    let result;

    if(sign === `+`){
        result = N1 + N2;
        if(result % 2 === 0 ){
            console.log(` ${N1} ${sign} ${N2} = ${result} - even`);
        } else{
            console.log(` ${N1} ${sign} ${N2} = ${result} - odd`);
        }
    }
    else if(sign === `-`){
        result = N1 - N2;
        if(result % 2 === 0 ){
        console.log(` ${N1} ${sign} ${N2} = ${result} - even`);
        } else{
        console.log(` ${N1} ${sign} ${N2} = ${result} - odd`);
        }
    }
    else if(sign === `*`){
        result = N1 * N2;
        if(result % 2 === 0 ){
            console.log(` ${N1} ${sign} ${N2} = ${result} - even`);
        } else{
            console.log(` ${N1} ${sign} ${N2} = ${result} - odd`);
        }
    }
    else if(sign === `/`){
        if(N2 === 0){
            console.log(`Cannot divide ${N1} by zero`);
        } else{
            result = N1 / N2;
            console.log(`${N1} ${sign} ${N2} = ${result.toFixed(2)}`);
        }
    }
    else if(sign === `%`){
        if(N2 === 0){
            console.log(`Cannot divide ${N1} by zero`);
        } else{
            result = N1 % N2;
            console.log(`${N1} ${sign} ${N2} = ${result}`);
        }
    }
}
operationBetweenNumbers([`10`,`12`,`+`])