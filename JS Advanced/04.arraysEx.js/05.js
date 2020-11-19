function solve(input) {
  input = input.map(Number);
  let arr = [];
  let biggest;
  input.forEach(function (e) {
    if (biggest != undefined) {
      if (e >= biggest) {
        arr.push(e);
        biggest = e;
      }
    } else {
      biggest = e;
      arr.push(e);
    }
  });
  console.log(arr.join(`\n`));
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
//solve([20, 3, 2, 15, 6, 1]);
