function addItem() {
  const itemList = document.getElementById(`items`);
  const textInput = document.getElementById(`newItemText`);
  const textInputValue = textInput.value;

  if (!textInputValue) {
    return;
  }
  const li = document.createElement(`li`);
  li.innerText = textInputValue;
  itemList.appendChild(li);

  textInput.value = ``;
}
