function solve(input = []) {
  let count = input.shift();

  for (let i = 1; i <= count; i++) {
    let line = input.shift();
    let pattern = /^!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[a-zA-Z]{8,})\]$/g;
    let match = pattern.exec(line);

    if (match) {
      let { command, message } = match.groups;

      let result = message
        .split(``)
        .map(x => x.charCodeAt(0))
        .join(` `);

      console.log(`${command}: ${result}`);
    } else {
      console.log(`The message is invalid`);
    }
  }
}

solve([`2`, `!Send!:[IvanisHere]`, `*Time@:[Itis5amAlready]`]);

console.log(``);

solve([
  `3`,
  `go:[outside]`,
  `!drive!:YourCarToACarWash`,
  `!Watch!:[LordofTheRings]`
]);
