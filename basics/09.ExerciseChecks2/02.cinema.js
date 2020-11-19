function cinema(input){
    let type = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());

    let premiere = 12.00;
    let normal = 7.5;
    let discount = 5.00;

    let income = 0;

    if(type === `Premiere`){
        income = rows * columns * premiere;
    } 
    else if(type === `Normal`){
        income = rows * columns * normal;
    }
    else if(type === `Discount`){
        income = rows * columns * discount;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema([`Premiere`, `10`,`12`])