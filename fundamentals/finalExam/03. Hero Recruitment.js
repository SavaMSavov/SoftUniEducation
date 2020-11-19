function solve(arr) {
  const heroes = {};

  for (let i = 0; i < arr.length; i++) {
    const [command, heroName, spellName] = arr[i].split(" ");

    if (command === "End") {
      break;
    }

    if (command === "Enroll") {
      if (heroes[heroName]) {
        console.log(`${heroName} is already enrolled.`);
      } else {
        heroes[heroName] = [];
      }
    } else if (command === "Learn") {
      if (heroes[heroName]) {
        if (heroes[heroName].includes(spellName)) {
          console.log(`${heroName} has already learnt ${spellName}.`);
        } else {
          heroes[heroName].push(spellName);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    } else if (command === "Unlearn") {
      if (heroes[heroName]) {
        if (heroes[heroName].includes(spellName)) {
          const index = heroes[heroName].indexOf(spellName);
          heroes[heroName].splice(index, 1);
        } else {
          console.log(`${heroName} doesn't know ${spellName}.`);
        }
      } else {
        console.log(`${heroName} doesn't exist.`);
      }
    }
  }

  console.log("Heroes:");

  Object.keys(heroes)
    .sort((hero1, hero2) => {
      const hero1Spells = heroes[hero1];
      const hero2Spells = heroes[hero2];

      if (hero1Spells.length > hero2Spells.length) {
        return -1;
      } else if (hero1Spells.length < hero2Spells.length) {
        return 1;
      } else {
        return hero1.localeCompare(hero2);
      }
    })
    .forEach(hero => {
      console.log(`== ${hero}: ${heroes[hero].join(", ")}`);
    });
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
