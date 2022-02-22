
//la correction

// Récupération de la référence vers le bouton ouverture / fermeture
const button_menu = document.querySelector("header nav button");

// Récupération du menu
const ul_menu = document.querySelector("header nav ul");
ul_menu.setAttribute("class","hidden");

// On affecte un gestionnaire d'événement au click sur le bouton
button_menu.onclick = function() {
  ul_menu.classList.toggle("hidden");
}

// Création de la croix pour fermer
const close_cross = createCompleteDomElement("div","x","close",ul_menu);
close_cross.onclick = function() {
  ul_menu.setAttribute("class","hidden");
}



// mon exo "use strict";

// //Récupération d"un élément bouton
// const button = document.querySelector("nav button");
// console.log('propriété onclick sur bouton:', button.onclick);


// //Attacher une fonction gestionnaire d'évent à mon bouton

// button.onclick=function() {
//     console.log('Click sur le bouton');
// }

// // la fonction est appelée uniquement si le clique sur la souris arrive 
// button.onclick=handleClick;
// console.log('button.onclick : ', button.onclick);

// //Pour les sous-menus

// const list_ul = document.querySelectorAll("ul");

// for(let i = 0; i < list_ul.length; i ++) {
// //   // chaque items
// list_ul[i].onclick = function() {
// console.log('click sur item');
// //     // Je vais chercher l'élément suivant avec nextSibling
// const next_li = this.nextElementSibling;
// next_li.classList.toggle("hidden");
// }
// }

// //Fermer lorsque l'on clique sur la croix, il faut créer un élément
