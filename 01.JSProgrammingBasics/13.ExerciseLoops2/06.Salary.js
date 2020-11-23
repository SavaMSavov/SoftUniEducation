function SalaryCalculator(input){

    let tabs = +input.shift();
    let salary = +input.shift();

    let facebook = 150;
    let instagram = 100;
    let reddit = 50;

    for(let i = 1; i <= tabs; i++){

        let site = input.shift();

        if(site === `Facebook`){
            salary -= facebook;
        }
        else if(site === `Instagram`){
            salary -= instagram;
        }
        else if(site === `Reddit`){
            salary -= reddit;
        } 

        if(salary <= 0){
            break;
        } 
    }
    if(salary > 0){
        console.log(salary);
    } else {
        console.log(`You have lost your salary.`);
    }
}
SalaryCalculator([`4`, `750`, `Facebook`, `Facebook`, `Stackoverflow.com`, `softuni.bg`])