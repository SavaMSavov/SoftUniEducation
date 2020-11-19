function password(input){
    let n = +input.shift();
    let l = +input.shift();
    let print = ``;

    let letter = 97 + l;

    for(let first = 1; first < n; first++){
        for(let second = 1; second < n; second++){
            for(let third = 97;  third < letter; third++){
                for(let fourth = 97; fourth < letter; fourth++){
                    for(let fifth = 2 ; fifth <= n; fifth++){
                        if(fifth > first && fifth > second){
                            print += `${first}${second}${String.fromCharCode(third)}${String.fromCharCode(fourth)}${fifth} ` ;
                        }                     
                    }
                }
            }
        }
    }   
    console.log(print); 
}
password([`2`,`4`])