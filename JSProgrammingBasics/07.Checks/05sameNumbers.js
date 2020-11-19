function sameNumbers(input){
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());

    if(a===b && b===c){
        console.log("yes");
    } else {
        console.log("no");
    }
}
sameNumbers([3,3,3])