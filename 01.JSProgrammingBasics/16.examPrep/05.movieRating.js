function movieRating(input){

    let movies = +input.shift();
    let maxRating = 1;
    let minRating = 10
    let totalRating = 0;

    let bestTitle = ``;
    let wrostTitle = ``;

    for(let i = 1; i <= movies; i++){
        
        let title = input.shift();
        let rating = +input.shift();

        if(rating > maxRating){
            maxRating = rating;
            bestTitle = title;
        }
        if(rating < minRating){
            minRating = rating;
            wrostTitle = title;
        }
        totalRating += rating;
    }
    let avarageRating = totalRating / movies;

    console.log(`${bestTitle} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${wrostTitle} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${avarageRating.toFixed(1)}`);
}
movieRating([`3`,`Interstelar`,`8.5`,`Dangal`,`8.3`,`Green Book`,`8.2`])