function graduation(input){
    let name = input.shift();
    let counter = 1;
    let gradesCount = input.length
    let sum = 0;
    let negative = 0;

    while(counter <= gradesCount){
        let grade = +input.shift();

        if(grade >= 4.00 && grade <= 6.00){
            sum += grade;
            counter++;
        } 
        else if(grade < 4){
            negative++;
            break;
        }
    }
    let average = (sum / gradesCount).toFixed(2);

    if(negative === 1){
        console.log(`${name} has been excluded at ${counter} grade`);
    } else{
        console.log(`${name} graduated. Average grade: ${average}`);
    }
}
graduation([`pesho`, `5`, `6`, `5`, `6`, `6`, `6`, `6`, `3`, `5`])