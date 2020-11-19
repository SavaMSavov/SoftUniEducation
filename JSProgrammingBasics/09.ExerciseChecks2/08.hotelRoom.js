function hotelRoom(input){
    let month = input.shift();
    let nights = Number(input.shift());
    let studioPrice;
    let apartmentPrice;

    if(month === `May` || month === `October`){
        studioPrice = 50;
        apartmentPrice = 65;
    } else if(month === `June` || month === `September`){
        studioPrice = 75.20;
        apartmentPrice = 68.70;
    } else if(month === `July` || month === `August`){
        studioPrice = 76;
        apartmentPrice = 77;
    } else{
        console.log(`Wrong input`);
    }

    if((nights > 7 && nights <= 14) && (month === `May` || month === `October`)){
        studioPrice = studioPrice * 0.95;
    } else if(nights > 14 && (month === `May` || month === `October`)){
        studioPrice = studioPrice * 0.7;
    } else if(nights > 14 && (month === `June` || month === `September`)){
        studioPrice = studioPrice * 0.8;
    }
    if(nights > 14){
        apartmentPrice = apartmentPrice * 0.9;
    }
    console.log(`Apartment: ${(nights * apartmentPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studioPrice).toFixed(2)} lv.`);
}
hotelRoom([`May`,`15`])