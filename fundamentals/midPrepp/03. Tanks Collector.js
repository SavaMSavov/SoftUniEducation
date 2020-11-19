function solve(input = []) {
  let tanks = input.shift().split(`, `);
  let commandsCount = input.shift();

  for (let i = 0; i < commandsCount; i++) {
    let tokens = input.shift().split(`, `);
    let action = tokens[0];
    let nameOrIndex = tokens[1];
    let secondName = tokens[2];

    if (action === `Add`) {
      if (tanks.includes(nameOrIndex)) {
        console.log(`Tank is already bought`);
      } else {
        tanks.push(nameOrIndex);
        console.log(`Tank successfully bought`);
      }
    } else if (action === `Insert`) {
      let index = Number(nameOrIndex);
      if (!tanks[index]) {
        console.log(`Index out of range`);
      } else {
        if (!tanks.includes(secondName)) {
          tanks.splice(index, 0, secondName);
          console.log(`Tank successfully bought`);
        } else {
          console.log(`Tank is already bought`);
        }
      }
    } else if (action === `Remove`) {
      if (tanks.includes(nameOrIndex)) {
        tanks.splice(tanks.indexOf(nameOrIndex), 1);
        console.log(`Tank successfully sold`);
      } else {
        console.log(`Tank not found`);
      }
    } else if (action === `Remove At`) {
      let index = Number(nameOrIndex);
      if (!tanks[index]) {
        console.log(`Index out of range`);
      } else {
        tanks.splice(index, 1);
        console.log(`Tank successfully sold`);
      }
    }
  }
  console.log(tanks.join(`, `));
}

/*solve([`T-34-85 Rudy, SU-100Y, STG`,
`3`,
`Add, King Tiger(C)`,
`Insert, 2, IS-2M`,
`Remove, T-34-85 Rudy`,
])*/

solve([
  `T 34, T 34 B, T92, AMX 13 57`,
  `4`,
  `Add, T 34`,
  `Remove, AMX CDC`,
  `Insert, 10, M60`,
  `Remove At, 1`
]);
