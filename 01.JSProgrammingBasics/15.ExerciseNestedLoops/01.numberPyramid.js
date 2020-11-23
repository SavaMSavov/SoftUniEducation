function numberPyramid(input){

    let n = +input.shift();
    let current = 1;
    let isBigger = false;
    let print = ``;

    for(let rows = 1; rows <= n; rows++){
        for(let cols = 1; cols <= rows; cols++){
            if(current > n){
                isBigger = true;
                break;
            }
            print += current + ` `;
            current++
        }
        console.log(print);
        print = ``;

        if(isBigger){
            break;
        }
    }
}
numberPyramid([`7`])