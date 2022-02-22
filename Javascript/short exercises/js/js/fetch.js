"use strict";
// initialistion du token (string) qui va permettre au serveur
// d'être sûr qu'il communique bien avec le même navigateur
let token = "";

// Récupération du token via un fetch. Ici le point d'entrée (endpoint) est
// https://www.coopernet.fr/rest/session/token/
// Ma requête utilise le "verbe" par défaut qui est "GET"
fetch("https://www.coopernet.fr/rest/session/token/")
  .then(function (response) {
    if (response.status !== 200) { // Si c'est différente de 200, c'est qu'il y a un pb
      throw new Error("Le serveur n'a pas répondu correctement : " + response.status);
    } else return response.text(); // Test si la réponse est bien un "string"
  })
  .then(function (data) { // data correspond au retour du résolve (ici deux lignes au dessus)
    console.log("Token récupéré : ", data);
    // Maintenant que j'ai le token, je peux afficher le formulaire
    form_user.classList.remove("hidden");
    token = data;
  })
  .catch(error => { console.log("Erreur attrapée dans fetch token : ", error.message) });

// Stocke dans la variable form_user la référence 
// à l'élément du DOM
const form_user = document.querySelector("#form-user");



// Affectation d'un gestionnaire d'événement (soumission du formulaire)
form_user.onsubmit = function(e) {
  // On supprime le mécanisme du formulaire par défaut qui recharge la page
  e.preventDefault();

  // Récupération des valeurs des champs du formulaire
  const login = document.getElementById("login").value;
  const pwd = document.getElementById("pwd").value;
  
  // Appel de la fonction getUSer (promesse)
  getUser(token, login, pwd)
  .then((data) => {
    console.log("Données de l'utilisateur : ",data);
  })
  .catch(error => { console.log("Erreur attrapée dans getUser: ", error.message) });
}



function getUser(token, login, pwd) {
  // création de la requête
  console.log("Dans getUser");
  // Va chercher sur le point d'entrée :
  // https://www.coopernet.fr/user/login?_format=json 
  return fetch("https://www.coopernet.fr/user/login?_format=json", {
    credentials: "same-origin",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": token
    },
    body: JSON.stringify({
      name: login,
      pass: pwd
    })
  })
    .then(response => response.json()) // Teste si la réponse est bien du json
    .then(data => {
      //console.log("success", data);
      if (data.current_user === undefined) {
        throw new Error("Erreur de login");
      } else {
        return data;
      }
    })
};

function getTerms(user, token) {
  // création de la requête
  console.log("Dans getTerms de coopernet. User = ", user);
  return fetch("https://www.coopernet.fr/memo/themes/" + user.uid, {
    credentials: "same-origin",
    method: "GET",
    headers: {
      "Content-Type": "application/hal+json",
      "X-CSRF-Token": token,
      Authorization: "Basic " + btoa(user.login + ":" + user.pwd), // btoa = encodage en base 64
    },
  })
    .then((response) => {
      console.log("data reçues dans getTerms avant json() :", response);
      if (response.status === 200) return response.json();
      else throw new Error("Problème de réponse ", response);
    })
    .then((data) => {
      console.log("data reçues dans getTerms :", data);
      if (data) {
        console.log("termes : ", data);
        return data;
      } else {
        throw new Error("Problème de data " + data.message);
      }
    });
}





//autre exo "use strict";
// console.log("fetch.js");

// fetch("https://www.coopernet.fr/rest/session/token/")
//   .then(function(response) {
//     if (response.status !== 200) { // si ça c'est mal passé
//       throw new Error("Le serveur n'a pas répondu correctement");
//     } else return response.text(); // renvoie une promesse
//   })
//   .then(function(data) { // data correspond au retour du résolve (ici deux lignes au dessus)
//     console.log("Token récupéré : ", data);
//   })
//   .catch(error => {console.log("Erreur attrapée : ", error.message)});

  // DOM= façon dont la page Js est mise en forme
