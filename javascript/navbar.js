const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')

const navSlideIn = () => {
  navLinks.style.transition = "0.8s ease"
  navLinks.style.transform = "translateY(0%)"
}
const navSlideOut = () => {
  navLinks.style.transition = "0.8s ease"
  navLinks.style.transform = "translateY(-100%)"
}

burger.addEventListener('click', function() {
  if(navLinks.style.transform == "translateY(0%)") {
    navSlideOut();
  } else {
    navSlideIn();
  }
});
