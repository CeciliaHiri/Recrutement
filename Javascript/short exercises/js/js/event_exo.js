
// Faire en sorte que le click sur le titre supprime ou cache
// le paragraphe

"use strict";
const h1 = document.querySelector("h1");
const p = document.querySelector("p");


h1.onclick = function(event) {
    
    console.log('this : ', this);
    p.remove();
    console.log('event.target', event.target);
}

//ou autre méthode
//h1.onclick = function() {
    //if(p.hidden == true) p.hidden=false;
    //else p.hidden = true;
//}

//------------ autre exo = cacher un paragraphe
//Faire fonctionner ce code avec cette classe ci-dessous
//Cela implique que vous ayez écrit le code css .hidden {diplay:none;}
//On applique le toogle hidden quand on clique ça met la classe hidden
// h1.onclick = function() {
// p.classList.toggle("hidden");
// }



//------------ autre exo suivant sur eventHidden_exo.html


// // fichier formateur 

// //console.log('this : ', this);
// //console.log('window : ', window);
// // Récupération de l'élément du dom qui correspond à mon unique bouton
// const p = document.querySelector("p");

// //console.log('propriété onclick du bouton : ', button.onclick);
// let cpt = 0;

// // Affecter une référence à une fonction gestionnaire d'événement à mon bouton
// // Attention à ne pas affecter l'appel d'une fonction (synchrone)
// // A chaque click sur le bouton, la fonction gestionnaire d'événement
// // sera appelée
// p.onclick = function(event) {
//   cpt ++;
//   console.log('Click sur le p', cpt);
//   console.log('this : ', this);
//   console.log('event.target', event.target);
// }
// //console.log('p.onclick : ', p.onclick);

