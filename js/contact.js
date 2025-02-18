// document.querySelector("form").addEventListener("submit", function(e) {
//     e.preventDefault();
//     var form = this;
//     var formData = new FormData(form);

//     fetch(form.action, {
//         method: "POST",
//         body: formData,
//         headers: { "Accept": "application/json" }
//     }).then(response => {
//         if (response.ok) {
//             alert("Message envoyé avec succès !");
//             form.reset();
//         } else {
//             alert("Une erreur est survenue, veuillez réessayer.");
//         }
//     }).catch(error => {
//         alert("Erreur de connexion !");
//     });
// });