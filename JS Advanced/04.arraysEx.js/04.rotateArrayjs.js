function solve(array = []) {
  let rotation = +array.pop();
  rotation = rotation % array.length;

  for (let i = 1; i <= rotation; i++) {
    let last = array.pop();
    array.unshift(last);
  }
  console.log(array.join(` `));
}

solve(["1", "2", "3", "4", "2"]);
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
