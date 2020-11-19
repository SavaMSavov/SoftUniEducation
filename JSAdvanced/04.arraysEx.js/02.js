function solve(input = []) {
  const step = +input.pop();

  for (let i = 0; i <= input.length - 1; i += step) {
    console.log(input[i]);
  }
}

solve(["5", "20", "31", "4", "20", "2"]);
