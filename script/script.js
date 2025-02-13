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

// Barre de navigation
window.addEventListener("scroll", function() {
  const navbar = this.document.querySelector(".navigation");
  if (this.window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
})

// Caroussel d'image
// document.addEventListener("DOMContentLoaded", function() {
//     const carousels = document.querySelectorAll(".carousel");

//     carousels.forEach(carousel => {
//         let currentIndex = 0;
//         const images = [
//             "../image/projets/no-image.jpg", // Image 1
//             "../image/projets/no-image.jpg", // Image 2
//             "../image/projets/no-image.jpg",  // Image 3
//             "../image/projets/no-image.jpg"  // Image 3
//         ];
//         const imgElement = carousel.querySelector(".carousel-image");
//         const prevButton = carousel.querySelector(".prev");
//         const nextButton = carousel.querySelector(".next");
//         const indicatorsContainer = carousel.querySelector(".carousel-indicators");

//         // Création des indicateurs
//         images.forEach((_, index) => {
//             const indicator = document.createElement("div");
//             indicator.classList.add("indicator");
//             if (index === 0) indicator.classList.add("active");
//             indicator.dataset.index = index;
//             indicatorsContainer.appendChild(indicator);
//         });

//         const indicators = indicatorsContainer.querySelectorAll(".indicator");

//         function updateImage(index) {
//             imgElement.style.opacity = 0;
//             setTimeout(() => {
//                 imgElement.src = images[index];
//                 imgElement.style.opacity = 1;
//                 updateIndicators(index);
//             }, 300);
//         }

//         function updateIndicators(index) {
//             indicators.forEach(indicator => indicator.classList.remove("active"));
//             indicators[index].classList.add("active");
//         }

//         prevButton.addEventListener("click", () => {
//             currentIndex = (currentIndex - 1 + images.length) % images.length;
//             updateImage(currentIndex);
//         });

//         nextButton.addEventListener("click", () => {
//             currentIndex = (currentIndex + 1) % images.length;
//             updateImage(currentIndex);
//         });

//         // Permettre de cliquer sur un indicateur pour changer d'image
//         indicators.forEach(indicator => {
//             indicator.addEventListener("click", (e) => {
//                 currentIndex = parseInt(e.target.dataset.index);
//                 updateImage(currentIndex);
//             });
//         });
//     });
// });
