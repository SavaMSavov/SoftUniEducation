function solve(input) {
  let inputString = input[0];

  let secondPattern = /\d/g;
  let pattern = /\s([:*]{2})(?<name>[A-z][a-z]{2,})\1/g;
  let finalPattern = /[A-Z][a-z]+/g;

  let sumOfNumber = 1;

  let forNumber = inputString.match(secondPattern);
  let forEmoji = inputString.match(pattern);

  for (const number of forNumber) {
    sumOfNumber *= +number;
  }

  console.log(`Cool threshold: ${sumOfNumber}`);
  console.log(
    `${forEmoji.length} emojis found in the text. The cool ones are:`
  );

  for (const iterator of forEmoji) {
    let final = iterator.match(finalPattern);

    for (const symbol of final) {
      let sum = 0;
      let result = symbol.split(``).map(x => x.charCodeAt(0));

      for (const element of result) {
        sum += +element;
      }

      if (sum > sumOfNumber) {
        console.log(iterator);
      }
    }
  }
}

solve([
  `In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**`
]);
