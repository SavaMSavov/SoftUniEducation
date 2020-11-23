function solve(word){

    let print;
    switch(word){
        case `zero`: print = 0; break;
        case `one`: print = 1; break;
        case `two`: print = 2; break;
        case `three`: print = 3; break;
        case `four`: print = 4; break;
        case `five`: print = 5; break;
        case `six`: print = 6; break;
        case `seven`: print = 7; break;
        case `eight`: print = 8; break;
        case `nine`: print = 9; break;
    }

    console.log(print)
}

solve(`nine`)