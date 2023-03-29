// toggle menu //
const hamburger = document.querySelector(".humburger");
const navLink = document.querySelector(".nav-links");
const buyTicket = document.querySelector("buy-btn");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("nav-links");
});

buyTicket.addEventListener("click", function () {
  window.location = "../HTML/cart.html";
});
