function solve(input = []) {
  let sideSize = input[0];
  let sheets = input[1];
  let sheetCover = input[2];

  let area = sideSize * sideSize * 6;

  let thirdSheet = Math.floor(sheets / 3);

  let covered =
    (sheets - thirdSheet) * sheetCover + thirdSheet * (0.25 * sheetCover);

  let percentage = (covered / area) * 100;

  console.log(`You can cover ${percentage.toFixed(2)}% of the box.`);
}

solve([`2.5`, `32`, `4.25`]);
