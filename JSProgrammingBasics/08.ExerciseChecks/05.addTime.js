function addTime(input){
    let hours = Number(input.shift());
    let minutes = Number(input.shift());

    minutes += hours * 60;
    minutes += 15;

    let endHours  = Math.floor(minutes / 60);
    let endMinutes = minutes - endHours * 60;

    if(endMinutes < 10){
        endMinutes = '0' + endMinutes;
    }
    if (endHours >= 24){
        endHours = endHours - 24;
    }
  
    console.log(`${endHours}:${endMinutes}`);

}
addTime(['1', '46'])