function solve(input = []) {
  let friendList = input.shift().split(", ");
  let enter;
  while ((enter = input.shift()) !== "Report") {
    let [command, arg1, arg2] = enter.split(" ");
    switch (command) {
      case "Blacklist":
        let index = friendList.indexOf(arg1);
        if (index > -1) {
          friendList.splice(index, 1, "Blacklisted");
          console.log(`${arg1} was blacklisted.`);
        } else {
          console.log(`${arg1} was not found.`);
        }
        break;
      case "Error":
        let name = friendList[arg1];
        if (name !== "Blacklisted" && name !== "Lost") {
          friendList.splice(arg1, 1, "Lost");
          console.log(`${name} was lost due to an error.`);
        }
        break;
      case "Change":
        if (arg1 >= 0 && arg1 < friendList.length) {
          console.log(`${friendList[arg1]} changed his username to ${arg2}.`);
          friendList.splice(arg1, 1, arg2);
        }
        break;
    }
  }
  let countOccurences = (arr, str) => arr.filter(el => el === str).length;
  console.log(
    `Blacklisted names: ${countOccurences(friendList, "Blacklisted")}`
  );
  console.log(`Lost names: ${countOccurences(friendList, "Lost")}`);
  console.log(friendList.join(" "));
}
solve([
  `Mike, John, Eddie`,
  `Blacklist Mike`,
  `Error 0`,
  `Error 1`,
  `Change 2 Mike123`,
  `Report`
]);
