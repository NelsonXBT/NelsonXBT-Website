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

  window.addEventListener("scroll", function () {
    const blogBtn = document.querySelector(".blog-btn");
    if (window.scrollY > 10) {
      blogBtn.classList.add("scrolled");
    } else {
      blogBtn.classList.remove("scrolled");
    }
  });