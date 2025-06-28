


const searchInput = document.getElementById("searchInput");
  const blogCards = document.querySelectorAll(".blog-card");

  searchInput.addEventListener("keyup", function () {
    const keyword = this.value.toLowerCase();

    blogCards.forEach(function (card) {
      const title = card.querySelector("h3").textContent.toLowerCase();
      if (title.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });


   const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", function () {
    // Show when scrolled down 100px
    if (window.scrollY > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });