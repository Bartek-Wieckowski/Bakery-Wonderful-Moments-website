// HAMBURGER MENU
const navMenu = document.querySelector(".nav__menu--js");
const toggle = document.querySelector(".nav__toggle--js");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  toggle.classList.toggle("toggleX");
});
