function onTime(input){
    let examHour = Number(input.shift());
    let examMinutes = Number(input.shift());
    let arrivingHour = Number(input.shift());
    let arrivingMinutes = Number(input.shift());
    let time;

    if(examHour === arrivingHour){
        if(examMinutes >= arrivingMinutes){
            if(examMinutes - arrivingMinutes > 30){
                console.log(`Early`);
                console.log(`${examMinutes - arrivingMinutes} minutes before the start`);
            } else if(examMinutes - arrivingMinutes < 30 && examMinutes - arrivingMinutes != 0){
                console.log(`On time`);
                console.log(`${examMinutes - arrivingMinutes} minutes before the start`);
            } else {
                console.log(`On time`);
            }
        } 
        else if(examMinutes < arrivingMinutes){
          console.log(`Late`);
          console.log(`${arrivingMinutes - examMinutes} minutes after the start`);
        }
    }
    if(examHour < arrivingHour){
        let delayTotalMinutes = (60 - examMinutes) + arrivingMinutes + (( arrivingHour - examHour - 1)*60);
        let delayHours = Math.floor(delayTotalMinutes / 60);
        let delayMinutes = delayTotalMinutes % 60;
        delayMinutes = delayMinutes.toString().padStart(2, '0');
        console.log(`Late`);
        if(delayHours === 0) {
            console.log(`${delayMinutes} minutes after the start`);
        } else {
            console.log(`${delayHours}:${delayMinutes} hours after the start`);
        }
    }
    if(examHour > arrivingHour) {
        let earlyTotalMinutes = (60 - arrivingMinutes) + examMinutes + (( examHour - arrivingHour - 1 )*60);
        let earlyHours = Math.floor(earlyTotalMinutes / 60)
        let earlyMinutes = earlyTotalMinutes % 60
        earlyMinutes = earlyMinutes.toString().padStart(2, '0')
        if(earlyHours === 0) {
            if(earlyMinutes === 0) {
                console.log(`On time`);
            } else if(earlyMinutes <= 30) {
                console.log(`On time`);
                console.log(`${earlyMinutes} minutes before the start`);
            } else {
                console.log(`Early`);
                console.log(`${earlyMinutes} minutes before the start`);
            }
        } else {
            console.log(`Early`);
            console.log(`${earlyHours}:${earlyMinutes} hours before the start`);
        }
    }
}
onTime([`9`,`30`,`8`,`30`])


