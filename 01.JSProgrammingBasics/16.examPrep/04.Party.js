function party(input){

    let singerPrice = +input.shift();
    let command = +input.shift();
    let totalSum = 0;
    let totalGuests = 0

    while(command != `The restaurant is full`){
       
        let group = +command;
        
        if(group < 5){
          totalSum += group * 100;
        } 
        else{
            totalSum += group * 70;
        }
        totalGuests += group;
        command = input.shift();
    }

    if(totalSum >= singerPrice){
        console.log(`You have ${totalGuests} guests and ${totalSum - singerPrice} leva left.`);
    }
    else{
        console.log(`You have ${totalGuests} guests and ${totalSum} leva income, but no singer.`);
    }

}

party([`2800`,`5`,`5`,`4`,`6`,`6`,`12`,`12`,`The restaurant is full`])