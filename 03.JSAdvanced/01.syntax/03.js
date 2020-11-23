function solve(a, b) {
  let num1 = +a;
  let num2 = +b;

  let result = 0;

  for (let i = num1; i <= num2; i++) {
    result += i;
  }

  console.log(result);
}

solve(`1`, `5`);
