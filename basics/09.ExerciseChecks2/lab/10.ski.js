function skiTrip(input){
    let days = Number(input.shift());
    let room = input.shift();
    let rating = input.shift();

    let roomForOne = 18.00;
    let apartment = 25.00;
    let presidentApartment = 35.00;

    let nights = days - 1;
    let sum = 0;
    let discountSum = 0;
    let finalSum = 0;

    if(days < 10){
        if(room === `room for one person`){
            sum = nights * roomForOne;
            discountSum = sum;
        }
        else if(room === `apartment`){
            sum = nights * apartment;
            discountSum = sum - sum * 0.3;
        } 
        else if(room === `president apartment`){
            sum = nights * presidentApartment;
            discountSum = sum - sum * 0.1;
        }
    }
    else if(days >= 10 && days < 15){
        if(room === `room for one person`){
            sum = nights * roomForOne;
            discountSum = sum;
        }
        else if(room === `apartment`){
            sum = nights * apartment;
            discountSum = sum - sum * 0.35;
        } 
        else if(room === `president apartment`){
            sum = nights * presidentApartment;
            discountSum = sum - sum * 0.15;
        }
    }
    else if(days >= 15){
        if(room === `room for one person`){
            sum = nights * roomForOne;
            discountSum = sum;
        }
        else if(room === `apartment`){
            sum = nights * apartment;
            discountSum = sum - sum * 0.5;
        } 
        else if(room === `president apartment`){
            sum = nights * presidentApartment;
            discountSum = sum - sum * 0.2;
        }
    }
    if(rating === `positive`){
        finalSum = discountSum + discountSum * 0.25;
    } 
    else if(rating === `negative`){
        finalSum = discountSum - discountSum * 0.10;
    }
    console.log(finalSum.toFixed(2));
}
skiTrip([`14`, `apartment`, `positive`])