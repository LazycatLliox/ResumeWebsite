// JavaScript for the hamburger Button

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click",() => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Dark mode function

document.getElementsByClassName("DarkMode")
function DarkMode(){
    DarkMode.style.backgroundColor = "black";
    DarkMode.style.Color = "white";
}

DarkMode();