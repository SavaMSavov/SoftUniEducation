function solve(input) {
  let string = input.shift();
  let commands = input.shift();
  let sum = 0;

  while (commands !== `Finish`) {
    let [command, element1, element2] = commands.split(` `);

    if (command == `Replace`) {
      while (string.includes(element1)) {
        string = string.replace(element1, element2);
      }
      console.log(string);
    } else if (command == `Cut`) {
      let start = Number(element1);
      let end = Number(element2);

      if (string[start] != undefined && string[end] != undefined) {
        let newString = string.substring(start, end + 1);
        string = string.replace(newString, "");
        console.log(string);
      } else {
        console.log(`Invalid indexes!`);
      }
    } else if (command == `Make`) {
      if (element1 == `Upper`) {
        string = string.toUpperCase();
        console.log(string);
      } else if (element1 == `Lower`) {
        string = string.toLowerCase();
        console.log(string);
      }
    } else if (command == `Check`) {
      if (string.includes(element1)) {
        console.log(`Message contains ${element1}`);
      } else {
        console.log(`Message doesn't contain ${element1}`);
      }
    } else if (command == `Sum`) {
      let start = Number(element1);
      let end = Number(element2);

      if (string[start] != undefined && string[end] != undefined) {
        let newString = string.substring(start, end + 1);
        for (let i = 0; i < newString.length; i++) {
          sum += newString[i].charCodeAt(0);
        }
        console.log(sum);
      } else {
        console.log(`Invalid indexes!`);
      }
    }

    commands = input.shift();
  }
}

solve([
  `ILikeSharan`,
  `Replace a e`,
  `Make Upper`,
  `Check SHEREN`,
  `Sum 1 4`,
  `Cut 1 4`,
  `Finish`
]);


