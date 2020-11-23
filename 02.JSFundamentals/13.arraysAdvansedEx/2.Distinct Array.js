function solve(input = []) {
  let output = [];

  for (let i = 0; i < input.length; i++) {
    if (!output.includes(input[i])) {
      output.push(input[i]);
    }
  }
  console.log(output.join(` `));
}

solve([1, 2, 3, 4]);
