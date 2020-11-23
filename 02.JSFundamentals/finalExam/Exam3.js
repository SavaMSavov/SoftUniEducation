function solve(input = []) {
  let token = input.shift();
  let towns = [
    //{
    //name: aasdas
    //population: number
    //gold: number
    //}
  ];
  while (token !== `Sail`) {
    let splited = token.split(`||`);
    let town = splited[0];
    let population = +splited[1];
    let gold = +splited[2];

    const isTownExist = towns.find(x => x.name === town);

    if (!isTownExist) {
      towns.push({ name: town, population: population, gold: gold });
    } else {
      isTownExist.population += population;
      isTownExist.gold += gold;
    }
    token = input.shift();
  }
  //console.log(towns);

  let events = input.shift();
  while (events !== `End`) {
    splitedEvents = events.split(`=>`);
    let command = splitedEvents[0];
    let city = splitedEvents[1];
    let arg1 = splitedEvents[2];
    let arg2 = splitedEvents[3];

    if (command === `Plunder`) {
      const currTown = towns.find(x => x.name === city);

      if (currTown) {
        currTown.population -= arg1;
        currTown.gold -= arg2;
        console.log(
          `${city} plundered! ${arg2} gold stolen, ${arg1} citizens killed.`
        );
      }
      if (currTown.population <= 0 || currTown.gold <= 0) {
        towns = towns.filter(t => t.name !== city);
        console.log(`${city} has been wiped off the map!`);
      }
    } else if (command === `Prosper`) {
      const currTown = towns.find(x => x.name === city);

      if (currTown) {
        let addgold = +arg1;

        if (addgold < 0) {
          console.log(`Gold added cannot be a negative number!`);
        } else {
          currTown.gold += addgold;
          console.log(
            `${addgold} gold added to the city treasury. ${city} now has ${currTown.gold} gold.`
          );
        }
      }
    }
    events = input.shift();
  }
  towns.sort((a, b) => {
    if (a.gold > b.gold) {
      return -1;
    } else if (a.gold < b.gold) {
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
  if (towns.length <= 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`
    );
    for (const iterator of towns) {
      console.log(
        `${iterator.name} -> Population: ${iterator.population} citizens, Gold: ${iterator.gold} kg`
      );
    }
  }
}

solve([
  `Tortuga||345000||1250`,
  `Santo Domingo||240000||630`,
  `Havana||410000||1100`,
  `Sail`,
  `Plunder=>Tortuga=>75000=>380`,
  `Prosper=>Santo Domingo=>180`,
  `End`
]);
