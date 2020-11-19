function solve(input = []) {
  let steps = +input.shift();
  let oneStepLength = +input.shift();
  let distanceInMeters = +input.shift();

  let distanceInCentimeters = distanceInMeters * 100;
  let doneDistance = 0;

  for (let i = 1; i <= steps; i++) {
    if (i % 5 === 0) {
      doneDistance += oneStepLength * 0.7;
    } else {
      doneDistance += oneStepLength;
    }
  }
  let percentage = ((doneDistance / distanceInCentimeters) * 100).toFixed(2);
  console.log(`You travelled ${percentage}% of the distance!`);
}

solve([`100`, `2`, `1`]);
