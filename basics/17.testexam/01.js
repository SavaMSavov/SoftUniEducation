function trip(input){

    let food = +input.shift();
    let suveniri = +input.shift();
    let hotelPrice = +input.shift();

    let distace = 420;
    let fuel = distace / 100 * 7;
    let fuelPrice = fuel * 1.85;
    let spend = 3 * food + 3 * suveniri;

    let totalMoney = fuelPrice + spend + (hotelPrice * 0.9) + (hotelPrice * 0.85) + (hotelPrice * 0.8);
    console.log(`Money needed: ${totalMoney.toFixed(2)}`);
}
trip([`100`,`50`,`500`])