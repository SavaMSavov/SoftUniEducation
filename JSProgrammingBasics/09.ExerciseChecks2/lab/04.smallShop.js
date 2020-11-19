function smallShop(input){
    let product = input.shift();
    let city = input.shift();
    let count = Number(input.shift());
    let sum = 0;

    switch(product){
        case `coffee`:
            if(city === `Sofia`){
                sum = 0.5 * count;
                console.log(sum);
            } else if(city === `Plovdiv`){
                sum = 0.4 * count;
                console.log(sum);
            } else if(city === `Varna`){
                sum = 0.45 * count
                console.log(sum);
            } 
            else {
                console.log(`Wrong input`);
            }
        break;
        case `water`:
                if(city === `Sofia`){
                    sum = 0.8 * count;
                    console.log(sum);
                } else if(city === `Plovdiv`){
                    sum = 0.7 * count;
                    console.log(sum);
                } else if(city === `Varna`){
                    sum = 0.7 * count
                    console.log(sum);
                } 
                else {
                    console.log(`Wrong input`);
                }
        break;
        case `beer`:
                if(city === `Sofia`){
                    sum = 1.2 * count;
                    console.log(sum);
                } else if(city === `Plovdiv`){
                    sum = 1.15 * count;
                    console.log(sum);
                } else if(city === `Varna`){
                    sum = 1.10 * count
                    console.log(sum);
                } 
                else {
                    console.log(`Wrong input`);
                }
        break;
        case `sweets`:
                if(city === `Sofia`){
                    sum = 1.45 * count;
                    console.log(sum);
                } else if(city === `Plovdiv`){
                    sum = 1.30 * count;
                    console.log(sum);
                } else if(city === `Varna`){
                    sum = 1.35 * count
                    console.log(sum);
                } 
                else {
                    console.log(`Wrong input`);
                }
        break;
        case `peanuts`:
                if(city === `Sofia`){
                    sum = 1.6 * count;
                    console.log(sum);
                } else if(city === `Plovdiv`){
                    sum = 1.5 * count;
                    console.log(sum);
                } else if(city === `Varna`){
                    sum = 1.55 * count
                    console.log(sum);
                } 
                else {
                    console.log(`Wrong input`);
                }
        break;
        default:
            console.log(`Wrong input`)
    }
}
smallShop([`coffee`, `Varna`, `2`])