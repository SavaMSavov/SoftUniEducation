function cinema(input){
    let movie = input.shift();

    let students = 0;
    let kids = 0;
    let standards = 0;

    while(movie != `Finish`){

        let totalSeats = +input.shift();
        let soldSeats = 0;

        for(let i = 0; i < totalSeats; i++){

            let type = input.shift();

            if(type == `End`){
                break;
            }
            soldSeats++;
            switch(type){
                case `student`:
                students++;
                break; 
                
                case `standard`:
                standards++;
                break;

                case `kid`:
                kids++;
                break;
            }
        }
        console.log(`${movie} - ${(soldSeats/totalSeats*100).toFixed(2)}% full.`);
        movie = input.shift();
    }
    let totalSold = kids + standards + students;
    
    console.log(`Total tickets: ${totalSold}`);
    console.log(`${(students/totalSold*100).toFixed(2)}% student tickets.`);
    console.log(`${(standards/totalSold*100).toFixed(2)}% standard tickets.`);
    console.log(`${(kids/totalSold*100).toFixed(2)}% kids tickets.`);
}
cinema([`Taxi`, `10`,`standard`, `kid`, `student`, `student`,`standard`, `standard`, `End`, `Scary Movie`, `6`,
`student`,`student`,`student`,`student`,`student`,`student`,`Finish`])