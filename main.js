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

// DARK/LIGHT MODE
let isDark = false;
const themeBtn = document.getElementById("theme-button");
const iconTheme = "bx-sun";

themeBtn.addEventListener("click", () => {
  themeBtn.classList.toggle(iconTheme);
  if (isDark == true) {
    document.documentElement.style.setProperty("--body-color", "#fefbfb");
    document.documentElement.style.setProperty("--text-color", "#5b5757");
    document.documentElement.style.setProperty("--title-color", "#161212");
    document.documentElement.style.setProperty("--first-color-send", "#de3b49");
    document.documentElement.style.setProperty("--first-color-alt", "#c42130");
    document.documentElement.style.setProperty("--dark-color", "#000");
    isDark = false;
  } else {
    document.documentElement.style.setProperty("--body-color", "#161212");
    document.documentElement.style.setProperty("--text-color", "#fefbfb");
    document.documentElement.style.setProperty("--title-color", "#de3b49");
    document.documentElement.style.setProperty("--first-color-send", "#fff");
    document.documentElement.style.setProperty("--first-color-alt", "#fff");
    document.documentElement.style.setProperty("--dark-color", "#fff");

    isDark = true;
  }
});

// SCROLL TOP ICON
const scrollTop = function () {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollTop);

// scroll reveal i readme
