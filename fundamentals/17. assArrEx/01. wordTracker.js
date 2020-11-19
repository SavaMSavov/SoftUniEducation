function solve(input) {
  let words = new Map();
  let targetWords = input.shift().split(` `);

  targetWords.forEach(word => {
    words.set(word, 0);
  });

  input.forEach(word => {
    if (targetWords.includes(word)) {
      words.set(word, words.get(word) + 1);
    }
  });

  Array.from(words.entries())
    .sort((a, b) => b[1] - a[1])
    .forEach(entry => {
      console.log(`${entry[0]} - ${entry[1]}`);
    });
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task"
]);
