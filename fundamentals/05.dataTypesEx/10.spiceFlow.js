function solve(startingYeld){

    let produced = 0;
    let days = 0;

    if(startingYeld < 100){
        console.log(days);
        console.log(produced);
    }
    else{
        while(startingYeld >= 100){
            produced += startingYeld - 26;
            startingYeld -= 10;
            days++
        }
        produced -= 26;
        console.log(days);
        console.log(produced);
    }
}

solve(111)