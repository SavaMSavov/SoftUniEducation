function solve(fruit, weight, pricePerKilo) {
    let weightInKilos = weight/1000
  let totalPrice = weightInKilos * pricePerKilo;

  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${weightInKilos.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve(`orange`, 2500, 1.8);
