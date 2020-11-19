function solve(input = []) {
  let count = input.shift();

  for (let i = 1; i <= count; i++) {
    let string = input.shift();
    let pattern = /[|](?<name>[A-Z]+)[|]:[#](?<title>[A-Za-z]+ [A-Za-z]+)[#]/g;

    let match = pattern.exec(string);

    if (match) {
      const { name, title } = match.groups;

      console.log(`${name}, The ${title}`);
      console.log(`>> Strength: ${name.length}`);
      console.log(`>> Armour: ${title.length}`);
    } else {
      console.log(`Access denied!`);
    }
  }
}

solve([
  `3`,
  `|GEORGI|:#Lead architect#`,
  `|Hristo|:#High Overseer#`,
  `|STEFAN|:#Assistant Game Developer#`
]);
