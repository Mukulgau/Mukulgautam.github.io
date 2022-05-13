const list = document.querySelector("#menu_items");

const showBtn = document.querySelector(".fa-bars");

const closeBtn = document.querySelector(".fa-xmark");

const navBtn = document.querySelector(".nav-btn");
const headerFixed = document.getElementById("header");

showBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
  list.classList.toggle("show");
  navBtn.classList.toggle("show");
  headerFixed.classList.toggle("header_bg");
}

function closeMenu() {
  list.classList.toggle("show");
  navBtn.classList.toggle("show");
  headerFixed.classList.toggle("header_bg");
}
