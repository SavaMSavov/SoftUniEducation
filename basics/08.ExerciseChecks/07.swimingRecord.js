function recordSwiming(input){
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let seconds = Number(input.shift());

    let IvanSeconds = distance * seconds;
    let delay = (Math.floor(distance / 15)) * 12.5;

    let IvanTime = IvanSeconds + delay;
    
    if( record > IvanTime){
        console.log(`Yes, he succeeded! The new world record is ${IvanTime.toFixed(2)} seconds.`);
    }
    else if(record <= IvanTime){
        console.log(`No, he failed! He was ${(IvanTime - record).toFixed(2)} seconds slower.`);
    } 
}
recordSwiming([`10464`, `1500`, `20`])