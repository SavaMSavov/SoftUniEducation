function solve(letter){
    
    let result = letter.charCodeAt();
    
    if(result >= 65 && result <= 90){
        console.log(`upper-case`);
    }
    else if(result >= 97 && result <= 122){
        console.log(`lower-case`)
    }
    else{
        console.log(`Error!`)
    }
}

solve(`L`)