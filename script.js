const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
    body.classList.add("dark");
    modeToggle.innerHTML = "<i class='bx bx-sun sun'></i>";
} else {
    modeToggle.innerHTML = "<i class='bx bx-moon moon'></i>";
}

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light");
        modeToggle.innerHTML = "<i class='bx bx-moon moon'></i>";
    } else {
        localStorage.setItem("mode", "dark");
        modeToggle.innerHTML = "<i class='bx bx-sun sun'></i>";
    }
});

sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});
