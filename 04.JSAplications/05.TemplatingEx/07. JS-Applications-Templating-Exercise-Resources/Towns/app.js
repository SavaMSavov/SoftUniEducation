/*golbals Handlebars*/
window.addEventListener(`load`, () => {
  document
    .querySelector(`#btnLoadTowns`)
    .addEventListener(`click`, renderTowns);

  const input = document.querySelector(`#towns`);
  const rootEl = document.querySelector(`#root`);

  function renderTowns(e) {
    e.preventDefault();
    const towns = input.value.split(`, `);
    console.log(towns);

    //темплейт
    const templateString = document.getElementById(`main-template`).innerHTML;
    //компилиране
    const templateFn = Handlebars.compile(templateString);
    //изпълнение на темплейта с нашите данни
    const generatedHtml = templateFn({ towns });
    //поставяне на генерирания htlm в документа
    rootEl.innerHTML = generatedHtml;
  }
});
