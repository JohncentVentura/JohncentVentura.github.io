function ChangeTheme() {
    const btnTheme = document.querySelector('.btn-theme');
    btnTheme.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-theme');
    })
}

ChangeTheme();