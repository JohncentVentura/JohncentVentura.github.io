(function setProperties() {
    let body = document.body;

    //Setting height of sections
    const homeSection = document.getElementById("id-home");
    //const contactSection = document.getElementById("id-contact");
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    homeSection.style.setProperty("height", `${vh}px`);
    //contactSection.style.setProperty("height", `${vh}px`);
    console.log("vw", vw, "vh", vh);

    //Change theme (Start with Dark Theme)
    const themeButton = document.querySelector(".theme-button");
    themeButton.addEventListener('mousedown', () => {
        body.classList.toggle('light-theme');
    });
})();


