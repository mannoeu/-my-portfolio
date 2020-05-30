const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector("nav");

function menuCollapse() {
  navbar.classList.toggle("active");
}

menuToggle.addEventListener("click", menuCollapse);
