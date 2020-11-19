function solve(number){
    let lastDigit = number % 10;

    let print;
    
    if(lastDigit === 1){
        print = `one`
    }
    else if(lastDigit === 2){
        print = `two`
    }
    else if(lastDigit === 3){
        print = `three`
    }
    else if(lastDigit === 4){
        print = `four`
    }
    else if(lastDigit === 5){
        print = `five`
    }
    else if(lastDigit === 6){
        print = `six`
    }
    else if(lastDigit === 7){
        print = `seven`
    }
    else if(lastDigit === 8){
        print = `eight`
    }
    else if(lastDigit === 9){
        print = `nine`
    }
    else if(lastDigit === 0){
        print = `zero`
    }
    console.log(print)
}

solve(513)