function solve(arr = []){

    let result = [];

    for (const element of arr) {

        if(element >= 0){
            result.push(element)
        }
        else{
            result.unshift(element);
        }
    }

    for (const element of result) {

        console.log(element);
        
    }

}

solve([7, -2, 8, 9])