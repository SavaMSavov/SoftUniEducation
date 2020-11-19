function maxNumber(input){
    let n = +input.shift();
    let k = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while(k < n){
        let num = +input.shift();
                
        if(num >= max){
            max = num;
        }
    k++;
    }
    console.log(max);
}
maxNumber([`5`, `-120`, `-45.55`,`-150`,`-12`,`-6`])