// script.js

// Redirection avec ancre vers la barre de navigation
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les liens qui pointent vers une ancre
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien

      // Récupère l'ID de l'ancre depuis l'attribut href
      const targetId = this.getAttribute("href").substring(1);

      if (targetId === "about" || targetId === "parcours" || targetId === "projets" || targetId === "contact" || targetId === "veille") {
        // Défilement doux vers le haut de la page
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Défilement doux jusqu'à l'élément cible
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });
});

// Barre de navigation
window.addEventListener("scroll", function() {
  const navbar = this.document.querySelector(".navigation");
  if (this.window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
})

// Barre de navigation responsive
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

// menuIcon.addEventListener('click', () => {
//   navigation.classList.toggle('open');
//   menu.classList.toggle('open');
// });
