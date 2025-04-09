// Show welcome message on page load
window.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the Premier League Hub!");
});

// Smooth scroll to section when clicking nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Highlight nav link based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("nav a");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      navLinks.forEach(link => link.classList.remove("active"));
      const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if
