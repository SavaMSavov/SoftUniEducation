function solve(input = []) {
  const del = input.pop();

  console.log(input.join(del));
}

solve(["One", "Two", "Three", "Four", "Five", "-"]);
