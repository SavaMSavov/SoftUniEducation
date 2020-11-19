function solve(words, text) {
  let separatedWords = words.split(`, `);

  text.split(` `).forEach(word => {
    let asterixWordLength = `*`.repeat(word.length);

    if (word === asterixWordLength) {
      text = text.replace(
        word,
        separatedWords.find(w => w.length === asterixWordLength.length)
      );
    }
  });

  console.log(text);
}

solve(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
