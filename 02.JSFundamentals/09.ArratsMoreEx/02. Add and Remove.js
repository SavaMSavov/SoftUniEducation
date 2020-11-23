function solve(array = []) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    let command = array[i];

    if (command === `add`) {
      result.push(i + 1);
    }
    if (command === `remove`) {
      result.pop();
    }
  }

  if (result.length === 0) {
    console.log(`Empty`);
  } else {
    console.log(result.join(` `));
  }
}

solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
