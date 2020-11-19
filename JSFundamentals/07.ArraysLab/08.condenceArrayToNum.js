function solve(numbersInput){
    
    let numbers = numbersInput;
    let condensed = [];
     
    while(numbers.length > 1){
        
        condensed = [];

        for(let i = 0; i < numbers.length - 1; i++){
            condensed.push(numbers[i] + numbers[i + 1]);
        }

        numbers = condensed;
    }
    console.log(numbers[0])
}

solve([5,0,4,1,2])