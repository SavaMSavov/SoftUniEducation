function equalSums(input){

    let firstNum = +input.shift();
    let secondNum = +input.shift();
    let print = ``;

    for(let i = firstNum; i <= secondNum; i++){
        let currentNum = `` + i;
        let oddSum = 0;
        let evenSum = 0;

        for(j = 0; j < currentNum.length; j++){
            let currentDigit = currentNum.charCodeAt(j);

            if(j % 2 == 0){
                evenSum += currentDigit;
            }
            else {
                oddSum += currentDigit;
            }
        }
        if(oddSum == evenSum){
            print += i + ` `;
        }
    }
    console.log(print)
}
equalSums([`100000`,`100050`])