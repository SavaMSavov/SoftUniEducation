function solve(input = []) {
  let result = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

  console.log(result.join(`\n`));
}

solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
