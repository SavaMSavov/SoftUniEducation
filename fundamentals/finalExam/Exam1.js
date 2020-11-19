function solve(input = []) {
  let string = input.shift();

  let line = input.shift();

  while (line !== `Generate`) {
    let tokens = line.split(`>>>`);

    let command = tokens[0];
    let arg1 = tokens[1];
    let arg2 = tokens[2];
    let arg3 = tokens[3];

    if (command === `Contains`) {
      let searchString = arg1;

      if (string.includes(searchString)) {
        console.log(`${string} contains ${searchString}`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (command === `Flip`) {
      let currString = string.substring(+arg2, +arg3);
      let replace = ``;

      if (arg1 === `Upper`) {
        replace = currString.toUpperCase();
      }
      if (arg1 === `Lower`) {
        replace = currString.toLowerCase();
      }

      if (string.includes(currString)) {
        string = string.replace(currString, replace);
      }
      console.log(string);
    } else if (command === `Slice`) {
      let start = +arg1;
      let end = +arg2;

      let cutted = string.substring(start, end);
      string = string.replace(cutted, ``);
      console.log(string);
    }
    line = input.shift();
  }

  console.log(`Your activation key is: ${string}`);
}

solve([
  `abcdefghijklmnopqrstuvwxyz`,
  `Slice>>>2>>>6`,
  `Flip>>>Upper>>>3>>>14`,
  `Flip>>>Lower>>>5>>>7`,
  `Contains>>>def`,
  `Contains>>>deF`,
  `Generate`
]);
