function moving(input){
    let length = +input.shift();
    let width = +input.shift();
    let height = +input.shift();

    let space = length * width * height;
    let data = input.shift();

    while(data != `Done`){
        let box = +data;
        space -= box;

        if(space < 0){
            console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
            break;
        }
        data = input.shift();
    } if (space >= 0)
    console.log(`${space} Cubic meters left.`);
}
moving([`10`,`10`,`2`,`20`,`20`,`20`,`20`,`Done`])