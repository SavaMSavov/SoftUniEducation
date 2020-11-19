function christmasDecoration(input){

    let budget = +input.shift();
    let command = input.shift();

    while(command != `Stop`){

        let decoration = command;
        let sum = 0;

        for(i = 0; i < decoration.length; i++){
            sum += decoration.charCodeAt(i);
        }
        if(sum <= budget){
            budget -= sum;
            console.log(`Item successfully purchased!`);
        } 
        else{
            console.log(`Not enough money!`);
            break;
        }
        command = input.shift();
    }
    if(command === `Stop`){
        console.log(`Money left: ${budget}`);
    }
}
christmasDecoration([`3000`,`star`,`Christmas tree`,`tinsel`,`Tree stand`])