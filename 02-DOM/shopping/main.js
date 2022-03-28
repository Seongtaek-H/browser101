function enter() {
  const lists = document.querySelector(".lists");
  const list = document.createElement("div");
  const del = document.createElement("i");
  del.setAttribute("class", "fa-solid fa-trash-can");
  del.onclick = function (e) {
    this.parentNode.remove();
  };
  list.setAttribute("class", "list");
  const input = document.querySelector("input");
  list.textContent = input.value;
  list.append(del);
  lists.append(list);
  input.value = "";
  input.focus();
}
