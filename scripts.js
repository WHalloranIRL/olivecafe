document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  const links = document.querySelectorAll("nav ul li a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector("nav").offsetHeight,
        behavior: "smooth",
      });

      navLinks.classList.remove("active");
    });
  });
});
