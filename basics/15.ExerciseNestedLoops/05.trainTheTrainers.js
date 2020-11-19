function trainTheTrainers(input){

    let judge = +input.shift();
    let command = input.shift();
    let allGrades = 0;
    let totalPresentations = 0;

    while(command != `Finish`){

        let presentation = command;
        let totalGrades = 0;

        for(let i = 1; i <= judge; i++){
            let grade = +input.shift();
            totalGrades += grade;
        }
        let avarage = totalGrades / judge;
        console.log(`${presentation} - ${avarage.toFixed(2)}.`);
        allGrades += avarage;

        totalPresentations++;
        command = input.shift();
    }
    if(command == `Finish`){
        console.log(`Student's final assessment is ${(allGrades / totalPresentations).toFixed(2)}.`)
    }
}
trainTheTrainers([`2`,`While-Loop`,`6.00`,`5.50`,`For-Loop`,`5.84`,`5.66`,`Finish`])