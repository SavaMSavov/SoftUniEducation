function solve(input) {

  let halfLength = Math.floor(input.length / 2);

  let firstHalf = input
    .substr(0, halfLength)
    .split(``)
    .reverse()
    .join(``);
  let secondHalf = input
    .substr(halfLength, input.length)
    .split(``)
    .reverse()
    .join(``);

  console.log(firstHalf);
  console.log(secondHalf);
}

solve("tluciffiDsIsihTgnizamAoSsIsihT");
