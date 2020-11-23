function solve(input){

    let balloonsPrice = 0.1;
    let flowersPrice = 1.5;
    let candlesPrice = 0.5;
    let ribbonPrice = 2;   // za metur

    let spent = 0;

    let balloonsCount = 0;
    let flowersCount = 0;
    let candlesCount = 0;
    let ribbonCount = 0;

    let budget = +input.shift();
    let command = input.shift();

    while(command != `stop`){

        type = command;
        let count = +input.shift();

        if(type === `balloons`){
            spent += count * balloonsPrice;
            balloonsCount += count;
        }
        else if(type === `flowers`){
            spent += count * flowersPrice;
            flowersCount += count;
        }
        else if(type === `candles`){
            spent += count * candlesPrice;
            candlesCount += count;
        }
        else if(type === `ribbon`){
            spent += count * ribbonPrice;
            ribbonCount += count;
        }
        if(spent >= budget){
            console.log(`All money is spent!`);
            break;
        }
        command = input.shift();
    }
    if(command == `stop`){
        console.log(`Spend money: ${spent.toFixed(2)}`);
        console.log(`Money left: ${(budget - spent).toFixed(2)}`);
    }
    console.log(`Purchased decoration is ${balloonsCount} balloons, ${ribbonCount} m ribbon, ${flowersCount} flowers and ${candlesCount} candles.`)
}

solve([`500`,`balloons`,`30`,`candles`,`20`,`flowers`,`100`,`ribbon`,`20`,`stop`])