const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')
const body = document.body

const navSlideIn = () => {
  navLinks.style.transition = "0.8s ease"
  navLinks.style.transform = "translateY(0%)"
  body.classList.add('menu-open')
}
const navSlideOut = () => {
  navLinks.style.transition = "0.8s ease"
  navLinks.style.transform = "translateY(-100%)"
  body.classList.remove('menu-open')
}

burger.addEventListener('click', function() {
  if(navLinks.style.transform == "translateY(0%)") {
    navSlideOut();
  } else {
    navSlideIn();
  }
});
