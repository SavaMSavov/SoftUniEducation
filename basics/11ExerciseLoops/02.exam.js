function exam(input){
    let inputOfBadGrades = +input.shift();

    let countForBadGrades = 0;
    let sumGrades = 0;
    let counterForGrades = 0;
    let lastProblem = ``;

    while(countForBadGrades < inputOfBadGrades){
        let nameExercise = input.shift();
        let grade = +input.shift();
        
        if(nameExercise === `Enough`){
            let avarage = sumGrades / counterForGrades;
            console.log(`Average score: ${avarage.toFixed(2)}`);
            console.log(`Number of problems: ${counterForGrades}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        counterForGrades++;
        sumGrades += grade;
    
        if(grade <= 4.00){
            countForBadGrades++
        }

        lastProblem = nameExercise;
    
        if(countForBadGrades == inputOfBadGrades){
            console.log(`You need a break, ${countForBadGrades} poor grades.`)
        }
    }
}
exam([`3`, `Money`, `6`, `Story`,`4`, `Spring time`, `5`, `Bus`, `6`, `Enough`])


