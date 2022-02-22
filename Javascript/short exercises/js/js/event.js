"use strict";
 console.log('window :', window);
//Récupération d"un élément bouton
const button = document.querySelector("button");

console.log('propriété onclick sur bouton:', button.onclick);

//Attacher une fonction gestionnaire d'évent à mon bouton
// A chaque clic sur le bouton, la fonction gestionnaire d'event sera appelée
button.onclick=function() {
    console.log('Click sur le bouton');
}
// cpt= compteur, le égal veut dire j'affecte
let cpt=0;
button.onmouseover=function(){
    cpt ++;
    console.log('click sur le bouton', cpt);
}
// la fonction est appelée uniquement si le clique sur la souris arrive 
//onclick est la variable, on lui attribue une référence de la fonction
button.onclick=handleClick;
console.log('button.onclick : ', button.onclick);

//this renvoie à l'objet en cours