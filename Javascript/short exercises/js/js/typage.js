"use strict";

//déclaration et affectation d'une variable sur la même ligne
//canal historique, le mot clé "var" qu'on remplace par 'let'
let first_name="Bob";

console.log(first_name);// Affiche Bob

// Affiche le type de la variabme (string : texte)
// On comprend que le 'typage' est dynamique

console.log(typeof(first_name));

first_name:"12";
console.log(typeof(first_name));

// l'opérateur concatène les chaines de caractères
console.log(first_name + first_name);

first_name=false;
console.log(typeof(first_name));

first_name=null;
console.log(typeof(first_name));