const points = document.querySelector(".points-calculated");
const amount = document.querySelector(".amount-donated");

amount.addEventListener("change", (e) => {
  points.textContent = e.target.value * 2;
});

// =========thank you notificatio=========

const closeBtn = document.querySelector(".notify-close");
const overlay = document.querySelector(".wrapper");
const notifyModel = document.querySelector(".ty-notify");
const submitDonation = document.querySelector(".submit-btn");

submitDonation.addEventListener("click", (e) => {
  e.preventDefault();
  notifyModel.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  notifyModel.classList.remove("active");
  overlay.classList.remove("active");
});
