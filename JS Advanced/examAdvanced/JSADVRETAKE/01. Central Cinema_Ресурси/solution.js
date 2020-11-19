function solve() {
  const [nameInput, hallInput, ticketsInput] = document.querySelectorAll(
    "input"
  );
  const onScreenBtn = document.getElementsByTagName("button")[0];

  onScreenBtn.addEventListener("click", add);

  function add(e) {
    e.preventDefault();
    let name = nameInput.value;
    let hall = hallInput.value;
    let tickets = Number(ticketsInput.value);

    const sectionMovies = document.querySelector("#movies");
    const ul = sectionMovies.children[1];

    if (name === "" || hall === "" || tickets === NaN) {
      throw new Error("Error");
    }

    let liScreen = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = name;
    const strong = document.createElement("strong");
    strong.textContent = `Hall: ${hall}`;
    liScreen.appendChild(span);
    liScreen.appendChild(strong);
    const div = document.createElement("div");
    const strongDiv = document.createElement("strong");
    strongDiv.textContent = tickets.toFixed(2);
    let inputDiv = document.createElement("input");
    inputDiv.placeholder = "Tickets Sold";
    const btnArchive = document.createElement("button");
    btnArchive.textContent = "Archive";
    div.appendChild(strongDiv);
    div.appendChild(inputDiv);
    div.appendChild(btnArchive);
    liScreen.appendChild(div);
    ul.appendChild(liScreen);
    nameInput.value = "";
    hallInput.value = "";
    ticketsInput.value = "";

    btnArchive.addEventListener("click", function () {
      liScreen.remove();
      const sectionArchive = document.querySelector("#archive");
      const ul = sectionArchive.children[1];
      const clearBtn = sectionArchive.children[2];
      inputDivValue = inputDiv.value;
      const totalProfit = inputDivValue * tickets;
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = name;
      const strong = document.createElement("strong");
      strong.textContent = `Total amount: ${totalProfit.toFixed(2)}`;
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      li.appendChild(span);
      li.appendChild(strong);
      li.appendChild(deleteBtn);
      ul.appendChild(li);

      deleteBtn.addEventListener("click", function () {
        li.remove();
      });

      inputDiv.value = "";
      clearBtn.addEventListener("click", function () {
        ul.innerHTML = "";
      });
    });
  }
}
