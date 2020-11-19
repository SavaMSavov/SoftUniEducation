function solve(input = []) {
  let count = input.shift();

  for (let i = 1; i <= count; i++) {
    let password = input.shift();
    let pattern = /^(.+)>(?<first>\d{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[^<>]{3})<\1$/g;

    let match = pattern.exec(password);

    if (match) {
      console.log(
        `Password: ${match.groups.first}${match.groups.second}${match.groups.third}${match.groups.fourth}`
      );
    } else {
      console.log(`Try another password!`);
    }
  }
}

solve([
  `3`,
  `##>00|no|NO|!!!?<###`,
  `##>123|yes|YES|!!!<##`,
  `$$<111|noo|NOPE|<<>$$`
]);
