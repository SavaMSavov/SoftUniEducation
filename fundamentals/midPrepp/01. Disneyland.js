function solve(input = []) {
  let priceOfJourney = input.shift();
  let months = input.shift();
  let savedMoney = 0;

  for (let i = 1; i <= months; i++) {
    if (i > 1 && i % 2 === 1) {
      savedMoney -= 0.16 * savedMoney;
    }

    if (i % 4 === 0) {
      savedMoney += 0.25 * savedMoney;
    }

    savedMoney += 0.25 * priceOfJourney;
  }

  if (savedMoney >= priceOfJourney) {
    console.log(
      `Bravo! You can go to Disneyland and you will have ${(
        savedMoney - priceOfJourney
      ).toFixed(2)}lv. for souvenirs.`
    );
  } else {
    console.log(
      `Sorry. You need ${(priceOfJourney - savedMoney).toFixed(2)}lv. more.`
    );
  }
}

solve([`1000`, `4`]);
