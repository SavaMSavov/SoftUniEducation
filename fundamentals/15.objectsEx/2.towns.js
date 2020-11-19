function solve(arr = []){

    let output = [];

    for(let i = 0; i < arr.length; i++){

        let splited = arr[i].split(` | `);

        let town = splited[0];
        let latitude = Number(splited[1]).toFixed(2);
        let longtitude = Number(splited[2]).toFixed(2);

        let object = {town, latitude, longtitude}
 
        output.push(object)
    }

    for (const element of output) {
        console.log(`{ town: '${element.town}', latitude: '${element.latitude}', longitude: '${element.longtitude}' }`);
    }
}



solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])