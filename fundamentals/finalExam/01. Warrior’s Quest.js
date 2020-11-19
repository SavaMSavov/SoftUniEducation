function solve(input = []) {
  let string = input.shift();
  let command = input.shift();

  while (command !== `For Azeroth` && command !== undefined) {
    let tokens = command.split(` `);
    let text = tokens[0];

    if (text === `GladiatorStance`) {
      string = string.toUpperCase();
      console.log(string);
    } else if (text === `DefensiveStance`) {
      string = string.toLowerCase();
      console.log(string);
    } else if (text === `Dispel`) {
      let array = string.split(``);
      let index = Number(tokens[1]);
      let letter = tokens[2];

      if (index >= 0 && index < array.length) {
        string = modifyString(string, index, letter);
        console.log("Success!");
      } else {
        console.log("Dispel too weak.");
      }
    } else if ((text = `Target`)) {
      if (tokens[1] === `Change`) {
        let substring = tokens[2];
        let secondSubstring = tokens[3];
        while (string.includes(substring)) {
          string = string.replace(substring, secondSubstring);
        }
        console.log(string);
      } else if (tokens[1] === `Remove`) {
        let substring = tokens[2];
        while (string.includes(substring)) {
          string = string.replace(substring, "");
        }
        console.log(string);
      } else {
        console.log("Command doesn't exist!");
      }
    }
    command = input.shift();
  }

  function modifyString(string, index, newChar) {
    let result = ``;
    let array = string.split(``);

    array[index] = newChar;
    result = array.join(``);
    return result;
  }
}

solve([
  `fr1c710n`,
  `GladiatorStance`,
  `Dispel 2 I`,
  `Dispel 4 T`,
  `Dispel 6 O`,
  `Dispel 5 I`,
  `Dispel 10 I`,
  `Target Change RICTION riction`,
  `For Azeroth`
]);

solve([
  `DYN4MICNIC`,
  `Target Remove NIC`,
  `Dispel 3 A`,
  `DefensiveStance`,
  `Target Change d D`,
  `target change D d`,
  `For Azeroth`
]);
