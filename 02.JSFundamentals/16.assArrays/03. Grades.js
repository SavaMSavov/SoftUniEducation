function solve(input = []) {
  let map = new Map();
  for (const string of input) {
    //extract names and grades
    let tokens = string.split(` `);
    let name = tokens[0];
    let grades = tokens.splice(1, tokens.length).map(Number); // transform grades from string to numbers

    if (!map.has(name)) { // ако го няма го сетваме с празен масив и пушваме оценките
      map.set(name, []);
      map.set(name, map.get(name).concat(grades));
    } else { // ако го има просто му добавяме оценките
      map.set(name, map.get(name).concat(grades));
    }
  }

  function average(grades) { // function for calculating average / подаваме му оценките
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i];
    }
    let averageSum = sum / grades.length;
    return averageSum;
  }

  function comparator(a, b) {
    let first = average(a[1]); // подаваме му оценките [1]
    let second = average(b[1]); // =//=

    return first - second;
  }

  let sorted = Array.from(map).sort((a, b) => comparator(a, b));

  for (let keys of sorted) {
    console.log(`${keys[0]}: ${keys[1].join(`, `)}`);
  }
}

solve(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
