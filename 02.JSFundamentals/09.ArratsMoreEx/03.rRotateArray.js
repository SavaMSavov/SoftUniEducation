function solve(array = []) {
  let result = array.slice(0, array.length - 1);
  let rotation = Number(array[array.length - 1]);

  for (let i = 0; i < rotation; i++) {
    let last = result.pop();
    result.unshift(last);
  }
  console.log(result.join(` `));
}

solve(["1", "2", "3", "4", "2"]);
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
