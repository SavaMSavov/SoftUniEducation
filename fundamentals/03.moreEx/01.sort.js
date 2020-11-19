function solve(a,b,c){

    let largest = Math.max(Math.max(a,b),c);
    let smallest = Math.min(Math.min(a,b),c);

    let middle = (a + b + c) - (smallest + largest);

    console.log(largest);
    console.log(middle);
    console.log(smallest)


}

solve(1,-2,3)