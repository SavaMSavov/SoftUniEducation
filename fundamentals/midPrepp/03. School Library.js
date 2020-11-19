function solve(input = []) {
  let library = input.shift().split(`&`);

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(` | `);

    let command = tokens[0];
    let firstBook = tokens[1];
    let secondBook = tokens[2];

    if (command === `Add Book`) {
      if (!library.includes(firstBook)) {
        library.unshift(firstBook);
      }
    } else if (command === `Take Book`) {
      if (library.includes(firstBook)) {
        let indexOfTheBook = library.indexOf(firstBook);
        library.splice(indexOfTheBook, 1);
      }
    } else if (command === `Swap Books`) {
      if (library.includes(firstBook) && library.includes(secondBook)) {
        let indexOfTheBook = library.indexOf(firstBook);
        let indexOfTheSecondBook = library.indexOf(secondBook);

        library[indexOfTheBook] = secondBook;
        library[indexOfTheSecondBook] = firstBook;
      }
    } else if (command === `Insert Book`) {
      library.push(firstBook);
    } else if (command === `Check Book`) {
      let searchIndex = firstBook;

      if (library[searchIndex]) {
        console.log(library[searchIndex]);
      }
    } else if (command === `Done`) {
      console.log(`${library.join(`, `)}`);
    }
  }
}

solve([
  `Don Quixote&The Great Gatsby&Moby Dick&Hamlet`,
  `Add Book | The Odyssey`,
  `Take Book | Don Quixote`,
  `Insert Book | Alice's Adventures in Wonderland`,
  `Check Book | 3`,
  `Done`
]);

solve([
  `Anna Karenina&Heart of Darkness&Catch-22& The Stranger`,
  `Add Book | David Copperfield`,
  `Add Book | One Thousand and One Nights`,
  `Swap Books | One Thousand and One Nights | Catch-22`,
  `Take Book | David Copperfield`,
  `Insert Book | The Stories of Anton Chekhov`,
  `Check Book | 17`,
  `Done`
]);
