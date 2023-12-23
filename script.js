const homeSection = document.getElementById("id-home");
const skillSection = document.getElementById("id-skills");
const contactSection = document.getElementById("id-contact");

function setProperties() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    homeSection.style.setProperty("height", `${vh}px`);
    skillSection.style.setProperty("height", `${vh}px`);
    contactSection.style.setProperty("height", `${vh}px`);
    console.log("vw", vw, "vh", vh);
}

setProperties();

function ChangeTheme() {
    const btnTheme = document.querySelector(".btn-theme");
    btnTheme.addEventListener('mousedown', () => {
        let element = document.body;
        element.classList.toggle('light-theme');
    })
}

ChangeTheme();