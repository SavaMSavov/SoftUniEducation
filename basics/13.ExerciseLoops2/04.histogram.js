function histogram(input){

    let n = +input.shift();

    let p1 = 0; // <200
    let p2 = 0; // 200 - 399
    let p3 = 0; // 400 - 599
    let p4 = 0; // 600 - 799
    let p5 = 0; // >= 800
    
    for(let i = 1; i <= n; i++){
        let number = +input.shift();

        if(number < 200){
            p1++;
        } 
        else if( number >= 200 && number <= 399){
            p2++;
        }
        else if(number >= 400 && number <= 599){
            p3++
        } 
        else if(number >= 600 && number <= 799){
            p4++;
        }
        else {
            p5++;
        }
    }

    let P1percent = ((p1 / n) * 100).toFixed(2);
    let P2percent = ((p2 / n) * 100).toFixed(2);
    let P3percent = ((p3 / n) * 100).toFixed(2);
    let P4percent = ((p4 / n) * 100).toFixed(2);
    let P5percent = ((p5 / n) * 100).toFixed(2);

    console.log(`${P1percent}%`);
    console.log(`${P2percent}%`);
    console.log(`${P3percent}%`);
    console.log(`${P4percent}%`);
    console.log(`${P5percent}%`);
}
histogram([`7`, `800`, `801`, `250`, `199`, `399`, `599`, `799`])