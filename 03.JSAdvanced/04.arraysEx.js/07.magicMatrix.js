function solve(matrix = []) {
  let isMagic = true;

  let sum = matrix[0].reduce((a, b) => a + b, 0);

  for (let i = 0; i < matrix.length; i++) {
    let sumRow = matrix[i].reduce((a, b) => a + b, 0);
    let sumCol = matrix.map((x) => x[i]).reduce((a, b) => a + b, 0);

    if (sumCol !== sumRow || sumCol !== sum) {
      isMagic = false;
    }
  }
  console.log(isMagic);
}

solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
