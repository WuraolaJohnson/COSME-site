// const menuButton = document.querySelector(".bar");
// const menu = document.querySelector(".menu");

// menuButton.addEventListener("click", () => {
//     menu.classList.toggle("active");
// });

// function checkScreenSize() {
//     if (window.innerWidth >= 979) {
//         menu.classList.remove("active");
//     }
// }

// window.addEventListener("resize", checkScreenSize);

// checkScreenSize();

const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");

bar.addEventListener("click", () => {
    menu.classList.toggle("active");
});

function checkScreenSize() {
    if (window.innerWidth >= 979) {
        menu.classList.remove("active");
    }
}

window.addEventListener("resize", checkScreenSize);

checkScreenSize();