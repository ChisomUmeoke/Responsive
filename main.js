let menuButton = document.querySelector(".menu-button");
let navItems = document.querySelector(".nav");
let barHide = document.querySelector(".menu-bar-two");
let barLeft = document.querySelector(".menu-bar-one");
let barRight = document.querySelector(".menu-bar-three");

menuButton.onclick = openMenu;

function openMenu() {
navItems.classList.toggle("toggle-nav");
barHide.classList.toggle("hide-bar-two");
barLeft.classList.toggle("cross-bar-one");
barRight.classList.toggle("cross-bar-three");
}