function solve(number){

    let sum = 0;

    while(number > 0){
        let digit = number % 10;
        sum += digit; 

        number = parseInt(number /10);
    }
    console.log(sum)
}
solve(543)