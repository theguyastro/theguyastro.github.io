var mobileMenuBtn = document.querySelector("#mobile-menu-btn");
var mobileMenu = document.querySelector(".mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
    mobileMenuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    mobileMenu.style.display = "none";
    mobileMenuBtn.innerHTML =  `<i class="fa-solid fa-bars"></i>`;
  }
});
