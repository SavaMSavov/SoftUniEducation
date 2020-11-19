function solve(input) {
  const participants = input.slice(0, 1)[0].split(`, `);
  const racers = {};
  const obj = {
    0: `1st place`,
    1: `2nd place`,
    2: `3rd place`
  };

  for (const iterator of input.slice(1)) {
    const namePattern = /[A-Za-z]/g;
    const digitPattern = /[\d]/g;

    const matchedName = iterator.match(namePattern);
    const matchedDigits = iterator.match(digitPattern);

    if (matchedName && matchedDigits) {
      const name = matchedName.join(``);

      if (participants.includes(name)) {
        const distance = matchedDigits.map(Number).reduce((a, b) => a + b, 0);

        if (!racers[name]) {
          racers[name] = 0;
        }
        racers[name] += distance;
      }
    }
  }
  Object.keys(racers)
    .sort((a, b) => racers[b] - racers[a])
    .slice(0, 3)
    .forEach((racer, index) => console.log(`${obj[index]}: ${racer}`));
}

solve([
  `George, Peter, Bill, Tom`,
  `G4e@55or%6g6!68e!!@`,
  `R1@!3a$y4456@`,
  `B5@i@#123ll`,
  `G@e54o$r6ge#`,
  `7P%et^#e5346r`,
  `T$o553m&6`,
  `end of race`
]);
