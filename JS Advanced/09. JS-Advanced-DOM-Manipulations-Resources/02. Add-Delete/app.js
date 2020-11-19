function addItem() {
  let newLi = document.createElement("li");
  let href = document.createElement("a");
  href.textContent = "[Delete]";
  href.href = "#";
  href.addEventListener("click", deleteItem);
  newLi.textContent = document.getElementById("newText").value + " ";
  newLi.appendChild(href);
  document.getElementById("items").appendChild(newLi);
  document.getElementById("newText").value = "";

  function deleteItem() {
    let li = this.parentNode;
    let ul = this.parentNode.parentNode;
    ul.removeChild(li);
  }
}
