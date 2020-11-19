function solve(input = []) {
  let wagon = input.shift().split(` `).map(Number);
  let maxCap = +input.shift();

  for (let i = 0; i < input.length; i++) {
    let command = input[i].split(` `);

    if (command.length === 2) {
      wagon.push(+command[1]);
    } else {
      let passengersToAdd = +command[0];

      for (let j = 0; j < wagon.length; j++) {
        if (passengersToAdd + wagon[j] <= maxCap) {
          wagon[j] += passengersToAdd;
          break;
        }
      }
    }
  }

  console.log(wagon.join(` `));
}

solve(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
