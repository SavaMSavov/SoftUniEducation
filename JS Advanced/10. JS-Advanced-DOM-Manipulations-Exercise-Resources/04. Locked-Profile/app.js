function lockedProfile() {
  document.querySelector(`main`).addEventListener(`click`, onClick);

  function onClick(e) {
    //намираме родителя на бутона
    if (e.target.nodeName === `BUTTON`) {
      const parent = e.target.parentNode;
      //намираме ключалката
      const lock = parent.querySelector(`input[type="radio"][value="lock"]`);

      if (lock.checked) {
        return;
      }

      //намираме скритото поле
      const hiddenFields = [...parent.querySelectorAll(`div`)].filter((d) =>
        d.id.includes(`HiddenFields`)
      )[0];

      //ако е видимо => скриваме и изписваме шоу мор
      if (hiddenFields.style.display !== `block`) {
        hiddenFields.style.display = `block`;
        e.target.textContent = `Hide it`;
      } else {
        hiddenFields.style.display = `none`;
        e.target.textContent = `Show more`;
      }
    }
  }
}
