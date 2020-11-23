function newHouse(input){

    let flower = input.shift();
    let count = Number(input.shift());
    let budget = Number(input.shift());

    let rose = 5;
    let dahlia = 3.8;
    let tulip = 2.8;
    let narciss = 3;
    let gladiola = 2.5;

    let totalPrice;

    if(flower === `Roses`){
        if(count > 80){
            totalPrice = count * rose * 0.9;
        } else {
            totalPrice = count * rose;
        }
    }
    else if(flower === `Dahlias`){
        if(count > 90){
            totalPrice = count * dahlia * 0.85;
        } else {
            totalPrice = count * dahlia;
        }
    }
    else if(flower === `Tulips`){
        if(count > 80){
            totalPrice = count * tulip * 0.85;
        } else{
            totalPrice = count * tulip;
        }
    }
    else if(flower === `Narcissus`){
        if(count < 120){
            totalPrice = count * narciss * 1.15;
        } else{
            totalPrice = count * narciss;
        }
    }
    else if(flower === `Gladiolus`){
        if(count < 80){
            totalPrice = count * gladiola * 1.2;
        } else{
            totalPrice = count * gladiola;
        }
    }
    else{
        console.log(`Wrong input`);
    }
    if(totalPrice <= budget){
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else if(totalPrice > budget){
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    }
}
newHouse([`Roses`,`55`,`250`])