function solve(input = []) {
  let userName = input.shift();

  let token = input.shift();

  while (token !== `Sign up`) {
    let splitedToken = token.split(` `);

    let command = splitedToken[0];

    if (command === `Case`) {
      let action = splitedToken[1];
      if (action === `lower`) {
        userName = userName.toLowerCase();
        console.log(userName);
      } else if (action === `upper`) {
        userName = userName.toUpperCase();
        console.log(userName);
      }
    } else if (command === `Reverse`) {
      let startIndex = Number(splitedToken[1]);
      let endIndex = Number(splitedToken[2]);
      
      if (
        startIndex >= 0 &&
        endIndex > startIndex &&
        endIndex < userName.length
      ) {
        let word = userName.substring(startIndex, endIndex+1);
        console.log(
          word
            .split(``)
            .reverse()
            .join(``)
        );
      }
    } else if (command === `Cut`) {
      let word = splitedToken[1];

      if (userName.includes(word)) {
        userName = userName.replace(word, ``.repeat(word.length));
        console.log(userName);
      } else {
        console.log(`The word ${userName} doesn't contain ${word}.`);
      }
    } else if (command === `Check`) {
      let word = splitedToken[1];
      if (userName.includes(word)) {
        console.log(`Valid`);
      } else {
        console.log(`Your username must contain ${word}.`);
      }
    } else if (command === `Replace`) {
      let replacement = splitedToken[1];
      while (userName.includes(replacement)) {
        userName = userName.replace(replacement, `*`);
      }
      console.log(userName);
    }
    token = input.shift();
  }
}

solve([`Pesho`, `Case lower`, `Cut ES`, `Check @`, `Sign up`]);

console.log(``);

solve([`ThisIsMyString`, `Reverse 1 4`, `Replace i`, `Cut My`, `Sign up`]);
