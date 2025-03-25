function openImageModal(imageSrc) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const img = document.createElement("img");
    img.src = imageSrc;
    modal.appendChild(img);
    document.body.appendChild(modal);

    // Afficher un texte pour dire comment fermer le modal en dessous de l'image
    const text = document.createElement("i");
    text.textContent = "Cliquer pour fermer ❌";
    text.style.marginTop = "10px"; // Ensure spacing between the image and text
    text.style.textAlign = "center"; // Center the text below the image
    modal.appendChild(text);


    // Fermer le modal
    modal.addEventListener("click", () => {
        document.body.removeChild(modal);
    });
}