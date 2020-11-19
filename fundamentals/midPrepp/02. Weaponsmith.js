function solve(input = []) {
  let parts = input.shift().split(`|`);
  let enter;

  while ((enter = input.shift()) !== `Done`) {
    let [command, directionOrCheckEvenOdd, index] = enter.split(` `);

    switch (command) {
      case `Move`:
        let id = Number(index);
        let newId = 0;
        let element = parts[id];

        if (directionOrCheckEvenOdd === `Left`) {
          if (parts[id]) {
            newId = id - 1;
            if (newId > -1 && newId < parts.length) {
              parts.splice(id, 1);
              parts.splice(newId, 0, element);
            }
          }
        }

        if (directionOrCheckEvenOdd === `Right`) {
          if (parts[id]) {
            newId = id + 1;
            if (newId > -1 && newId < parts.length) {
              parts.splice(id, 1);
              parts.splice(newId, 0, element);
            }
          }
        }
        break;

      case `Check`:
        let printEven = ``;
        let printOdd = ``;

        for (let i = 0; i < parts.length; i++) {
          if (i % 2 === 0) {
            printEven += parts[i] + ` `;
          } else {
            printOdd += parts[i] + ` `;
          }
        }
        if (directionOrCheckEvenOdd === `Even`) {
          console.log(printEven);
        }
        if (directionOrCheckEvenOdd === `Odd`) {
          console.log(printOdd);
        }
        break;
    }
  }
  console.log(`You crafted ${parts.join(``)}!`);
}

solve([
  `ha|Do|mm|om|er`,
  `Move Right 0`,
  `Move Left 3`,
  `Check Odd`,
  `Move Left 2`,
  `Move Left 10`,
  `Move Left 0`,
  `Done`
]);
