const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
const spinerEL = document.querySelector('.spiner');
spinerEL.style.opacity = '0';;
window.addEventListener('load', () => {
    setTimeout(() => {
        spinerEL.style.display = 'none';
    }, 600);
})





