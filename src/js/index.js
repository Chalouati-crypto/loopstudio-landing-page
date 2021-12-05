import "../sass/index.scss";
import "tailwindcss/tailwind.css";

// open hamburger menu
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const main = document.querySelector(".wrapper");
hamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("hidden");
  main.classList.add("hidden");
});

// close hamburger menu
const closeHamburgerBtn = document.querySelector(".close-hamburger-btn");
closeHamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("hidden");
  main.classList.remove("hidden");
});
