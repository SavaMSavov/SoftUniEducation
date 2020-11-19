function solve(input) {
  let totalIncome = 0;
  for (const iterator of input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%(?:[^\|\$%\.]+)?<(?<product>[\w]+)>(?:[^\|\$%\.]+)?\|(?<quantity>[\d]+)\|(?:[^\|\$%\.\d]+)?(?<price>[0-9]+\.?[\d]+)\$/g;

    const match = pattern.exec(iterator);

    if (match) {
      const { customer, product, price, quantity } = match.groups;
      const purchaseValue = +price * +quantity;
      console.log(`${customer}: ${product} - ${purchaseValue.toFixed(2)}`);

      totalIncome += purchaseValue;
    }
  }
  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

solve([
  `%InvalidName%<Croissant>|2|10.3$`,
  `%Peter%<Gum>1.3$`,
  `%Maria%<Cola>|1|2.4`,
  `%Valid%<Valid>valid|10|valid20$`,
  `end of shift`
]);
