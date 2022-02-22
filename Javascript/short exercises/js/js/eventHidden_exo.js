// Récupération de l'élément du dom qui correspond à mon unique bouton

// console.log('hello');

// const h1s = document.querySelectorAll("h1");

// for (let i = 0; i < h1s.length; i++) {
//     console.log('h1 : ', i, h1s[i]);
//     h1s[i].onclick = function(){
//     //this.nextSibling.classList.toggle("hidden");
//     console.log('NextSibling', this.nextElementSibling);
//     const next_p = this.nextElementSibling;
//     console.log('next_p',next_p);
//     next_p.classList.toggle("hidden");
//     }
// }

//Correction
const list_h1 = document.querySelectorAll("h1");

for(let i = 0; i < list_h1.length; i ++) {
//   // chaque h1
list_h1[i].onclick = function() {
console.log('click sur h1');
//     // Je vais chercher l'élément suivant avec nextSibling
const next_p = this.nextElementSibling;
next_p.classList.toggle("hidden");
}
}


// Faire en sorte que le click sur le titre supprime ou cache
// le paragraphe
// 1 : récupérer la référence du titre de niveau 1
// 2 : affecter à l'événement click du titre une fonction
// 3 : cette fonction récupère l'élément du dom qui correspond au paragraphe
// 4 : cacher ou supprimer le paragraphe

    
  // opérateur ternaire
  //p.hidden = p.hidden ? false : true;
  
 /*  if(p.hidden == true) p.hidden = false;
  else p.hidden = true; */
  

// Faire en sorte qu'au click sur un h1, le paragraphe suivant soit 
// caché ou montré .
// Il faudra parcourir les résultats de querySelectorAll
// et il faudra trouver le frère ou soeur suivant (next sibling) 'js nextsibling'