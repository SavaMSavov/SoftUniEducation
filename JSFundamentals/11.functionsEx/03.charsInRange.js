function solve(start, end){

    let charStart = start.charCodeAt();
    let charEnd = end.charCodeAt();

    let temp = 0;
    let print = ``;

    console.log()

    if(charEnd <= charStart){
        temp = charStart;
        charStart = charEnd;
        charEnd = temp;
    }

    for(let i = charStart +1; i < charEnd; i++){
        print += String.fromCharCode(i) + ` `;
    }

    console.log(print);
}

solve(`a`, `d`);
solve('#',':')