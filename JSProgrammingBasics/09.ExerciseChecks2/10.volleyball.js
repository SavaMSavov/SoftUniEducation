function volleyball(input){
    let year = input.shift();
    let holiday = +input.shift();
    let tripMainTown = +input.shift();

    let totalWeekends = 48;

    let sofiaWeekends = totalWeekends - tripMainTown;
    let sofiaGames = sofiaWeekends * 3.0 / 4;
    let mainTownGames = tripMainTown;
    let holidayGames = holiday * 2.0 / 3;

    let totalGames = sofiaGames + mainTownGames + holidayGames;

    if(year === `leap`){
        totalGames = totalGames * 1.15;
        console.log(Math.floor(totalGames));
    } else if(year === `normal`){
        console.log(Math.floor(totalGames));
    } else{
        console.log(`Wrong input`);
    }
}
volleyball([`leap`, `5`,`2`])