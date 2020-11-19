function solve(password){

    function isValidPassLength(passLength){
        let isValid = true;

        if(passLength < 6 || passLength > 10){
            isValid = false;
        }

        return isValid;
    }

    function isBeenInRange(ch, start, end){
        return ch.charCodeAt(0) >= start.charCodeAt(0) && ch.charCodeAt(0) <= end.charCodeAt(0)
    }

    function containsOnlyLettersAndDigits(password){

        let isValid = true;
        for(let ch of password){
            if(!(isBeenInRange(ch, `A`, `Z`) || isBeenInRange(ch, `a`, `z`) || isBeenInRange(ch, `0`, `9`))){
                isValid = false;
            }
                 
        }
        return isValid;
    }

    function containsLeastTwoDigits(){

        let digitCounter = 0;
        for(let ch of password){
           if(isBeenInRange(ch, `0`, `9`)){
               digitCounter++;

               if(digitCounter === 2){
                   break;
               }
           }
        }

        return digitCounter === 2 ? true : false;
    }

    let isValidPassLengthVal = isValidPassLength(password.length);
    if(!isValidPassLengthVal){
        console.log(`Password must be between 6 and 10 characters`);
    }

    let containsOnlyLettersAndDigitsVal = containsOnlyLettersAndDigits(password);
    if(!containsOnlyLettersAndDigitsVal){
        console.log(`Password must consist only of letters and digits`);   
    }

    let containsLeastTwoDigitsVal = containsLeastTwoDigits(password);
    if(!containsLeastTwoDigitsVal){
        console.log(`Password must have at least 2 digits`);
    }

    if(isValidPassLengthVal && containsLeastTwoDigitsVal && containsOnlyLettersAndDigitsVal){
        console.log(`Password is valid`);
    }
}

solve(`logIn`)