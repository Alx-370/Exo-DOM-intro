const button = document.querySelector(".dropdown-btn")
const menu = document.querySelector(".dropdown-menu-content");


button.addEventListener("click", () => {
    menu.classList.toggle("visible");

});