function personalTitle(input){
    let age = Number(input.shift());
    let gender = input.shift();

    if(gender === `f`){
        if(age >= 16){
            console.log(`Ms.`)
        } 
        else{
            console.log(`Miss`)
        }
    }
    else if(gender === `m`){
        if(age >= 16){
            console.log(`Mr.`)
        } 
        else{
            console.log(`Master`)
        }
    } 
    else{
        console.log(`Wrong input`);
    }
} 
personalTitle([`14`, `f`])