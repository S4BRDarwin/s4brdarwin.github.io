const logo = document.querySelector(".image-logo");
const aboutSection = document.querySelector("#about");

function updatePage() {
    const scrollPosition = window.scrollY;

    const aboutStart = aboutSection.offsetTop;
    const logoOpacity = 1 - Math.min(1, Math.max(0, scrollPosition / aboutStart));

    logo.style.opacity = logoOpacity;
}

window.addEventListener("scroll", updatePage);
window.addEventListener("resize", updatePage);

updatePage();