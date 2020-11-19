function fruitShop(input){
    let fruit = input.shift();
    let day = input.shift();
    let count = Number(input.shift());

    let bananaWeek = 2.50;
    let appleWeek = 1.20;
    let orangeWeek = 0.85;
    let grapefruitWeek = 1.45;
    let kiwiWeek = 2.70;
    let pineappleWeek = 5.50;
    let grapesWeek = 3.85;

    let bananaWeekend = 2.70;
    let appleWeekend = 1.25;
    let orangeWeekend = 0.90;
    let grapefruitWeekend = 1.60;
    let kiwiWeekend = 3.00;
    let pineappleWeekend = 5.60;
    let grapesWeekend = 4.20;

    let price;

    if(day === `Monday` || day === `Tuesday` || day === `Wednesday` || day === `Thursday` || day === `Friday`){
        if(fruit === `banana`){
            price = count * bananaWeek;
            console.log(price.toFixed(2));
        } 
        else if(fruit === `apple`){
            price = count * appleWeek;
            console.log(price.toFixed(2));
        } 
        else if(fruit === `orange`){
            price = count * orangeWeek;
            console.log(price.toFixed(2));
        }
        else if(fruit === `grapefruit`){
            price = count * grapefruitWeek;
            console.log(price.toFixed(2));
        }
        else if(fruit === `kiwi`){
            price = count * kiwiWeek;
            console.log(price.toFixed(2));
        }
        else if(fruit === `pineapple`){
            price = count * pineappleWeek;
            console.log(price.toFixed(2));
        }
        else if(fruit === `grapes`){
            price = count * grapesWeek;
            console.log(price.toFixed(2));
        } 
        else {
            console.log(`error`);
        }
    }
    else if(day === `Saturday` || day === `Sunday`){
        if(fruit === `banana`){
            price = count * bananaWeekend;
            console.log(price.toFixed(2));
        } 
        else if(fruit === `apple`){
            price = count * appleWeekend;
            console.log(price.toFixed(2));
        } 
        else if(fruit === `orange`){
            price = count * orangeWeekend;
            console.log(price.toFixed(2));
        }
        else if(fruit === `grapefruit`){
            price = count * grapefruitWeekend;
            console.log(price.toFixed(2));
        }
        else if(fruit === `kiwi`){
            price = count * kiwiWeekend;
            console.log(price.toFixed(2));
        }
        else if(fruit === `pineapple`){
            price = count * pineappleWeekend;
            console.log(price.toFixed(2));
        }
        else if(fruit === `grapes`){
            price = count * grapesWeekend;
            console.log(price.toFixed(2));
        } 
        else {
            console.log(`error`);
        }
    }
    else {
        console.log(`error`)
    }
}
fruitShop([`kiwi`, `Sunday`, `5`])