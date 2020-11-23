function ProjectCreation(input){
    let name = input.shift();
    let projectsCount = Number(input.shift());

    let hours = projectsCount * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${projectsCount} project/s.`);
}
ProjectCreation(["Sava" , 4])