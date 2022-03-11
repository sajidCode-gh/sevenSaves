const thumbniel = document.querySelector(".resource-video > div img");
const videoContainer = document.querySelector(".resource-video");

thumbniel.addEventListener("click", () => {
  videoContainer.classList.add("active");
});
