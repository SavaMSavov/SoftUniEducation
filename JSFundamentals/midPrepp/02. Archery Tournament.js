function solve(input = []) {
  let arr = input
    .shift()
    .split("|")
    .map(Number);
  let points = 0;

  while (input.length > 0) {
    let commands = input.shift().split("@");
    let direction = commands[0];
    let indexStart = Number(commands[1]);
    let toTraverse = Number(commands[2]);
    let targetPoints = 5;
    let indexToShoot = 0;

    if (indexStart < 0 || indexStart >= arr.length) {
      continue;
    }

    if (direction === "Shoot Left") {
      if (indexStart - toTraverse >= 0) {
        indexToShoot = indexStart - toTraverse;
      } else {
        let modulo = toTraverse - (arr.length - (arr.length - indexStart));
        indexToShoot = arr.length - (modulo % arr.length);
      }
    } else if (direction === "Shoot Right") {
      if (indexStart + toTraverse < arr.length) {
        indexToShoot = indexStart + toTraverse;
      } else {
        let modulo = toTraverse - (arr.length - indexStart);
        indexToShoot = modulo % arr.length;
      }
    }

    if (arr[indexToShoot] < 5) {
      targetPoints = arr[indexToShoot];
    }

    if (direction === "Shoot Left") {
      arr.splice(indexToShoot, 1, arr[indexToShoot] - targetPoints);
      points += targetPoints;
    } else if (direction === "Shoot Right") {
      arr.splice(indexToShoot, 1, arr[indexToShoot] - targetPoints);
      points += targetPoints;
    }

    if (direction === "Reverse") {
      arr.reverse();
    }

    if (direction === "Game over") {
      console.log(arr.join(" - "));
      console.log(
        `Iskren finished the archery tournament with ${points} points!`
      );
      break;
    }
  }
}

solve([
  `10|10|10|10|10`,
  `Shoot Left@0@2`,
  `Shoot Right@4@5`,
  `Shoot Right@6@5`,
  `Reverse`,
  `Game over`
]);
