function solve(input = []) {
  let squad = input.shift().split(` `);

  for (let i = 0; i < input.length; i++) {
    let [command, name, index] = input[i].split(` `);
    let subCommand = name;

    switch (command) {
      case `Join`:
        join(name);
        break;
      case `Jump`:
        jump(name, index);
        break;
      case `Dive`:
        dive(subCommand);
        break;
      case `First`:
        first(subCommand);
        break;
      case `Last`:
        last(subCommand);
        break;
      case `Print`:
        print(subCommand);
        break;
    }
  }

  function join(frog) {
    squad.push(frog);
  }

  function jump(frog, index) {
    if (squad[index] !== undefined) {
      squad.splice(index, 0, frog);
    }
  }

  function dive(index) {
    if (squad[index] !== undefined) {
      squad.splice(index, 1);
    }
  }

  function first(subCommand) {
    if (subCommand > squad.length) {
      console.log(squad.join(` `));
    } else {
      let firsts = squad.filter((i, index) => index < subCommand);
      console.log(firsts.join(` `));
    }
  }
  function last(subCommand) {
    if (subCommand > squad.length) {
      console.log(squad.join(` `));
    } else {
      console.log(
        squad.slice(Math.max(squad.length - subCommand, 0)).join(` `)
      );
    }
  }

  function print(subCommand) {
    if (subCommand === `Normal`) {
      console.log(`Frogs: ${squad.join(` `)}`);
    } else if (subCommand === `Reversed`) {
      console.log(`Frogs: ${squad.reverse().join(` `)}`);
    }
  }
}

solve([
  `Blake Muggy Kishko`,
  `Join Kvachko`,
  `Dive 0`,
  `First 10`,
  `Print Reversed`
]);

solve([
  `A B C D E F`,
  `Join G`,
  `Jump Q 3`,
  `Last 3`,
  `Dive 2`,
  `Print Normal`
]);
