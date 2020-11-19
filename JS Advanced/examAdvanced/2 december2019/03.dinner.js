class ChristmasDinner {
  constructor(budget) {
    this.setBudget(budget);
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  setBudget(budget) {
    if (budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this.budget = budget;
  }

  shopping(product) {
    let type = product[0];
    let price = product[1];
    if (this.budget < price)
      throw new Error("Not enough money to buy this product");
    this.products.push(type);
    this.budget -= price;
    return `You have successfully bought ${type}!`;
  }

  recipes(recipe) {
    let recipeName = recipe["recipeName"];
    let productsList = recipe["productsList"];
    if (!productsList.every((e) => this.products.includes(e)))
      throw new Error("We do not have this product");
    this.dishes.push({ recipeName, productsList });
    return `${recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    let dishObj = this.dishes.find((e) => e.recipeName == dish);
    if (!dishObj) throw new Error("We do not have this dish");
    if (this.guests[name])
      throw new Error("This guest has already been invited");
    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    return Object.keys(this.guests)
      .map((e) => {
        let dish = this.dishes.find((e1) => e1["recipeName"] == this.guests[e]);
        return `${e} will eat ${this.guests[e]}, which consists of ${dish[
          "productsList"
        ].join(", ")}`;
      })
      .join("\n");
  }
}
