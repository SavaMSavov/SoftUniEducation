function market(input){

    let fantasyPrice = 14.9;
    let horrorPrice = 9.8;
    let romancePrice = 4.3;

    let target = +input.shift();
    let countFantasy = +input.shift();
    let countHorror = +input.shift();
    let countRomance = +input.shift();

    let sells = fantasyPrice * countFantasy + countHorror * horrorPrice + romancePrice * countRomance;
    let neto = sells * 0.8;

    if(neto > target){
        let left = neto - target;
        let bonus = Math.floor(left * 0.1);
        let donate = target + left - bonus;
        
        console.log(`${donate.toFixed(2)} leva donated.`);
        console.log(`Sellers will receive ${bonus} leva.`);
    }
    else {
        let needed = target - neto;
        console.log(`${needed.toFixed(2)} money needed.`);
    } 
}
market([`168`,`5`,`3`,`8`])