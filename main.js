const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')



menuEmail.addEventListener('click', () => {
    const isCarIconOpen = !aside.classList.contains('inactive')
    if(isCarIconOpen){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
  });

menuHamIcon.addEventListener('click', () => {
    const isCarIconOpen = !aside.classList.contains('inactive')
    if(isCarIconOpen){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
})

menuCarIcon.addEventListener('click', () => {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }
    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive')

    }

    aside.classList.toggle('inactive')

})


