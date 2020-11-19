function solve(input){

    let guest = +input.shift();
    let presents = +input.shift();

    let a = 0;
    let b = 0;
    let v = 0;
    let g = 0;

    for(let i = 1; i <= presents; i++){
        
        let category = input.shift();

        if(category === `A`){
            a++;
        }
        else if(category === `B`){
            b++;
        }
        else if(category === `V`){
            v++;
        }
        else if(category === `G`){
            g++;
        }
    }
    let aPercent = a / presents * 100;
    let bPercent = b / presents * 100;
    let vPercent = v / presents * 100;
    let gPercent = g / presents * 100;
    let guestPercent = presents / guest * 100;

    console.log(`${aPercent.toFixed(2)}%`);
    console.log(`${bPercent.toFixed(2)}%`);
    console.log(`${vPercent.toFixed(2)}%`);
    console.log(`${gPercent.toFixed(2)}%`);
    console.log(`${guestPercent.toFixed(2)}%`);
}
solve([`76`,`10`,`A`,`V`,`V`,`V`,`G`,`B`,`A`,`V`,`B`,`B`])