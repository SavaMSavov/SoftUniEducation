function scholarship(input){
    let salary = Number(input.shift());
    let grades = Number(input.shift());
    let minSalary = Number(input.shift());
    let gradeScholarship = 0;
    let socialScholarship = 0;
    if(salary < minSalary) {
        if(grades > 4.50) {
            socialScholarship = minSalary * 0.35;
        }
    }
    if(grades >= 5.5){
        gradeScholarship = grades * 25; 
    }
    if(socialScholarship > gradeScholarship){
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else if(gradeScholarship > socialScholarship){
        console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`)
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}
scholarship([`300.00`,`5.65`,`420.00`])