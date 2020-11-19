function solve(array = []) {
  let conList = array.shift().split(" ");
  let exportArr = [];
  while (array.length > 0) {
    let line = array.shift();
    let command = line.split(" ");
    let firstWord = command.shift();
    let secondWord = command.shift();
    if (firstWord === "Add") {
      let num = command.shift();
      if (conList.includes(secondWord)) {
        if (num >= 0 && num <= conList.length) {
          conList.splice(Number(num), 0, secondWord);
        }
      } else {
        conList.push(secondWord);
      }
    } else if (firstWord === "Remove") {
      let num = Number(secondWord);
      if (num >= 0 && num <= conList.length) {
        conList.splice(num, 1);
      }
    } else if (firstWord === "Export") {
      exportArr = conList.slice(
        Number(secondWord),
        Number(secondWord) + Number(command)
      );
      console.log(exportArr.join(" "));
    } else if (line === "Print Normal") {
      console.log(`Contacts: ${conList.join(" ")}`);
      break;
    } else if (line === "Print Reversed") {
      console.log(`Contacts: ${conList.reverse().join(" ")}`);
      break;
    }
  }
}
solve([
  `Alisson Bellamy Candace Tristan`,
  `Remove 3`,
  `Add Bellamy 2`,
  `Print Normal`
]);
