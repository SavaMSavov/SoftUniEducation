function solve(array = []) {
  let first = +array[0];
  let last = +array[array.length - 1];

  let sum = first + last;
  console.log(sum);
}

solve([`20`, `30`, `40`]);
