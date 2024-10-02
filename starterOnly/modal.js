// Cette fonction permet à la barre de navigation de devenir responsive.
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// Selectionne les modalbg modalBtn et formData
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// J'ajoute ma constante closeBtn pour selectionner le bouton x de fermeture
const closeBtn = document.querySelector(".close"); // Ajout de ma part

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//Ajout d'un evenement sur chaque bouton pour lancer la modal

// lance la modale en cliquant sur le bouton
function launchModal() {
  modalbg.style.display = "block";
}

//***********************************FERMER LA MODALE AVEC LE BOUTON X****************************/
// Fermer la modale avec le bouton x
closeBtn.addEventListener("click", closeModal); // Je mets un evenement sur le bouton x pour fermer la modale

// Ajout de la fonction closeModal pour fermer la modale avec le bouton x ajout de ma part
function closeModal() {
  modalbg.style.display = "none";
}

//***************************CREATION D UNE FONCTION VALIDATE **************** */
function validate() {
  let first = document.getElementById("first");
  let last = document.getElementById("last");
  let email = document.getElementById("email");
  let quantity = document.getElementById("quantity");
  let birthdate = document.getElementById("birthdate");
  let locations = document.getElementsByName("location");
  let terms = document.getElementById("checkbox1");
}

//****************** Récupérer les champs du formulaire */
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let prenom = document.getElementById("first");
//   console.log(prenom);
// });

//***********************************ANIMATION POUR LA FERMETURE MODALE****************************/
// function closeModal() {
//   const modal = document.querySelector(".content");
//   modal.classList.add("modal-closing");

//   modal.addEventListener(
//     "animationend",
//     function () {
//       modal.classList.remove("modal-closing");
//       document.querySelector(".bground").style.display = "none";
//     },
//     { once: true }
//   );
// }
//*********************************************************************************************** */
