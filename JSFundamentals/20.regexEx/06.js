function solve(input) {
  let pattern = /"(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g;
  let collection = pattern.exec(input);

  for (let item of collection) {
    Console.WriteLine(item);
  }
}

solve([`Please contact us at: support@github.com.`, `end`]);
