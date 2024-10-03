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
const inputs = document.querySelectorAll(
  "input[type = text], input[type = email], input[type = date], input[type = date], input[type=number], input[type = radio], input[type = checkbox]"
);

let first, last, email, quantity, birthdate, confirmPass, locations;

//Création d'un affichage erreur message qui va me servir pour tous mes champs des que j'en aurai besoin
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message; // Message personnalisé qui sera mis dans mes constantes de vérification
  }
};

// Fonction pour vérifier si le champ est vide // Ajout de ma part // Constante de verification
const firstChecker = (value) => {
  if (value.length < 2) {
    errorDisplay("first", "Le prénom doit contenir au moins 2 caractères");
    pseudo = null;
  } else {
    errorDisplay("first", "", true);
    first = value;
  }
};
const lastChecker = (value) => {
  if (value.length < 2) {
    errorDisplay("last", "Le nom doit contenir au moins 2 caractères");
    last = null;
  } else {
    errorDisplay("last", "", true);
    last = value;
  }
};
const emailChecker = (value) => {
  if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    errorDisplay("email", "Veuillez entrer une adresse mail valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};
const birthdateChecker = (value) => {
  const birthdateDate = new Date(value); // On change le nom pour éviter la réassignation
  const today = new Date();

  // Calculer l'âge en années
  let age = today.getFullYear() - birthdateDate.getFullYear();
  const monthDiff = today.getMonth() - birthdateDate.getMonth();

  // Ajustement si l'anniversaire n'est pas encore passé cette année
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
  ) {
    age--;
  }

  // Vérification si l'âge est entre 8 et 99 ans
  if (isNaN(age) || age < 8 || age > 99) {
    errorDisplay(
      "birthdate",
      "Vous devez avoir entre 8 et 99 ans pour vous inscrire"
    );
    birthdate = null;
  } else {
    errorDisplay("birthdate", "", true);
    birthdate = value; // Ici, tu assignes la valeur de la date correctement
  }
};

const quantityChecker = (value) => {
  if (value < 0 || value > 99) {
    errorDisplay("quantity", "Veuillez entrer un nombre entre 0 et 99");
    quantity = null;
  } else {
    errorDisplay("quantity", "", true);
    quantity = value;
  }
};
const checkboxChecker = (checked) => {
  if (!checked) {
    errorDisplay(
      "checkbox1",
      "Vous devez vérifier que vous acceptez les termes et conditions"
    );
    confirmPass = null;
  } else {
    errorDisplay("checkbox1", "", true);
    confirmPass = checked;
  }
};
const radioChecker = (checked) => {
  if (!checked) {
    errorDisplay("locations", "Vous devez choisir une ville");
    locations = null;
  } else {
    errorDisplay("locations", "", true);
    locations = checked;
  }
};

// Ajout de ma part

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstChecker(e.target.value);
        break;

      case "last":
        lastChecker(e.target.value);
        break;

      case "email":
        emailChecker(e.target.value);
        break;

      case "quantity":
        quantityChecker(e.target.value);
        break;

      case "birthdate":
        birthdateChecker(e.target.value);
        break;

      // A Verifier car on est sur de la checkbox //
      case "locations":
        radioChecker(e.target.checked);
        break;

      case "confirmPass":
        checkboxChecker(e.target.checked);
        break;

      default:
        null;
    }
  });
});

// function validate() {
//   let first = document.getElementById("first");
//   let last = document.getElementById("last");
//   let email = document.getElementById("email");
//   let quantity = document.getElementById("quantity");
//   let birthdate = document.getElementById("birthdate");
//   let locations = document.getElementsByName("location");
//   let terms = document.getElementById("checkbox1");
// }

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
