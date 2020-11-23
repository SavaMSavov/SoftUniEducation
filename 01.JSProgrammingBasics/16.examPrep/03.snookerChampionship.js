function snookerChampionship(input){

    let stage = input.shift();
    let typeTicket = input.shift();
    let countTicket = +input.shift();
    let photo = input.shift();
    let photoPrice = 40;
    let totalPrice = 0;

    let priceOfTicket;

    if(stage === `Quarter final`){
        if(typeTicket === `Standard`){
            priceOfTicket = 55.5;
        }
        else if(typeTicket === `Premium`){
            priceOfTicket = 105.2;
        }
        else if(typeTicket === `VIP`){
            priceOfTicket = 118.9;
        }
    }
    else if(stage === `Semi final`){
        if(typeTicket === `Standard`){
            priceOfTicket = 75.88;
        }
        else if(typeTicket === `Premium`){
            priceOfTicket = 125.22;
        }
        else if(typeTicket === `VIP`){
            priceOfTicket = 300.4;
        }
    }
    else if(stage === `Final`){
        if(typeTicket === `Standard`){
            priceOfTicket = 110.1;
        }
        else if(typeTicket === `Premium`){
            priceOfTicket = 160.66;
        }
        else if(typeTicket === `VIP`){
            priceOfTicket = 400;
        }
    }
    
    totalPrice = countTicket * priceOfTicket;

    if(totalPrice > 4000){
        photoPrice = 0;
        totalPrice *= 0.75;
    } 
    else if(totalPrice > 2500){
       totalPrice *= 0.9;
    } 

    if(photo === `Y`){
        totalPrice = totalPrice + countTicket * photoPrice;
    }
    console.log(totalPrice.toFixed(2));
}
snookerChampionship([`Semi final`,`VIP`,`9`,`Y`])