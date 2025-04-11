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
  const navbar = document.querySelector(".navigation");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const dropdown = document.querySelector('.dropdown');

  // Toggle menu (mobile)
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('active');
  });

  // Toggle submenu on mobile
  const projectsMenu = document.getElementById('projectsMenu');
  projectsMenu.addEventListener('click', (e) => {
    // uniquement sur mobile
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('submenu-open');
    }
  });
});
// Barre de navigation responsive
// const projectsMenu = document.getElementById("projectsMenu");
// const subMenu = document.querySelector(".subMenu");

// projectsMenu.addEventListener("click", () => {
//   if (window.innerWidth <= 768) {
//     subMenu.classList.toggle("open");
//   }
// });


// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');

// burger.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   burger.classList.toggle('open'); // animation croix
// });

// Cartes des spécialités Spécialité SLAM & SISR
function toggleCard(card) {
    card.classList.toggle('open');
    const icon = card.querySelector(".toggle-icon");
    icon.textContent = card.classList.contains("open") ? "+" : "+";
}