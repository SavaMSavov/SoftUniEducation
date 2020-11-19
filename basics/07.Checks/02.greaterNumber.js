function greaterNumber(input){
    let a = Number(input.shift());
    let b = Number(input.shift());
    if(a>b){
        console.log(a);
    } else {
        console.log(b);
    }
}
greaterNumber([9,7])