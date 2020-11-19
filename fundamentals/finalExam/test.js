function solve(input) {
  let string = input.shift();

  let commands = input.shift();
  let newPassword = ``;

  while (commands !== `Done`) {
    let tokens = commands.split(` `);
    let command = tokens[0];
    let element1 = tokens[1];
    let element2 = tokens[2];

    if (command === `TakeOdd`) {
      for (let i = 0; i < string.length; i++) {
        if (i % 2 !== 0) {
          newPassword += string[i];
        }
      }
      console.log(newPassword);
    } else if (command === `Cut`) {
      let index = +element1;
      let length = +element2;

      if (newPassword[index] != undefined && length <= newPassword.length) {
        let cutString = newPassword.substr(index, length);

        newPassword = newPassword.replace(cutString, "");
        console.log(newPassword);
      }
    } else if (command === `Substitute`) {
      if (newPassword.includes(element1)) {
        while (newPassword.includes(element1)) {
          newPassword = newPassword.replace(element1, element2);
        }
        console.log(newPassword);
      } else {
        console.log(`Nothing to replace!`);
      }
    }
    commands = input.shift();
  }
  console.log(`Your password is: ${newPassword}`);
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
