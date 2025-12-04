const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
const body = document.body
const mobileHeader = document.querySelector('.mobile-header')

const navSlideIn = () => {
  navLinks.style.transition = "0.8s ease"
  navLinks.style.transform = "translateY(0%)"
  body.classList.add('menu-open')
  if (mobileHeader) {
    mobileHeader.style.display = 'none'
    mobileHeader.style.visibility = 'hidden'
    mobileHeader.style.opacity = '0'
  }
}
const navSlideOut = () => {
  navLinks.style.transition = "0.8s ease"
  navLinks.style.transform = "translateY(-100%)"
  body.classList.remove('menu-open')
  if (mobileHeader) {
    mobileHeader.style.display = ''
    mobileHeader.style.visibility = ''
    mobileHeader.style.opacity = ''
  }
}

burger.addEventListener('click', function() {
  if(navLinks.style.transform == "translateY(0%)") {
    navSlideOut();
  } else {
    navSlideIn();
  }
});
