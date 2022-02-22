"use strict";

const fruits=["Orange", "Cerise", "Banane"];

console.log(fruits);
console.log(fruits[2]);// correspond à Banane (3eme élément)

const length=fruits.length;
console.log('taille du tableau:'+ length);
//length est une propriété , propriété qui est une fonction devient une méthode  


fruits.push("Pomme"); //ajoute un élément au tableau
console.log("fruits:",fruits.length);
console.log('taille du tableau:'+ fruits.push("Pomme"));

//Parcours du tableau avec la méthode forEach (High Order Function) qui attend une autre fonction
//elle attend une fonction en paramètre, s'execute pour chaque élément du tableau
fruits.forEach(function (fruit) {
    console.log(fruit);
    
});

// supprime le dernier élément du tableau, shift le 1er élément du tableau

console.log("Je viens de supprimer" + fruits.pop());
fruits.pop;

// index 
console.log('Index de Cerise', fruits.indexOf("Cerise"));

// map = créer un nouveau tableau à partir d'un ancien avec transformation
// est l'ancien tableau =>le nouveau , par élément
const li_fruits = fruits.map(fruit => '<li>${fruit}</li>');
console.log('li_fruits:', li_fruits);

// filter; créer un nouveau tableau à partir d'un ancien avec des filtres 
// si la taille de l'élément est sup à 4, alors il le renvoie
const fruits_courts = fruits.filter(elt =>elt.lenght <5);
console.log('fruits_courts:', fruits_courts);