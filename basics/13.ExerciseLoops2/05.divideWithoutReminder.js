function histogram(input){

    let n = +input.shift();

    let p1 = 0; // 2
    let p2 = 0; // 3
    let p3 = 0; // 4

    
    for(let i = 1; i <= n; i++){
        let number = +input.shift();

        if(number % 2 === 0){
            p1++;
        } 
        if( number % 3 === 0){
            p2++;
        }
        if(number % 4 === 0){
            p3++
        } 
    }

    let P1percent = ((p1 / n) * 100).toFixed(2);
    let P2percent = ((p2 / n) * 100).toFixed(2);
    let P3percent = ((p3 / n) * 100).toFixed(2);

    console.log(`${P1percent}%`);
    console.log(`${P2percent}%`);
    console.log(`${P3percent}%`);
}
histogram([`3`, `3`, `6`, `9`])