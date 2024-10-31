// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les liens qui pointent vers une ancre
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien

      // Récupère l'ID de l'ancre depuis l'attribut href
      const targetId = this.getAttribute("href").substring(1);

      if (targetId === "about") {
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
