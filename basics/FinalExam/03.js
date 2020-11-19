function solve(input){

    let srok = input.shift();
    let type = input.shift();
    let dessert = input.shift();
    let months = +input.shift();

    let sweetPrice = 0;

    let price = 0;
    let finalPrice = 0;
    let total = 0;

    if(srok == `one`){
        if(type === `Small`){
            price = 9.98;
        }
        else if(type === `Middle`){
            price = 18.99;
        }
        else if(type === `Large`){
            price = 25.98;
        }
        else if(type === `ExtraLarge`){
            price = 35.99;
        }
    }
    else if(srok == `two`){
        if(type === `Small`){
            price = 8.58;
        }
        else if(type === `Middle`){
            price = 17.09;
        }
        else if(type === `Large`){
            price = 23.59;
        }
        else if(type === `ExtraLarge`){
            price = 31.79;
        }
    }
    if(dessert == `yes`){
        if(price <= 10){
            sweetPrice = 5.5;
        }
        else if(price <= 30){
            sweetPrice = 4.35;
        }
        else if(price > 30){
            sweetPrice = 3.85;
        }
    }
    finalPrice = price + sweetPrice;

    if(srok === `two`){
        finalPrice -= finalPrice * 0.0375;
    }
    total = finalPrice * months;

    console.log(`${total.toFixed(2)} lv.`)
}
solve([`two`,`Large`,`no`,`10`])