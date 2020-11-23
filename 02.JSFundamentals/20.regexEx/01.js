function solve(input) {
  let totalSum = 0;
  console.log(`Bought furniture:`);
  for (const iterator of input) {
    const pattern = />>(?<name>.+)<<(?<price>[\d]+\.?[\d]+)!(?<quantity>[\d]+)/g;
    const matches = pattern.exec(iterator);

    if (matches) {
      const { name, price, quantity } = matches.groups;
      console.log(name);
      totalSum += +price * +quantity;
    }
  }
  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

solve([`>>Sofa<<312.23!3`, `>>TV<<300!5`, `>Invalid<<!5`, `Purchase`]);
