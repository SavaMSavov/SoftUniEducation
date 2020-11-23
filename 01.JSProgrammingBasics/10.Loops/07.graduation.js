function graduation(input){
    let name = input.shift();
    let counter = 1;
    let sum = 0;

    while(counter <= 12){
        let grade = +input.shift();

        if(grade >= 4.00){
            sum += grade;
            counter++;
        }
    }
    let average = (sum / 12).toFixed(2);
    console.log(`${name} graduated. Average grade: ${average}`);
}
graduation([])