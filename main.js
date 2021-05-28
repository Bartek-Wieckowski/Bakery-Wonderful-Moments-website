// HAMBURGER MENU
const navMenu = document.querySelector(".nav__menu--js");
const toggle = document.querySelector(".nav__toggle--js");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  toggle.classList.toggle("toggleX");
});

// REMOVING HAMBURGER MENU AFTER CLICK
const allLinks = document.querySelectorAll(".nav__link");

const linkAction = function () {
  const navMenu = document.querySelector(".nav__menu--js");
  navMenu.classList.remove("show-menu");
  toggle.classList.remove("toggleX");
};
allLinks.forEach((n) => n.addEventListener("click", linkAction));
