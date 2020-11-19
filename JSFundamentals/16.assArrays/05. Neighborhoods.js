function solve(input = []) {
  let neighborhoods = new Map();

  input
    .shift()
    .split(`, `)
    .forEach(name => neighborhoods.set(name, []));

  for (const line of input) {
    let [neighborhoodName, person] = line.split(` - `);

    if (neighborhoods.has(neighborhoodName)) {
      neighborhoods.get(neighborhoodName).push(person);
    }
  }
  let temp = Array.from(neighborhoods.entries());

  temp.sort((a, b) => {
    return b[1].length - a[1].length;
  });

  let result = new Map(temp);

  for (const [neigborhoodName, residets] of result) {
    console.log(`${neigborhoodName}: ${residets.length}`);

    residets.forEach(person => console.log(`--${person}`));
  }
}

solve([
  "Abbey Street, Herald Street, Bright Mews",
  "Bright Mews - Garry",
  "Bright Mews - Andrea",
  "Invalid Street - Tommy",
  "Abbey Street - Billy"
]);
