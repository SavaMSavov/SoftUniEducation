function solve(input = []) {
  let result = new Map();

  for (const iterator of input) {
    if (!result.has(iterator)) {
      result.set(iterator, 1);
    } else {
      let count = result.get(iterator);
      result.set(iterator, count + 1);
    }
  }
  let sorted = Array.from(result.entries()).sort((a, b) => b[1] - a[1]);

  let print = new Map(sorted);

  for (const [word, count] of print) {
    console.log(`${word} -> ${count} times`);
  }
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence"
]);
