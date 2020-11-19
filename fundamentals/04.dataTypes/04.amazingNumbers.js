/* function solve(num){

    let currentNumber = num;
    let sum = 0;
    while(currentNumber > 0){
        let digit = currentNumber % 10;
        sum += digit; 

        currentNumber = parseInt(currentNumber /10);
    }
    if(sum.toString().includes(9)){
        console.log(`${num} Amazing? True`);
    }
    else{
        console.log(`${num} Amazing? False`);
    }
}
solve(1233)
*/

function solve(num){

    num = num.toString();
    let sum = 0;

    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    let result = sum.toString().includes(`9`);
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);
}

solve(1233)