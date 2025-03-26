const projetsImages = {
    1: [
        // "../image/projets/OrderByYou_1.jpg",
        // "../image/projets/OrderByYou_2.jpg",
        // "../image/projets/OrderByYou_3.jpg"
        "../image/projets/no-image.jpg",
        "../image/projets/no-image2.png",
        "../image/projets/no-image.jpg"
    ],
    2: [
        // "../image/projets/passwordgen-1.jpg",
        // "../image/projets/passwordgen-2.jpg",
        // "../image/projets/passwordgen-3.jpg"
        "../image/projets/no-image.jpg",
        "../image/projets/no-image2.png",
        "../image/projets/no-image.jpg"
    ],
    3: [
        // "../image/projets/ordicare-1.jpg",
        // "../image/projets/ordicare-2.jpg",
        // "../image/projets/ordicare-3.jpg"
        "../image/projets/no-image.jpg",
        "../image/projets/no-imag2.png",
        "../image/projets/no-image.jpg"
    ],
    4: [
        // "../image/projets/ordicare-1.jpg",
        // "../image/projets/ordicare-2.jpg",
        // "../image/projets/ordicare-3.jpg"
        "../image/projets/no-image.jpg",
        "../image/projets/no-imag2.png",
        "../image/projets/no-image.jpg"
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

document.addEventListener("DOMContentLoaded", function() {
    const nbProjects = document.querySelector("#projet-numbers");
    arrayProjetsImages = Object.keys(projetsImages);
    console.log(arrayProjetsImages);
    nbProjects.innerHTML = arrayProjetsImages.length;
});
