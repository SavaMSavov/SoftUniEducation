function sushi(input){

    let product = input.shift();
    let restaurant = input.shift();
    let count = +input.shift();
    let orders = input.shift();

    let price = 0;
    let totalPrice = 0;

    if(restaurant === `Sushi Zone`){
        if(product === `sashimi`){
            price = count * 4.99;
        }
        else if(product === `maki`){
            price = count * 5.29;

        }
        else if(product === `uramaki`){
            price = count * 5.99;

        }
        else if(product === `temaki`){
            price = count * 4.29;
        }

        if(orders === `Y`){
            totalPrice = price * 1.2;
        } 
        else{
            totalPrice = price;
        }
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
    }
    else if(restaurant === `Sushi Time`){
        if(product === `sashimi`){
            price = count * 5.49;
        }
        else if(product === `maki`){
            price = count * 4.69;
        }
        else if(product === `uramaki`){
            price = count * 4.49;

        }
        else if(product === `temaki`){
            price = count * 5.19;
        }

        if(orders === `Y`){
            totalPrice = price * 1.2;
        } 
        else{
            totalPrice = price;
        }
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
    }
    else if(restaurant === `Sushi Bar`){
        if(product === `sashimi`){
            price = count * 5.25;
        }
        else if(product === `maki`){
            price = count * 5.55;

        }
        else if(product === `uramaki`){
            price = count * 6.25;

        }
        else if(product === `temaki`){
            price = count * 4.75;
        }

        if(orders === `Y`){
            totalPrice = price * 1.2;
        } 
        else{
            totalPrice = price;
        }
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
    }
    else if(restaurant === `Asian Pub`){
        if(product === `sashimi`){
            price = count * 4.5;
        }
        else if(product === `maki`){
            price = count * 4.8;

        }
        else if(product === `uramaki`){
            price = count * 5.5;

        }
        else if(product === `temaki`){
            price = count * 5.5;
        }

        if(orders === `Y`){
            totalPrice = price * 1.2;
        } 
        else{
            totalPrice = price;
        }
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
    }
    else{
        console.log(`${restaurant} is invalid restaurant!`);
    }
}
sushi([`sashimi`,`Sushi Time`,`3`,`N`])