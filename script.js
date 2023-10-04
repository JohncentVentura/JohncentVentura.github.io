
function ChangeTheme() {
    const btnTheme = document.querySelector('.btn-theme');
    btnTheme.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-theme');
    })
}

function AnchorDoubleClick() {
    const targLink = document.getElementsByClassName("dblclickType");
    const clickEvent = document.createEvent('MouseEvent');
    clickEvent.initEvent('dblclick', true, true);
    targLink.dispatchEvent(clickEvent);
}

ChangeTheme();

AnchorDoubleClick();
