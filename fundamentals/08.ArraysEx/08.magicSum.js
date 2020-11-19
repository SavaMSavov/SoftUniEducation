function solve(arr = [], magicNumber) {
  for (
    let firstNumberIndex = 0;
    firstNumberIndex < arr.length;
    firstNumberIndex++
  ) {
    for (
      let secondNumberIndex = firstNumberIndex + 1;
      secondNumberIndex < arr.length;
      secondNumberIndex++
    ) {
      if (firstNumberIndex !== secondNumberIndex) {
        if (arr[firstNumberIndex] + arr[secondNumberIndex] === magicNumber) {
          console.log(arr[firstNumberIndex] + " " + arr[secondNumberIndex]);
        }
      }
    }
  }
}

solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);
