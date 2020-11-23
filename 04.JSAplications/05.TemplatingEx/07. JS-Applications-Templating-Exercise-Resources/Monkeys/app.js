/* globals Handlebars*/
import monkeys from "./monkeys.js";
window.addEventListener("load", async () => {
  const mainEl = document.querySelector("section");

  //initialize templates
  const mainString = await (await fetch("./main.hbs")).text();
  const mainTemplate = Handlebars.compile(mainString);
  Handlebars.registerPartial(
    "monkey",
    await (await fetch("./monkey.hbs")).text()
  );

  //render html
  const html = mainTemplate({ monkeys });
  mainEl.innerHTML = html;

  //   //set up interaction
  const monkeyEl = document.querySelector(".monkeys");
  mainEl.addEventListener("click", onClick);

  function onClick(e) {
    if (e.target.tagName !== "BUTTON") {
      return;
    }

    const div = e.target.parentNode.querySelector("p");
    div.removeAttribute("style");
  }
});
