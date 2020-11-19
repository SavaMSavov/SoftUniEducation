function solve(input = []) {
  let line = input.shift();

  let people = [
    // {
    //   name: `gosho`,
    //   health: 0,
    //   energy: 0
    // }
  ];
  while (line !== `Results`) {
    let tokens = line.split(`:`);
    const command = tokens[0];
    const person = tokens[1];
    const argument1 = tokens[2];
    const argument2 = tokens[3];

    if (command === `Add`) {
      const isPersonExist = people.find(p => p.name === person);

      if (!isPersonExist) {
        people.push({
          name: person,
          health: Number(argument1),
          energy: Number(argument2)
        });
      } else {
        isPersonExist.health += Number(argument1);
      }
    } else if (command === `Attack`) {
      const dmg = Number(argument2);
      const secondName = argument1;
      const isPersonExist = people.find(p => p.name === person);
      const isSecondPersonExist = people.find(s => s.name === secondName);

      if (isPersonExist && isSecondPersonExist) {
        isSecondPersonExist.health -= dmg;
        if (isSecondPersonExist.health <= 0) {
          people = people.filter(x => x.name !== secondName);
          console.log(`${secondName} was disqualified!`);
        }

        isPersonExist.energy -= 1;
        if (isPersonExist.energy <= 0) {
          people = people.filter(x => x.name !== person);
          console.log(`${person} was disqualified!`);
        }
      }
    } else if (command === `Delete`) {
      if (person === `All`) {
        people = [];
      } else {
        const isPersonExist = people.find(p => p.name === person);

        if (isPersonExist) {
          people = people.filter(x => x.name !== person);
        }
      }
    }
    line = input.shift();
  }

  people.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    } else if (a.health < b.health) {
      return 1;
    } else {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  console.log(`People count: ${people.length}`);

  for (const man of people) {
    console.log(`${man.name} - ${man.health} - ${man.energy}`);
  }
}

solve([
  `Add:Mark:1000:5`,
  `Add:Clark:1000:3`,
  `Attack:Clark:Mark:500`,
  `Add:Allison:2500:5`,
  `Attack:Clark:Mark:300`,
  `Add:Charlie:4000:10`,
  `Attack:Clark:Mark:500`,
  `Results`
]);

console.log(``);

solve([
  `Add:Bonnie:3000:5`,
  `Add:Kent:10000:10`,
  `Add:Johny:4000:10`,
  `Attack:Johny:Bonnie:400`,
  `Add:Chicken:1000:1`,
  `Add:Rabbit:3000:5`,
  `Add:Buggy:1259:10`,
  `Delete:Kent`,
  `Attack:Chicken:Rabbit:1000`,
  `Results`
]);
