const dialog = document.querySelector(".legend-dialog");
const dialogButton = document.querySelector(".legend__btn");

dialogButton.addEventListener("click", (event) => {
  event.stopPropagation();
  dialog.showModal();
});

document.addEventListener("click", (event) => {
  if (dialog.open && !dialog.contains(event.target)) {
    dialog.close();
  }
});
