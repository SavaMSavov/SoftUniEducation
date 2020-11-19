function solve(input = []) {
  let count = +input.shift();

  for (let i = 1; i <= count; i++) {
    let line = input.shift();
    let pattern = /([@*])(?<tag>[A-Z][a-z]{2,})\1:\s\[(?<chars1>[A-Za-z]+)\]\|\[(?<chars2>[A-Za-z]+)\]\|\[(?<chars3>[A-Za-z]+)\]\|$/g;

    let match = pattern.exec(line);

    if (match) {
      let { tag, chars1, chars2, chars3 } = match.groups;

      const a = chars1.charCodeAt(0);
      const b = chars2.charCodeAt(0);
      const c = chars3.charCodeAt(0);

      console.log(`${tag}: ${a} ${b} ${c}`);
    } else {
      console.log(`Valid message not found!`);
    }
  }
}

solve([
  `3`,
  `*Request*: [I]|[s]|[i]|`,
  `*Taggy@: [73]|[73]|[73]|`,
  `Should be valid @Taggy@: [v]|[a]|[l]|`
]);
console.log(``);

solve([
  `3`,
  `@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn’t be valid`,
  `*tAGged*: [i][i][i]|`,
  `Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|`
]);
