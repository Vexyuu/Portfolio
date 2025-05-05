const projetsImages = {
    1: [
        "../image/projets/OrderByYou_1.jpg",
        "../image/projets/OrderByYou_2.jpg",
        "../image/projets/OrderByYou_3.jpg"
    ],
    2: [
        "../image/projets/Ordicare_1.jpg",
        "../image/projets/Ordicare_2.jpg"
    ]
};

// Sélection de tous les carousels
document.querySelectorAll(".carousel").forEach(carousel => {
    const projectId = carousel.getAttribute("data-project");
    const images = projetsImages[projectId];

    let currentIndex = 0;
    const carouselImage = carousel.querySelector(".carousel-image");
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");
    const indicatorsContainer = carousel.querySelector(".carousel-indicators");

    images.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("indicator");
        if (index === 0) dot.classList.add("active");
        indicatorsContainer.appendChild(dot);
    });

    const indicators = carousel.querySelectorAll(".indicator");

    // Fonction pour changer d’image
    function updateCarousel(index) {
        if (index < 0) index = images.length - 1;
        if (index >= images.length) index = 0;

        carouselImage.style.opacity = 0;
        setTimeout(() => {
            carouselImage.src = images[index];
            carouselImage.style.opacity = 1;
        }, 300);

        indicators.forEach(dot => dot.classList.remove("active"));
        indicators[index].classList.add("active");

        currentIndex = index;
    }

    // Ajouter les événements
    prevButton.addEventListener("click", () => updateCarousel(currentIndex - 1));
    nextButton.addEventListener("click", () => updateCarousel(currentIndex + 1));

    // Ajouter l’événement aux indicateurs
    indicators.forEach((dot, index) => {
        dot.addEventListener("click", () => updateCarousel(index));
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nbProjects = document.querySelector("#projet-numbers");
    const arrayProjetsImages = Object.keys(projetsImages);
    console.log(arrayProjetsImages);
    nbProjects.innerHTML = arrayProjetsImages.length;
});
