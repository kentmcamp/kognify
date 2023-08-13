// Variable declarations
const header = document.querySelector("header");
const icon = document.querySelector(".bi-yin-yang");
let navIsVisible = false;
const navElement = document.createElement("nav");

// Navbar element
navElement.className = "navbar";
navElement.innerHTML = `<ul>
                            <a href="#" class="navLink"><li class="navBtn">ZEN</li></a>
                            <a href="#" class="navLink"><li class="navBtn">BREATH</li></a>
                            <a href="#" class="navLink"><li class="navBtn"></li></a>
                            <a href="#" class="navLink"><li class="navBtn">ABOUT</li></a>
                        </ul>`;

// Add event to toggle Navbar when `icon` is clicked.
icon.addEventListener("click", () => {
    if (navIsVisible) {
        header.removeChild(navElement); // remove nav
    } else {
        header.appendChild(navElement); // add nav
    }
    navIsVisible = !navIsVisible; // toggle
});
