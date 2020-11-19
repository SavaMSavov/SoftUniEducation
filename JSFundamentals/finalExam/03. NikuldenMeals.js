function solve(input = []) {
  let line = input.shift();

  const guests = [
    // {
    //   name: 'Lili',
    //   meals: ['soup', ..]
    // }
  ];
  let unlikedMeals = 0;

  while (line !== `Stop`) {
    const tokens = line.split("-");
    const command = tokens[0];
    const guest = tokens[1];
    const meal = tokens[2];

    if (command === "Like") {
      const isGuestExist = guests.find(g => g.name === guest);
      if (!isGuestExist) {
        guests.push({ name: guest, meals: [] });
      }

      const currGuest = guests.find(g => g.name === guest);

      const mealExists = currGuest.meals.includes(meal);
      if (!mealExists) {
        currGuest.meals.push(meal);
      }
    } else if (command === "Unlike") {
      const currGuest = guests.find(g => g.name === guest);

      if (currGuest) {
        const mealExists = currGuest.meals.includes(meal);
        if (mealExists) {
          currGuest.meals = currGuest.meals.filter(m => m !== meal);
          console.log(`${guest} doesn't like the ${meal}.`);
          unlikedMeals++;
        } else {
          console.log(
            `${guest} doesn't have the ${meal} in his/her collection.`
          );
        }
      } else {
        console.log(`${guest} is not at the party.`);
      }
    }
    line = input.shift();
  }

  guests.sort((a, b) => {
    if (a.meals.length > b.meals.length) {
      return -1;
    } else if (a.meals.length < b.meals.length) {
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

  for (const guest of guests) {
    let totalMeals = guest.meals.join(`, `);
    let printLine = `${guest.name}: ${totalMeals}`;
    console.log(printLine);
  }
  console.log(`Unliked meals: ${unlikedMeals}`);
}

solve([
  `Like-Krisi-shrimps`,
  `Unlike-Vili-carp`,
  `Unlike-Krisi-salad`,
  `Unlike-Krisi-shrimps`,
  `Stop`
]);

console.log(``);

solve([
  `Like-Krisi-shrimps`,
  `Like-Krisi-soup`,
  `Like-Misho-salad`,
  `Like-Pena-dessert`,
  `Stop`
]);
