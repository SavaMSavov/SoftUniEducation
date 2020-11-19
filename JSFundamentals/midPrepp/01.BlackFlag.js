function solve(input = []) {
  let days = +input.shift();
  let dailyPlunder = +input.shift();
  let expectedPlunder = +input.shift();

  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    if (i % 3 === 0) {
      totalPlunder += 1.5 * dailyPlunder;
    } else {
      totalPlunder += dailyPlunder;
    }

    if (i % 5 === 0) {
      totalPlunder *= 0.7;
    }
  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (totalPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}

solve([`5`, `40`, `100`]);
solve([`10`, `20`, `380`]);
