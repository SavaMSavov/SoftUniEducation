function solve(num, roundTo){

    let result;
    if(roundTo > 15){
        result = num.toFixed(15);
        console.log(parseFloat(result));
    }
    else{
        result = num.toFixed(roundTo);
        console.log(parseFloat(result));
    }
}
   
solve(10.5, 3)