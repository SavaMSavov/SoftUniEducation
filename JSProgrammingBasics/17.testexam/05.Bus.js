function bus(input){

    let pasagers = +input.shift();
    let stops = +input.shift();

    for(let i = 1; i <= stops; i++){

        let outPasagers = +input.shift();
        let inPasagers = +input.shift();

        if(i % 2 == 1){
            pasagers = pasagers + inPasagers + 2 - outPasagers;
        }
        else{
            pasagers = pasagers + inPasagers - 2 - outPasagers;
        }
    }
    console.log(`The final number of passengers is : ${pasagers}`);
}

bus([`20`,`2`,`10`,`5`,`5`,`3`])