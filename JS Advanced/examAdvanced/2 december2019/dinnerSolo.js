class ChristmasDinner {
  constructor(budget) {
    this.setBudget(budget);
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  setBudget(budget) {
    if (budget < 0) {
      throw new Error(`The budget cannot be a negative number`);
    }
    this.budget = budget;
  }

  shopping(product) {
    let type = product[0];
    let price = product[1];
    if (this.budget < price) {
      throw new Error(`Not enough money to buy this product`);
    }
    this.products.push(type);
    this.budget -= price;
    return `You have successfully bought ${type}!`;
  }

  recipes(recipe) {
    let recipeName = recipe[`recipeName`];
    let productList = recipe[`productsList`];
  }
}
