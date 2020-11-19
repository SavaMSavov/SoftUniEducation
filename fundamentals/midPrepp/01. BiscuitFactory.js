function solve(input = []) {
  let amountBiscuitsForEachWorker = input.shift();
  let countWorkers = input.shift();
  let productionOtherFactory = input.shift();

  let days = 30;

  let production = 0;
  let productionPerDay = amountBiscuitsForEachWorker * countWorkers;

  for (let i = 1; i <= days; i++) {
    if (i % 3 === 0) {
      production += Math.floor(0.75 * productionPerDay);
    } else {
      production += productionPerDay;
    }
  }
  let diff = Math.abs(production - productionOtherFactory);
  let percentage = (diff / productionOtherFactory) * 100;

  console.log(`You have produced ${production} biscuits for the past month.`);

  if (production >= productionOtherFactory) {
    console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
  } else {
    console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
  }
}

solve([`78`, `8`, `16000`]);
