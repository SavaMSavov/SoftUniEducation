function solve(input = []) {
  let numbersArr = input
    .shift()
    .split(` `)
    .map(Number);
  let enter;

  let positiveArr = [];
  let positiveSum = 0;
  let negativeSum = 0;
  let totalSum = 0;

  while ((enter = input.shift()) !== `End`) {
    let [command, indexOrType, newNumber] = enter.split(` `);

    switch (command) {
      case `Switch`:
        let reversedNumber;

        if (indexOrType > -1 && indexOrType < numbersArr.length) {
          if (numbersArr[indexOrType] < 0) {
            reversedNumber = Math.abs(numbersArr[indexOrType]);
          } else {
            reversedNumber = numbersArr[indexOrType] * -1;
          }
          numbersArr[indexOrType] = reversedNumber;
        }
        break;

      case `Change`:
        if (indexOrType > -1 && indexOrType < numbersArr.length) {
          numbersArr[indexOrType] = +newNumber;
        }
        break;

      case `Sum`:
        let type = indexOrType;

        for (const element of numbersArr) {
          if (element < 0) {
            negativeSum += element;
            totalSum += element;
          } else {
            positiveSum += element;
            totalSum += element;
          }
        }

        if (type === `Positive`) {
          console.log(positiveSum);
        } else if (type === `Negative`) {
          console.log(negativeSum);
        } else if (type === `All`) {
          console.log(totalSum);
        }
        break;
    }
  }
  for (const el of numbersArr) {
    if (el >= 0) {
      positiveArr.push(el);
    }
  }
  console.log(positiveArr.join(` `));
}

solve([`1 2 3 4 5`, `Switch 4`, `Change 0 -3`, `Sum Negative`, `End`]);
