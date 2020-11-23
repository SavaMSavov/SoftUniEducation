function test() {
  document.querySelector("button").addEventListener("click", onClick);
  const items = document.querySelector("ol").children;

  function onClick() {
    const input = document.querySelector("input");
    const value = input.value;
    const letter = value[0];
    const index = letter.toUpperCase().charCodeAt(0) - 65;
    if (items[index].textContent === "") {
      items[index].textContent =
        value[0].toUpperCase() + value.substring(1).toLowerCase();
    } else {
      items[index].textContent += `, ${
        value[0].toUpperCase() + value.substring(1).toLowerCase()
      }`;
    }

    input.value = "";
  }
}
