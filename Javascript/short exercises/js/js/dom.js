"use strict";
// communication avec la fenêtre de windows
console.log('window :', window);

// permet de changer l'url dans le href window.location.href="www.lemonde.fr"
// window.alert("Hello world2");
// window.close();

// pour mettre une image
console.log('window :', window.document.image);

const h1=document.getElementById ('h1');
console.log(h1);
// quand on récupère un élément = get

// création d'un élément du DOM = set
const h2 = document.createElement("h2");
h2.textContent="Titre 2";
console.log('h2: ',h2);
document.body.appendChild("h2");
h2.setAttribute("class","warning");

//Correction
// "use strict";

// // Récupération (get) d'éléments du DOM
// console.log('window : ', window);
// console.log('window document body : ', window.document.body);
// const h1 = document.getElementById("h1");
// console.log(h1);

// // Création (set) d'un élément du DOM
// const h2 = document.createElement("h2");
// h2.textContent = "Titre de niveau 2";
// document.body.appendChild(h2);
// h2.setAttribute("class", "warning"); 

