// Variable declarations
const header = document.querySelector("header");
const icon = document.querySelector(".bi-list");
let navIsVisible = false;
const navElement = document.createElement("nav");

// Navbar element
navElement.className = "navbar";
navElement.innerHTML = `<ul>
                            <a href="#" class="navLink"><li class="navBtn"><i class="bi bi-yin-yang"></i></li></a>
                            <a href="#" class="navLink"><li class="navBtn"><i class="bi bi-code-slash"></i>
                            </li></a>
                            <a href="#" class="navLink"><li class="navBtn"><i class="bi bi-earbuds"></i>
                            </li></a>
                            <a href="#" class="navLink"><li class="navBtn"><i class="bi bi-envelope-at"></i>
</li></a>
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
