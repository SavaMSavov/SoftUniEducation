function solve(input = []) {
  let items = input.shift().split(`, `);
  
  for (let i = 0; i < input.length; i++) {
    let element = input[i];
    let splited = element.split(` - `);

    let command = splited[0];
    let newItem = splited[1];

    if (command === `Collect`) {
      if (!items.includes(newItem)) {
        items.push(newItem);
      }
    } else if (command === `Drop`) {
      if (items.includes(newItem)) {
        let index = items.indexOf(newItem);
        items.splice(index, 1);
      }
    } else if (command === `Combine Items`) {
      let forCombine = newItem.split(`:`);
      let firstItem = forCombine[0];
      let secondItem = forCombine[1];

      if (items.includes(firstItem)) {
        let indexOfFirstItem = items.indexOf(firstItem);
        if (indexOfFirstItem != -1) {
          items.splice(indexOfFirstItem + 1, 0, secondItem);
        }
      }
    } else if (command === `Renew`) {
      if (items.includes(newItem)) {
        let index = items.indexOf(newItem);
        if (index != -1) {
          items.splice(index, 1);
        }
        items.push(newItem);
      }
    } else if (command === `Craft!`) {
      console.log(items.join(`, `));
    }
  }
}

solve([`Iron, Wood, Sword`, `Collect - Gold`, `Drop - Wood`, `Craft!`]);

solve([
  `Iron, Sword`,
  `Drop - Bronze`,
  `Combine Items - Sword:Bow`,
  `Renew - Iron`,
  `Craft!`
]);
