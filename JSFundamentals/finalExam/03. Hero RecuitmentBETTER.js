function solve(input = []) {
  let line = input.shift();
  let heroes = [];

  while (line !== `End`) {
    let [command, heroName, spellName] = line.split(` `);

    if (command === `Enroll`) {
      const isHeroExist = heroes.find(x => x.name === heroName);

      if (isHeroExist) {
        console.log(`${heroName} is already enrolled.`);
      } else {
        heroes.push({ name: heroName, spells: [] });
      }
    } else if (command === `Learn`) {
      const isHeroExist = heroes.find(x => x.name === heroName);

      if (isHeroExist) {
        const isSpellExist = isHeroExist.spells.includes(spellName);

        if (!isSpellExist) {
          isHeroExist.spells.push(spellName);
        } else {
          console.log(`${heroName} has already learnt ${spellName}.`);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    } else if (command === `Unlearn`) {
      const isHeroExist = heroes.find(x => x.name === heroName);

      if (isHeroExist) {
        const isSpellExist = isHeroExist.spells.includes(spellName);

        if (isSpellExist) {
          isHeroExist.spells = isHeroExist.spells.filter(x => x !== spellName);
        } else {
          console.log(`${heroName} doesn't know ${spellName}.`);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    }
    line = input.shift();
  }

  heroes.sort((a, b) => {
    if (a.spells.length > b.spells.length) {
      return -1;
    } else if (a.spells.length < b.spells.length) {
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
  console.log(`Heroes:`);

  for (const hero of heroes) {
    let totalSpells = hero.spells.join(`, `);
    let printLine = `== ${hero.name}: ${totalSpells}`;
    console.log(printLine);
  }
}

solve([
  `Enroll Stefan`,
  `Enroll Pesho`,
  `Enroll Stefan`,
  `Learn Stefan ItShouldWork`,
  `Learn Stamat ItShouldNotWork`,
  `Unlearn Gosho Dispel`,
  `Unlearn Stefan ItShouldWork`,
  `End`
]);
