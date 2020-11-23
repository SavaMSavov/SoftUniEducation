function numbersNto1(input){
    let n = +input.shift();

    for(let i = n; i >= 1; i--){
        console.log(i)
    }
}
numbersNto1([`78`])