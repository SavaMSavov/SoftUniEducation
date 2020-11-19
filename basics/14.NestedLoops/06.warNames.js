function solve(input){

    let name = input.shift();
    let max = Number.MIN_SAFE_INTEGER;
    let winner = ``;

    while (name != `STOP`){
        let sum = 0;

        for(let i = 0; i < name.length; i++){
            sum += name.charCodeAt(i);
        }
            
        if(sum > max){
            max = sum;
            winner = name;
        }
        name = input.shift();
    }
    console.log(`Winner is ${winner} - ${max}!`);
}
solve([`Petar`,`Georgi`,`Stanimir`,`STOP`])