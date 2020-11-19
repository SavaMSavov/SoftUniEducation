function fishingBoat(input){
    let budget = Number(input.shift());
    let season = input.shift();
    let count = Number(input.shift());

    let rent;

    let rentSpring = 3000;
    let rentSummer = 4200;
    let rentAutumn = 4200;
    let rentWinter = 2600;

   if(season === `Spring`){
        if(count <= 6){
            rent = rentSpring * 0.9;
        } 
        else if(count >= 7 && count <= 11){
            rent = rentSpring * 0.85;
        }
        else if(count >= 12){
            rent = rentSpring * 0.75;
        }
    }
    else if(season === `Summer`){
        if(count <= 6){
            rent = rentSummer * 0.9;
        } 
        else if(count >= 7 && count <= 11){
            rent = rentSummer * 0.85;
        }
        else if(count >= 12){
            rent = rentSummer * 0.75;
        }   
    }
   else if(season === `Autumn`){
        if(count <= 6){
            rent = rentAutumn * 0.9;
        } 
        else if(count >= 7 && count <= 11){
            rent = rentAutumn * 0.85;
        }
        else if(count >= 12){
            rent = rentAutumn * 0.75;
        }   
    }
   else if(season === `Winter`){
        if(count <= 6){
            rent = rentWinter * 0.9;
        } 
        else if(count >= 7 && count <= 11){
            rent = rentWinter * 0.85;
        }
        else if(count >= 12){
            rent = rentWinter * 0.75;
        }   
    }
    else {
        console.log(`Wrong input`);
    }
    if(count % 2 == 0  && season != `Autumn`){
        rent = rent * 0.95;
    } 
    if(budget < rent){
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
    } 
    else if(budget >= rent){
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    }
}
fishingBoat([`3000`,`Summer`,`11`])