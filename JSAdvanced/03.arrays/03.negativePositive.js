function solve(input = []) {
  let print = [];

  for (let i = 0; i <= input.length - 1; i++) {
    if (input[i] < 0) {
      print.unshift(input[i]);
    } else {
      print.push(input[i]);
    }
  }
  for (const el of print) {
    console.log(el);
  }
}
solve([7, -2, 8, 9]);
