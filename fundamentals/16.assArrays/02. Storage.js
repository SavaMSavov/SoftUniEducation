function solve(input = []) {
  let map = new Map();

  for (const string of input) {
    let tokens = string.split(` `);
    let product = tokens[0];
    let quantity = Number(tokens[1]);

    if (!map.has(product)) {
      map.set(product, quantity);
    } else {
      let currQuantity = map.get(product);
      let newQuantity = (currQuantity += quantity);
      map.set(product, newQuantity);
    }
  }

  for (const kvp of map) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}

solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
