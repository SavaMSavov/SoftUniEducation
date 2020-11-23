function solve(count, type, day){

    let price = 0;
    let total = 0;

    if(day === `Friday`){
        if(type === `Students`){
            price = 8.45;
        }
        else if(type === `Business`){
            price = 10.9;
        }
        else if(type === `Regular`){
            price = 15;
        }
    }
    else if(day === `Saturday`){
        if(type === `Students`){
            price = 9.8;
        }
        else if(type === `Business`){
            price = 15.6;
        }
        else if(type === `Regular`){
            price = 20;
        }
    }
    else if(day === `Sunday`){
        if(type === `Students`){
            price = 10.46;
        }
        else if(type === `Business`){
            price = 16;
        }
        else if(type === `Regular`){
            price = 22.5;
        }
    }

    total = count * price;

    if(type === `Students` && count >= 30){
        total = total * 0.85;
    }

    if(type === `Business` && count >= 100){
        total = total - 10 * price;
    }

    if(type === `Regular` && count >= 10 && count <= 20){
        total = total * 0.95;
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday"
    )