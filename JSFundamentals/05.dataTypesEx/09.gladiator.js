function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice){


    let totalCost = 0;
    let shieldCount = 0;

    for(let i = 1; i <= lostFights; i++){
        if(i % 2 === 0){
            totalCost += helmetPrice;
        }
        if(i % 3 === 0){
            totalCost += swordPrice;
        }
        if(i % 6 === 0){
            totalCost += shieldPrice;
            shieldCount++;
        }
        if(shieldCount>0 && shieldCount % 2 === 0){
            totalCost += armourPrice;
            shieldCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`)
}

solve(23, 12.50, 21.50, 40, 200)