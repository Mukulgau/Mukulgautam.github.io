// const headerBackground = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 150) {
    document.getElementById("header").classList.add("header_fixed");
  } else {
    document.getElementById("header").classList.remove("header_fixed");
  }
});
