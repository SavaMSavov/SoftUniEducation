function solve(input = []) {
  let countStudents = +input.shift();
  let countOfLectures = +input.shift();
  let initialBonus = +input.shift();

  let maxBonus = 0;
  let maxLectures = 0;

  for (let i = 1; i <= countStudents; i++) {
    let currentStudentAttendantes = +input.shift();

    let currBonus =
      (currentStudentAttendantes / countOfLectures) * (5 + initialBonus);

    if (currBonus > maxBonus) {
      maxBonus = currBonus;
      maxLectures = currentStudentAttendantes;
    }
  }
  console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
  console.log(`The student has attended ${maxLectures} lectures.`);
}

solve([`5`, `25`, `30`, `12`, `19`, `24`, `16`, `20`]);

solve([
  `10`,
  `30`,
  `14`,
  `8`,
  `23`,
  `27`,
  `28`,
  `15`,
  `17`,
  `25`,
  `26`,
  `5`,
  `18`
]);
