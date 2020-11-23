function vacation(input){
    let neededMoney = +input.shift();
    let ownedMoney = +input.shift();

    let spendCounter = 0;
    let dayCounter = 0;

    while(ownedMoney < neededMoney && spendCounter < 5){
        let comand = input.shift();
        let money = +input.shift();

        if(comand === `spend`){
            ownedMoney -= money;
            spendCounter++;
        } 
        else if( comand === `save`){
            ownedMoney += money;
            spendCounter = 0;
        }

        if(ownedMoney < 0){
            ownedMoney = 0;
        }

        dayCounter++;
        
        if(spendCounter === 5){
            console.log(`You can't save the money.`);
            console.log(dayCounter);
        }

        if(ownedMoney >= neededMoney){
            console.log(`You saved the money for ${dayCounter} days.`);
        }
    }
}
vacation ([`2000`, `1000`, `spend`, `1200`, `save`, `2000`])