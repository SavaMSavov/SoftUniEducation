function PetShop(input){
    let dogCount = Number(input.shift());
    let otherAnimals = Number(input.shift());

    let totalSum = dogCount * 2.5 + otherAnimals * 4;
    console.log(`${totalSum.toFixed(2)} lv.`)
}
PetShop([13,9])