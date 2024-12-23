// open and close nav slider
navToggle = document.querySelector('.burger-btn');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// close nav slider when a link is clicked
const navLinks = document.querySelectorAll('.nav__link')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


