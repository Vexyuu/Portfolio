const veilles = [
    {
        id: 1,
        title: "Reconnaissance faciale",

        description: "La reconnaissance faciale est une technologie qui permet d'identifier ou de vérifier l'identité d'une personne à partir de son visage.",
        date: "2023-10-01",
        image: "../image/veille/reconnaissance_faciale.jpg",
        lien: "https://www.canva.com/design/DAGnNy4kb2I/KtkZHFPrtlqfBOyNEvaWrg/view?utm_content=DAGnNy4kb2I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=haf7cdf4a0e",
        category: "ia"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("veille-list");

    veilles.forEach(veille => {
        const veilleDiv = document.createElement("div");
        veilleDiv.classList.add("veille-card");

        veilleDiv.innerHTML = `
            <img src="${veille.image}" alt="${veille.title}" style="width: 100%; height: auto;">
            <h3>${veille.title}</h3>
            <p>${veille.description}</p>
            <a href="${veille.lien}" target="_blank">🔗 Lien vers la diapositive</a>
        `;
        container.appendChild(veilleDiv);
    })
});