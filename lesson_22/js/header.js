document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 110) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", (e) => {
  const checkbox = document.getElementById("checkbox");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");

  checkbox.addEventListener("change", () => {
    overlay.classList.toggle("hidden");
    modal.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`.header-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          link.classList.add("active");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => observer.observe(section));
});


