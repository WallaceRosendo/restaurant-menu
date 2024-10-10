document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.nav-placeholder');
  
  const handleScroll = () => {
    const navbarTop = navbar.getBoundingClientRect().top;

    console.log(navbarTop);

    if (navbarTop <= 0) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };

  window.addEventListener('scroll', handleScroll);
});