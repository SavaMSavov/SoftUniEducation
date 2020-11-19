function building(input){

    let floors = +input.shift();
    let rooms = +input.shift();

    for(let i = floors; i >= 1; i--){
        let result = ``;
        let type = ``;

        if(i % 2 == 0){
            type = `O`;
        } 
        else{
            type = `A`;
        }
        if(i == floors){
            type = `L`;
        }

        for(let j = 0; j < rooms; j++){
            result += `${type}${i}${j} `;
        }
        console.log(result);
    } 
}
building([`6`,`4`])