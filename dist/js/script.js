const menuIcon = document.querySelector('.img-icon')
const mobileMenu = document.querySelector('.nav__mobile')



menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
})