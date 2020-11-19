function stepsCalculator(input){
    let data = input.shift();
    let goal = 10000;
    let done = 0;

    while(data != `Going home`){
        done += +data;
        
        if(done >= goal){
            console.log(`Goal reached! Good job!`);
            break;
        } 
        data = input.shift();
    }

    if(data === `Going home`){
        data = input.shift();
        done += +data;

        if(done < goal){
            console.log(`${goal - done} more steps to reach goal.`);
        } else {
        console.log(`Goal reached! Good job!`);
        }
    }
}
stepsCalculator([`1000`, `1500`, `2000`,`6500`])