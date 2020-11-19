function solve(input = []) {
  let sentence = input.shift();
  let token = input.shift();

  while (token !== `Done`) {
    let splitedToken = token.split(` `);
    let command = splitedToken[0];

    if (command === `Change`) {
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
    } else if (command === `End`) {
      let check = splitedToken[1];

      if (sentence.endsWith(check)) {
        console.log(`True`);
      } else {
        console.log(`False`);
      }
    } else if (command === `Uppercase`) {
      sentence = sentence.toUpperCase();
      console.log(sentence);
    } else if (command === `FindIndex`) {
      let char = splitedToken[1];
      console.log(sentence.indexOf(char));
    } else if (command === `Cut`) {
      let startIndex = splitedToken[1];
      let length = splitedToken[2];
      let cutted = sentence.substr(startIndex, length);

      console.log(cutted);
    }
    token = input.shift();
  }
}

solve([
  `//Th1s 1s my str1ng!//`,
  `Change 1 i`,
  `Includes string`,
  `End my`,
  `Uppercase`,
  `FindIndex I`,
  `Cut 5 5`,
  `Done`
]);
