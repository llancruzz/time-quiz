"use strict";
/* Light theme and Dark theme */
let themeToggler = document.getElementById('theme-toggler');
themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');

    if (themeToggler.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
};