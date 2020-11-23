function solve(a, b, sign) {
  let result = 0;

  if (sign === `+`) {
    result = a + b;
  } else if (sign === `-`) {
    result = a - b;
  } else if (sign === `*`) {
    result = a * b;
  } else if (sign === `/`) {
    result = a / b;
  } else if (sign === `%`) {
    result = a % b;
  } else if (sign === `**`) {
    result = a ** b;
  } else {
    console.log(`invalid operator`);
  }
  console.log(result);
}

solve(5, 6, `+`);
