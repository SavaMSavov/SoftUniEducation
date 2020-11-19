function solve(input) {
  let str = ``;

  for (let i = 0; i < input.length; i++) {
    let lastChar = str.slice(-1);
    let currChar = input[i];

    if (lastChar !== currChar) {
      str += currChar;
    }
  }
  console.log(str);
}

solve("aaaaabbbbbcdddeeeedssaa");
