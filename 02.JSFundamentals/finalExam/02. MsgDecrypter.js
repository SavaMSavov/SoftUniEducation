function solve(input = []) {
  let count = +input.shift();

  for (let i = 1; i <= count; i++) {
    let line = input.shift();
    let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1:\s\[(?<numbers1>[\d]+)\]\|\[(?<numbers2>[\d]+)\]\|\[(?<numbers3>[\d]+)\]\|$/g;

    let match = pattern.exec(line);

    if (match) {
      let { tag, numbers1, numbers2, numbers3 } = match.groups;

      const charAsciiCode1 = String.fromCharCode(numbers1);
      const charAsciiCode2 = String.fromCharCode(numbers2);
      const charAsciiCode3 = String.fromCharCode(numbers3);

      let newCode = charAsciiCode1 + charAsciiCode2 + charAsciiCode3;

      console.log(`${tag}: ${newCode}`);
    } else {
      console.log(`Valid message not found!`);
    }
  }
}

solve([
  `4`,
  `$Request$: [73]|[115]|[105]|`,
  `%Taggy$: [73]|[73]|[73]|`,
  `%Taggy%: [118]|[97]|[108]|`,
  `$Request$: [73]|[115]|[105]|[32]|[75]|`
]);
console.log(``);

solve([
  `3`,
  `This shouldnt be valid%Taggy%: [118]|[97]|[108]|`,
  `$tAGged$: [97][97][97]|`,
  `$Request$: [73]|[115]|[105]|true`
]);

