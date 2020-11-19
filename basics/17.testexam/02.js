function spaceShip(input){

    let shirina = +input.shift();
    let duljina = +input.shift();
    let visochina = +input.shift();

    let visochinaAstronavt = +input.shift();

    let totalSpace = shirina * duljina * visochina;
    let roomSize = 2 * 2 * (visochinaAstronavt + 0.4);

    let broiAstronavti = Math.floor(totalSpace / roomSize);

    if(broiAstronavti >= 3 && broiAstronavti <= 10){
        console.log(`The spacecraft holds ${broiAstronavti} astronauts.`);
    }
    else if(broiAstronavti < 3){
        console.log(`The spacecraft is too small.`);
    }
    else if(broiAstronavti > 10){
        console.log(`The spacecraft is too big.`);
    }
}

spaceShip([`3.5`, `4`, `5`, `1.7`])