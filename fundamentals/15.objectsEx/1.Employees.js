function solve(arr = []){

    let output = [];

    for(let i = 0; i < arr.length; i++){
       let name = arr[i];
       let personalNumber = name.length;

       let person = { name: arr[i], personalNumber: personalNumber};

       output.push(person)
    }

    for (const element of output) {

        console.log(`Name: ${element.name} -- Personal Number: ${element.personalNumber}`);
        
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])