let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
    navbar.classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
});


