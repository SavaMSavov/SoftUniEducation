function solve(input = []) {
  let sentence = input.shift();

  let token = input.shift();

  while (token !== `End`) {
    let splitedToken = token.split(` `);
    let command = splitedToken[0];

    if (command === `Translate`) {
      let char = splitedToken[1];
      let replacement = splitedToken[2];

      while (sentence.includes(char)) {
        sentence = sentence.replace(char, replacement);
      }
      console.log(sentence);
    } else if (command === `Includes`) {
      let check = splitedToken[1];

      if (sentence.includes(check)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
    } else if (command === `Start`) {
      let check = splitedToken[1];
      if (sentence.indexOf(check) === 0) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
    } else if (command === `Lowercase`) {
      sentence = sentence.toLowerCase();
      console.log(sentence);
    } else if (command === `Remove`) {
      let startIndex = splitedToken[1];
      let count = splitedToken[2];

      let removed = sentence.substr(startIndex, count);
      let newSentence = sentence.replace(removed, ``);
      console.log(newSentence);
    } else if (command === `FindIndex`) {
      let char = splitedToken[1];
      console.log(sentence.lastIndexOf(char));
    }
    token = input.shift();
  }
}

solve([
  `//Thi5 I5 MY 5trING!//`,
  `Translate 5 s`,
  `Includes string`,
  `Start //This`,
  `Lowercase`,
  `FindIndex i`,
  `Remove 0 10`,
  `End`
]);
