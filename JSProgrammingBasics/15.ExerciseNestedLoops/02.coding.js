function coding(input){

    strNumber = input.shift();

    for(let i = strNumber.length - 1; i >= 0; i--){
        let currentDigitToNum = +strNumber[i];

        if(currentDigitToNum == 0){
            console.log(`ZERO`);
            continue;
        }

        let print = ``;
        for(let n = 1; n <= currentDigitToNum; n++){
            print += String.fromCharCode(currentDigitToNum + 33);
        }
        console.log(print);
    }
}
coding([`2049`])