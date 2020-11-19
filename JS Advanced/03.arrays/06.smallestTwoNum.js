function solve(numbers = []) {
  let result = numbers.sort((a, b) => a - b).slice(0, 2);

  console.log(result.join(` `));
}

solve([30, 15, 50, 5]);
