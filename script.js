const menu = document.getElementById("menu");
const nav = document.getElementById("navlinks");

menu.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".navlinks a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
