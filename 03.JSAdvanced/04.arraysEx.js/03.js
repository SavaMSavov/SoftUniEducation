function solve(input = []) {
  let initialNumber = 1;
  let result = [];

  for (const element of input) {
    element === `add` ? result.push(initialNumber) : result.pop();
    initialNumber++;
  }
  result.length === 0 ? console.log(`Empty`) : console.log(result.join(`\n`));
}
solve(["add", "add", "add", "add"]);
