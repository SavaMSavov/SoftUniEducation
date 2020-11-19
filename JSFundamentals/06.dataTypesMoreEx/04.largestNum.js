function solve(a,b,c){

    if(a >= b && a >= c){
        console.log(a);
    }
    else if(b >= a && b >= c){
        console.log(b);
    }
    else if(c >= a && c >= b){
        console.log(c);
    }
}

solve(3, 7, 3)