function leftRight(input){
    let n = +input.shift();
    let left = 0;
    let right = 0;

    for(let i = 0; i < 2*n; i++){
        let num = +input.shift();

        if(i < n){
            left += num;
        }
        else{
            right += num;
        }
    }
    if(left == right){
        console.log(`Yes, sum = ${left}`)
    } 
    else{
        console.log(`No, diff = ${Math.abs(left - right)}`);
    }
}
leftRight([`2`, `10`, `90`, `60`, `40`])