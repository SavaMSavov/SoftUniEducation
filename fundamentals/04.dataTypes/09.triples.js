function solve(num){

    let result = ``;

    for(let i = 0; i < num; i++){
        let letter1 = String.fromCharCode(97 + i);

        for (let i = 0; i < num; i++){
            let letter2 = String.fromCharCode(97 + i);

            for(let i = 0; i < num; i++){
                let letter3 = String.fromCharCode(97 + i);
                result += letter1 + letter2 + letter3 + ` \n`;
            }
        }
    }
    console.log(result);
}

solve(3)