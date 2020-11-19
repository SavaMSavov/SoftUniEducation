function solve() {
  document.querySelector(`#searchBtn`).addEventListener(`click`, onSearch);

  const input = document.querySelector(`#searchField`);
  function onSearch(e) {
    //chetem vhod
    const query = input.value.trim().toLocaleLowerCase();

    if (query.trim().length > 0) {
      const tbody = document.querySelector(`tbody`);
      //obhojdame redovete i premahvame class select
      [...tbody.querySelectorAll(`tr`)].forEach((r) => {
        r.classList.remove(`select`);
      });
      //obhojdame kletkite
      [...tbody.querySelectorAll(`td`)].forEach((d) => {
        if (d.textContent.trim().toLocaleLowerCase().includes(query)) {
          d.parentNode.classList.add(`select`);
        }
      });
      input.value = ``;
    }
  }
}
