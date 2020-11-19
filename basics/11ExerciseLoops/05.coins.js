function coins(input){
    let change = +input.shift();
    change = Math.floor(change * 100);
    let counter = 0;

    while(change > 0){
        if(change - 200 >= 0){
            change = change - 200;
            counter++;
        } 
        else if(change - 100 >= 0){
            change = change - 100;
            counter++;
        }
        else if(change - 500 >= 0){
            change = change - 50;
            counter++;
        }
        else if(change - 20 >= 0){
            change = change - 20;
            counter++;
        }
        else if(change - 10 >= 0){
            change = change - 10;
            counter++;
        }
        else if(change - 5 >= 0){
            change = change - 5;
            counter++;
        }
        else if(change - 2 >= 0){
            change = change - 2;
            counter++;
        }
        else if(change - 1 >= 0){
            change = change - 1;
            counter++;
        }
    }
    console.log(counter);
}
coins([`0.34`])