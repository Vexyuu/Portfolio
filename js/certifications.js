const certifications = [
    {
        titre: "Certification SoloLearn - SQL Intermediate",
        organisme: "SoloLearn",
        description: "Certificat attestant de mes compétences en SQL avancé.",
        image: "../image/certifications/SQL_Intermediate_SoloLearn.jpg",
        lien: "https://www.sololearn.com/fr/certificates/CC-NVAPAKO8",
        date: "2025-04-03"
    },
    {
        titre: "Certification SoloLearn - JavaScript Intermediate",
        organisme: "SoloLearn",
        description: "Certificat attestant de mes compétences en JavaScript avancé.",
        image: "../image/certifications/JavaScript_Intermediate_SoloLearn.jpg",
        lien: "https://www.sololearn.com/certificates/CC-WF8ABFCD",
        date: "2025-03-29"
    },
    {
        titre: "Certification SoloLearn - Développeur Python",
        organisme: "SoloLearn",
        description: "Certificat attestant de mes compétences en Python.",
        image: "../image/certifications/Developpeur_Python_SoloLearn.jpg",
        lien: "https://www.sololearn.com/certificates/CC-1LLAVZKL",
        date: "2025-03-25"
    },
    {
        titre: "Certification Le Wagon - Intro to Python and Data Analysis",
        organisme: "Le Wagon",
        description: "Certificat attestant de mes compétences en Python et analyse de données.",
        image: "../image/certifications/Intro_to_PythonData_LeWagon.jpg",
        lien: "https://app.lewagon.school/certificates/lwrv5pehin",
        date: "2025-01-28"
    },
    {
        titre: "Certification Cisco Network - Intro to Cybersecurity",
        organisme: "Cisco Network",
        description: "Certificat attestant de mes compétences en cybersécurité.",
        image: "../image/certifications/Intro_to_Cybersecurity_Cisco.jpg",
        lien: "https://www.credly.com/badges/e233362e-1a7c-45be-944c-ac3fe8974528/linked_in_profile",
        date: "2024-12-09"
    },
    {
        titre: "Certification Ratatype - Dactylographie",
        organisme: "Ratatype",
        description: "Certificat attestant de mes compétences en dactylographie.",
        image: "../image/certifications/Dactylographie_Ratatype.jpg",
        lien: "https://www.ratatype.fr/u5170907/certificate/fr/",
        date: "2024-03-05"
    }
]

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("certifications-list");

    certifications.forEach(element => {
        const elementDiv = document.createElement("div");
        elementDiv.classList.add("certification-card");

        elementDiv.innerHTML = `
            <img src="${element.image}" alt="${element.titre}" style="width: 100%; height: auto;">
            <h3>${element.titre}</h3>
            <h4>${element.organisme}</h4>
            <p>${element.description}</p>
            <p>Date d'obtention : <b>${new Date(element.date).toLocaleDateString()}</b></p>
            <a href="${element.lien}" target="_blank">🏅 Voir la certification</a>
        `;
        container.appendChild(elementDiv);
    })
});

document.addEventListener("DOMContentLoaded", function() {
    const nbCertification = document.querySelector("#certification-numbers");
    const arrayCertifications = Object.keys(certifications);
    console.log(arrayCertifications);
    nbCertification.innerHTML = arrayCertifications.length;
});
