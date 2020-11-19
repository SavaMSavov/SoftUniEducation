function solve(a, b, c){
    
    let min;
    if(a <= b && a <= c){
        min = a;
    }
    else if(b <= a && b <= c){
        min = b;
    }
    else if(c <= a && c <= b){
        min = c;
    }

    console.log(min)
}

solve(2, 5, 3)