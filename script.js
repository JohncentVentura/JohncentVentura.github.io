
function ChangeTheme() {
    const btnTheme = document.querySelector('.btn-theme');
    btnTheme.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-theme');
    })
}

function MoveSkillImages(){
    const track = document.getElementById("skill-track"); //If you want to access any element in an HTML page, you always start with accessing the document object

    //The window object is supported by all browsers. It represents the browser's window. The onmousedown event occurs when a user presses a mouse button over an HTML element.
    window.onmousedown = e => {
        track.dataset.mouseDownAt = e.clientX; //stores the position of the mouse where it is pressed?
    }

    window.onmouseup = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    window.onmousemove = e => {
        if (track.dataset.mouseDownAt === "0") return; //if mouseDownAt is at position zero before the mouse is pressed, return to skip the codes below

        //mouseDownAt = 0.00, maxDelta = 1.00, mouseDelta = depends in onmousemove
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 2 //The innerWidth property returns the width of a window's content area.

        const percentage = (mouseDelta / maxDelta) * -100, //percentage is mutliplied by 100 to make mouseDownAt, maxDelta and mouseDelta a percentage
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage, //nextPercentage is used to store where the mouse was last pressed
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100); //limits nextPercentage from moving infinitely 

        track.dataset.percentage = nextPercentage; //store to track.dataset.percentage to become the prevPercentage when onmouseup is called

        ///*
        track.animate({
            transform: `translate(${nextPercentage}%, 0)`
        }, { duration: 1200, fill: "forwards" });
        //*/

        /*
        for (const image of track.getElementsByClassName("skill-image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
        */

        console.log("MovingSkillImage");
    }
}

ChangeTheme();
MoveSkillImages();