// 1.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
  let openStateStr = element.getAttribute("aria-expanded");
  let openStateBool = openStateStr == "true";
  element.setAttribute("aria-expanded", `${!openStateBool}`);
  closeModalBtn.focus();
}

const openModalBtn = document.getElementById("openModalBtn");
openModalBtn.addEventListener("click", toggle);

const closeModalBtn = document.getElementById("closeModalBtn");
closeModalBtn.addEventListener("click", () => {
  openModalBtn.classList.remove("active");
  openModalBtn.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    openModalBtn.classList.remove("active");
    openModalBtn.focus();
  }
});

// 2.
const openDialogBtn = document.getElementById("openDialogBtn");
const closeDialogBtn = document.getElementById("closeDialogBtn");
const dialog = document.getElementById("accessibleDialog");

openDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  dialog.close();
});

// 3.
function toggle3(e) {
  const element3 = e.target;
  element3.classList.toggle("active");
  let openStateStr3 = element2.getAttribute("aria-expanded");
  let openStateBool3 = openStateStr3 == "true";
  element3.setAttribute("aria-expanded", `${!openStateBool3}`);
  closeMenuBtn.focus();
}

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", toggle3);

const closeMenuBtn = document.getElementById("closeMenuBtn");
closeMenuBtn.addEventListener("click", () => {
  menuButton.classList.remove("active");
  menuButton.focus();
});
