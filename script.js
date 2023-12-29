(function main() {
    let body = document.body;

    //Setting height of sections
    const homeSection = document.getElementById("id-home");
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    homeSection.style.setProperty("height", `${vh}px`);
    console.log("vw", vw, "vh", vh);

    //Highlight section in nav
    let navNodeList = document.querySelectorAll('nav ul li a');

    for (let i = 0; i < navNodeList.length - 1; i++) { //navNodeList.length - 1 since we don't include .theme-button
        navNodeList[i].addEventListener('mousedown', event => {
            for (let i = 0; i < navNodeList.length - 1; i++) {
                navNodeList[i].classList.remove('active-nav-section');
            }
            navNodeList[i].classList.toggle('active-nav-section');
        });
    }    

    //Change theme (Start with Dark Theme)
    document.querySelector(".theme-button").addEventListener('mousedown', () => {
        body.classList.toggle('light-theme');
    });

    //Reveal Website Elements On Scroll
    window.addEventListener('scroll', event =>{
        let revealNodeList = document.querySelectorAll('.reveal');

        for(let i = 0; i < revealNodeList.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = revealNodeList[i].getBoundingClientRect().top;
            let revealPoint = 150;

            if(revealTop < windowHeight - revealPoint) {
                revealNodeList[i].classList.add('reveal-active');
            } 
            else{
                revealNodeList[i].classList.remove('reveal-active');
            }
        }    
    });
    
})();




