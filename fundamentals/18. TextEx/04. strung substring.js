function solve(word, text) {
  let specialWord = word.toLowerCase();
  text = text.toLowerCase();

  if (text.split(` `).includes(specialWord)) {
    console.log(specialWord);
  } else {
    console.log(`${specialWord} not found!`);
  }
}

solve("javascript", "JavaScript is the best programming language");
