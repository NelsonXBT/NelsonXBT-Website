window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo");
    if (window.scrollY > 10) {
      logo.classList.add("scrolled");
    } else {
      logo.classList.remove("scrolled");
    }
  });