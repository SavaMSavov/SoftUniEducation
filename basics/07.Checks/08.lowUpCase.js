function check (input){
    let first = input.shift().toLowerCase();
    let second = input.shift().toLowerCase();

    if(first===second){
        console.log('yes');
    }
    else {
        console.log('no')
    }
}
check(['Hello', 'heello'])