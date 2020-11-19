function solve(input = []) {
  let size = +input.shift();

  for (const iterator of input) {
    if (iterator === `chop`) {
      size /= 2;
    } else if (iterator === `dice`) {
      size = Math.sqrt(size);
    } else if (iterator === `spice`) {
      size += 1;
    } else if (iterator === `bake`) {
      size *= 3;
    } else if (iterator === `fillet`) {
      size *= 0.8;
    }
    console.log(size);
  }
}

solve(["32", "chop", "chop", "chop", "chop", "chop"]);
solve(["9", "dice", "spice", "chop", "bake", "fillet"]);
