function FishTank(input){
    let Lenght = input.shift();
    let Widgh = input.shift();
    let Heigth = input.shift();
    let percent = input.shift();

    let capacity = Lenght * Widgh * Heigth;
    let totalLiters = capacity * 0.001;
    let calculatedPercent = percent * 0.01;
    let needed = totalLiters * (1 - calculatedPercent);
    console.log(needed.toFixed(3));
}
FishTank([85,75,47,17])