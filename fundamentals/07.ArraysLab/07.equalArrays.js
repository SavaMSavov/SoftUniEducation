function solve(arr1, arr2){

    for(let i = 0; i < arr1.length; i++){
        arr1[i] = +(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++){
        arr2[i] = +(arr2[i]);
    }

    let sum = 0;
    let areSame = false;
    let differentIndex = -1;

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            areSame = false;
            differentIndex = i;
            break;
        }
        else{
            areSame = true;
            sum += arr1[i];
        }
    }

    if(areSame){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
    else{
        console.log(`Arrays are not identical. Found difference at ${differentIndex} index`);
    }
}
solve(['10','20','30'], ['10','20','30'])