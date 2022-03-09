const menuToggleIcon = document.querySelector(".toggle-icon");
const navBar = document.querySelector(".register");

menuToggleIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  menuToggleIcon.classList.toggle("active");
});
